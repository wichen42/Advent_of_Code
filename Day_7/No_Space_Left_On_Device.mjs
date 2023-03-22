import { readFileSync } from "fs";

const input = readFileSync("./input.txt", {encoding: "utf-8"}).trim().split("\n");

// console.log(input);

function createTree(lines) {
    const tree = {
      name: "/",
      isDirectory: true,
      children: [],
    }; // node: name, isDirectory, size, children, parent
  
    let currentNode = tree;
    let currentCommand = null;
  
    for (const line of lines) {
      if (line[0] === "$") {
        // command
        const match = /^\$ (?<command>\w+)(?: (?<arg>.+))?$/.exec(line);
  
        currentCommand = match.groups.command;
  
        if (currentCommand === "cd") {
          const target = match.groups.arg;
          switch (target) {
            case "/":
              currentNode = tree;
              break;
            case "..":
              currentNode = currentNode.parent;
              break;
            default:
              currentNode = currentNode.children.find(
                (folder) => folder.isDirectory && folder.name === target
              );
          }
        }
      } else {
        if (currentCommand === "ls") {
          // For now, it's a file/directory from a 'ls' command
          const fileMatch = /^(?<size>\d+) (?<name>.+)$/.exec(line);
          if (fileMatch) {
            const node = {
              name: fileMatch.groups.name,
              size: parseInt(fileMatch.groups.size),
              isDirectory: false,
              parent: currentNode,
            };
            currentNode.children.push(node);
          }
          const dirMatch = /^dir (?<name>.+)$/.exec(line);
          if (dirMatch) {
            const node = {
              name: dirMatch.groups.name,
              isDirectory: true,
              children: [],
              parent: currentNode,
            };
            currentNode.children.push(node);
          }
        } else {
          throw new Error("unkown state");
        }
      }
    }
  
    return tree;
};

function printTree(node, depth = 0) {
    console.log(
      `${" ".repeat(depth * 2)}- ${node.name} (${
        node.isDirectory ? "dir" : `file, size=${node.size}`
      })`
    );
    if (node.isDirectory) {
      for (const child of node.children) {
        printTree(child, depth + 1);
      }
    }
  }

  printTree(createTree(input))