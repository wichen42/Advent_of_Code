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
    const copyStack = JSON.parse(JSON.stringify(stacks));
    for (const move of instructions) {
        for (let i = 0; i < move.count; i++) {
            const item = copyStack[move.from].pop();
            copyStack[move.to].push(item);
        };
    };

    const top = indexes.map((val) => {
        const stack = copyStack[val];
        return stack[stack.length - 1]
    }).join("");

    console.log(top);
};

function part2() {
    const copyStack = JSON.parse(JSON.stringify(stacks));
    for (const move of instructions) {
        const items = copyStack[move.from].splice(-move.count, move.count);
        copyStack[move.to] = copyStack[move.to].concat(items);
    };

    const top = indexes.map((val) => {
        const stack = copyStack[val];
        return stack[stack.length - 1]
    }).join("");

    console.log(top);
};

part1();
part2();