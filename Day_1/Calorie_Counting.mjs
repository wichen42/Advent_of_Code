import { readFileSync } from "fs";

const input = readFileSync("./input.txt", {encoding: "utf-8"}).trim().split("\n\n");

const calories = input.map((ele) => {
    const cal = ele.split("\n").map(Number);
    return cal.reduce((prev, curr) => prev + curr, 0);
}).sort((a,b) => b-a);

console.log(calories);

function part1() {
    return calories[0];
};

function part2() {
    return calories.slice(0,3).reduce((prev, curr) => prev + curr, 0);
};

console.log(part1());
console.log(part2());