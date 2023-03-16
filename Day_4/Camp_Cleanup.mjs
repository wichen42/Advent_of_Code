import { readFileSync } from "fs";

const input = readFileSync("./input.txt", {encoding: "utf-8"})
    .trim()
    .split("\n")
    .map((section) => {
        return section.split(",");
    });

function part1() {
    let res = 0;

    input.forEach((section) => {
        const first = section[0].split("-");
        const second = section[1].split("-");

        const a1 = parseInt(first[0]);
        const a2 = parseInt(first[1]);
        const b1 = parseInt(second[0]);
        const b2 = parseInt(second[1]);
        
        if ((a1 <= b1 & a2 >= b2) || (b1 <= a1 && b2 >= a2)) res++;
    });

    console.log(res);
};

function part2() {

};

// console.log(input);
part1();