import { readFileSync } from 'fs';

const input = readFileSync("./input.txt", {encoding: "utf-8"}).trim().split("\n").map((line) => [...line].map(Number));

console.log(input);