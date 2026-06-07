const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const { fromMarkdown } = require("mdast-util-from-markdown");

function readMarkdownFiles(dir) {
  return fs.readdirSync(dir).filter(file => {
    if (file.endsWith(".md") || file.endsWith(".mdx")) {
      return true;
    }
    const stats = fs.statSync(path.join(dir, file));
    return stats.isDirectory();
  });
}

function mergeMarkdownFiles(
  baseUrl,
  docsDir,
  outputFile,
  outputCategoryFilenameTemplate
) {
  let rootMarkdownContent =
    "# Coding Style Guide\n\nLionHeart Group Coding Style Guide";
  let fullMarkdownContent = "";

  function traverseDirectory(currentDir, currentContent = "", index = 0) {
    const files = readMarkdownFiles(currentDir);

    files.sort(function (a, b) {
      const aPath = path.join(currentDir, a);
      const bPath = path.join(currentDir, b);

      const aIsDir = fs.statSync(aPath).isDirectory();
      const bIsDir = fs.statSync(bPath).isDirectory();

      if (!aIsDir && bIsDir) return -1; // Files first
      if (aIsDir && !bIsDir) return 1; // Directories after files

      if (aIsDir && bIsDir) {
        return a.localeCompare(b); // Sort directories alphabetically
      }

      const aContent = fs.readFileSync(aPath, "utf-8");
      const bContent = fs.readFileSync(bPath, "utf-8");

      const aFrontmatter = matter(aContent);
      const bFrontmatter = matter(bContent);

      const aOrder =
        aFrontmatter && aFrontmatter.data.sidebar_position !== undefined
          ? aFrontmatter.data.sidebar_position
          : Number.MAX_SAFE_INTEGER;
      const bOrder =
        bFrontmatter && bFrontmatter.data.sidebar_position !== undefined
          ? bFrontmatter.data.sidebar_position
          : Number.MAX_SAFE_INTEGER;

      return aOrder - bOrder; // Sort by sidebar_position
    });

    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        currentContent = traverseDirectory(filePath, currentContent, index + 1); // Recursive call for subdirectories
      } else if (file.endsWith(".md") || file.endsWith(".mdx")) {
        try {
          const content = fs.readFileSync(filePath, "utf-8");
          const parsed = matter(content);
          const targetUrl =
            baseUrl +
            filePath
              .replace(/\\/g, "/")
              .replace(/\.mdx?$/, "")
              .replace(/\/index$/, "");

          currentContent += `--- ${targetUrl} ---\n\n${parsed.content}\n\n`; // Add separator

          // get the title
          let title = null;
          const output = fromMarkdown(parsed.content);
          const heading1 = output.children.find(
            node => node.type === "heading" && node.depth === 1
          );
          if (heading1) {
            title = heading1.children
              .filter(node => node.type === "text")
              .map(node => node.value)
              .join(" ");
          }
          if (title == null) {
            title = path.basename(file, path.extname(file));
          }

          rootMarkdownContent += `${"  ".repeat(index)}- [${title}](${targetUrl})\n`;
        } catch (error) {
          console.error(`Error reading ${filePath}: ${error}`);
        }
      }
    }

    return currentContent;
  }

  try {
    const categories = readMarkdownFiles(docsDir);

    for (const category of categories) {
      const filePath = path.join(docsDir, category);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        rootMarkdownContent += `\n\n## ${category.charAt(0).toUpperCase() + category.slice(1)}\n\n`;

        let categoryMarkdownContent = "";
        const content = traverseDirectory(filePath, "");
        categoryMarkdownContent += content;
        fullMarkdownContent += content;

        const categoryOutputFile = outputCategoryFilenameTemplate.replace(
          "{category}",
          category
        );
        fs.writeFileSync(
          categoryOutputFile,
          categoryMarkdownContent.trimEnd(),
          "utf-8"
        );
        console.log(
          `Merged markdown files for category '${category}' into ${categoryOutputFile}`
        );
      } else {
        console.warn(`Skipping non-directory item: ${filePath}`);
      }
    }

    const categoryOutputFile = outputCategoryFilenameTemplate.replace(
      "{category}",
      "full"
    );
    fs.writeFileSync(
      categoryOutputFile,
      fullMarkdownContent.trimEnd(),
      "utf-8"
    );
    console.log(`Merged markdown files into ${categoryOutputFile}`);

    fs.writeFileSync(outputFile, rootMarkdownContent.trimEnd(), "utf-8");
    console.log(`Root markdown content written to ${outputFile}`);
  } catch (error) {
    console.error(`Error writing file: ${error}`);
  }
}

// Example usage:
const baseUrl = "https://lionheart-group.github.io/coding-style-guide/";
const docsDirectory = "./docs"; // Replace with your 'docs' directory
const outputFilename = "./static/llms.txt";
const outputCategoryFilenameTemplate = "./static/llms-{category}.txt";

mergeMarkdownFiles(
  baseUrl,
  docsDirectory,
  outputFilename,
  outputCategoryFilenameTemplate
);
