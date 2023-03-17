import { readFileSync } from "fs";

const input = readFileSync("./input.txt", {encoding: "utf-8"}).trimEnd();

const [start, moves] = input.split("\n\n");

const parsedStacks = start.split("\n").map((stack) => [...stack].filter((ele, i) => i % 4 === 1));
const indexes = parsedStacks.pop();

const stacks = {};

for (const stack of parsedStacks) {
    for (let i = 0; i < stack.length; i++) {
        if (stack[i] !== " ") {
            if (!stacks[indexes[i]]) {
                stacks[indexes[i]] = [];
            };
            stacks[indexes[i]].unshift(stack[i]);
        };
    };
};

console.log(parsedStacks);

function part1() {

};

function part2() {

};

part1();
part2();