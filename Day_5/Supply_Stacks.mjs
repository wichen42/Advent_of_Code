import { readFileSync } from "fs";

const input = readFileSync("./input.txt", {encoding: "utf-8"}).trimEnd();

const [start, moves] = input.split("\n\n").map((line) => line.split("\n"));

const parsedStacks = start.map((stack) => [...stack].filter((ele, i) => i % 4 === 1));
const indexes = parsedStacks.pop();

const stacks = {};
const instructions = [];

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

for (const move of moves) {
    const nums = [];

    move.split(" ").map((ele) => {
        if (!isNaN(parseInt(ele))) {
            nums.push(parseInt(ele));
        }
    });

    instructions.push({
        count: nums[0],
        from: nums[1],
        to: nums[2]
    });
};


function part1() {

};

function part2() {

};

part1();
part2();