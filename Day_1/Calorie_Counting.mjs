import { readFileSync } from "fs";

const input = readFileSync("./input.txt", {encoding: "utf-8"}).trim().split("\n\n");

const calories = input.map((ele) => {
    const cal = ele.split("\n").map(Number);
    return cal.reduce((prev, curr) => prev + curr, 0);
}).sort((a,b) => b-a);

console.log(calories);

function findMaxCalories() {
    return calories[0];
};

function findTopThree() {
    return calories.slice(0,3).reduce((prev, curr) => prev + curr, 0);
};

console.log(findMaxCalories());
console.log(findTopThree());