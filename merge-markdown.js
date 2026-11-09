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

/**
 * @param {string} baseUrl
 * @param {{dir: string, url: string, category?: string, inFull?: boolean}[]} sources
 *   dir:      a directory of docs
 *   url:      the URL path its pages are served at (relative to baseUrl)
 *   category: write the whole directory as one category with this name; without it,
 *             every sub directory is a category of its own (the "docs" layout)
 *   inFull:   include it in llms-full.txt and the index (default true)
 * @param {string} outputFile
 * @param {string} outputCategoryFilenameTemplate
 */
function mergeMarkdownFiles(
  baseUrl,
  sources,
  outputFile,
  outputCategoryFilenameTemplate
) {
  let rootMarkdownContent =
    "# Coding Style Guide\n\nLionHeart Group Coding Style Guide";
  let fullMarkdownContent = "";
  // The source being read (set in the loop below)
  let sourceDir = "";
  let urlBase = "";

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
          const targetUrl = (
            urlBase +
            path
              .relative(sourceDir, filePath)
              .replace(/\\/g, "/")
              .replace(/\.mdx?$/, "")
              .replace(/(^|\/)index$/, "")
          ).replace(/\/$/, "");

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
    function writeCategory(category, title, dir, inFull) {
      rootMarkdownContent += `\n\n## ${title}\n\n`;

      const content = traverseDirectory(dir, "");
      if (inFull) {
        fullMarkdownContent += content;
      }

      const categoryOutputFile = outputCategoryFilenameTemplate.replace(
        "{category}",
        category
      );
      fs.writeFileSync(categoryOutputFile, content.trimEnd(), "utf-8");
      console.log(
        `Merged markdown files for category '${category}' into ${categoryOutputFile}`
      );
    }

    for (const source of sources) {
      sourceDir = source.dir;
      urlBase = baseUrl + source.url;
      const inFull = source.inFull !== false;

      if (source.category) {
        writeCategory(
          source.category,
          source.title || source.category,
          source.dir,
          inFull
        );
        continue;
      }

      for (const category of readMarkdownFiles(source.dir)) {
        const filePath = path.join(source.dir, category);
        if (fs.statSync(filePath).isDirectory()) {
          writeCategory(
            category,
            category.charAt(0).toUpperCase() + category.slice(1),
            filePath,
            inFull
          );
        } else {
          console.warn(`Skipping non-directory item: ${filePath}`);
        }
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

const baseUrl = "https://lionheart-group.github.io/coding-style-guide/";
const outputFilename = "./static/llms.txt";
const outputCategoryFilenameTemplate = "./static/llms-{category}.txt";

mergeMarkdownFiles(
  baseUrl,
  [
    // Every sub directory of docs/ is a category (llms-html.txt, llms-wordpress.txt ...)
    { dir: "./docs", url: "docs/" },
    // Fegg is a versioned docs instance (see docusaurus.config.ts): the current version is
    // llms-fegg.txt, older ones are kept out of llms-full.txt
    { dir: "./fegg", url: "docs/fegg/", category: "fegg", title: "Fegg" },
    {
      dir: "./fegg_versioned_docs/version-4.x",
      url: "docs/fegg/4.x/",
      category: "fegg-4.x",
      title: "Fegg 4.x",
      inFull: false
    }
  ],
  outputFilename,
  outputCategoryFilenameTemplate
);
