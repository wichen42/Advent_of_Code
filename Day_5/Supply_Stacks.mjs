import { readFileSync } from "fs";

const input = readFileSync("./input.txt", {encoding: "utf-8"}).trim().split("\n\n");

console.log(input);