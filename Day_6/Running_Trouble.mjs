import { readFileSync } from 'fs';

const input = readFileSync("./input.txt", {encoding: "utf-8"}).trim().split("");

const test = "mjqjpqmgbljsphdztnvjfqwrcgsmlb".split("");

function part1() { 

    for (let i = 0; i < input.length; i++) {
        let end = i+3;
        const inputSet = new Set(input.slice(i, end+1));
        if (inputSet.size === 4) {
            return end + 1;
        };
    };

};

const test2 = "mjqjpqmgbljsphdztnvjfqwrcgsmlb".split("");

function part2() {
    for (let i = 0; i < input.length; i++) {
        let end = i+13;
        const inputSet = new Set(input.slice(i, end+1));
        // console.log(inputSet);
        if (inputSet.size === 14) {
            return end + 1;
        };
    };
}

// console.log(part1());
console.log(part2());