const fs = require("fs").promises;
const path = require("path");

async function mergeMarkdownFiles(docsDir, outputFile) {
  let allMarkdownContent = "";

  async function traverseDirectory(currentDir) {
    const files = await fs.readdir(currentDir);

    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stats = await fs.stat(filePath);

      if (stats.isDirectory()) {
        await traverseDirectory(filePath); // Recursive call for subdirectories
      } else if (file.endsWith(".md") || file.endsWith(".mdx")) {
        try {
          const content = await fs.readFile(filePath, "utf-8");
          allMarkdownContent += `\n\n--- ${filePath} ---\n\n${content}`; // Add separator
        } catch (error) {
          console.error(`Error reading ${filePath}: ${error}`);
        }
      }
    }
  }

  try {
    await traverseDirectory(docsDir);
    await fs.writeFile(outputFile, allMarkdownContent, "utf-8");
    console.log(`Merged markdown files into ${outputFile}`);
  } catch (error) {
    console.error(`Error writing to ${outputFile}: ${error}`);
  }
}

// Example usage:
const docsDirectory = "./docs"; // Replace with your 'docs' directory
const outputFilename = "./static/merged_docs.md";

mergeMarkdownFiles(docsDirectory, outputFilename);
