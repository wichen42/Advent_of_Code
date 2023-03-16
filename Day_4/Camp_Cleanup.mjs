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

function isOverlap(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) return true;
    };

    for (let j = 0; j < arr2.length; j++) {
        if (arr1.includes(arr2[j])) return true;
    };

    return false;
};

function part2() {
    let res = 0;

    input.forEach((section) => {

        const first = section[0].split("-");
        const second = section[1].split("-");

        const a1 = parseInt(first[0]);
        const a2 = parseInt(first[1]);
        const b1 = parseInt(second[0]);
        const b2 = parseInt(second[1]);

        const firstArr = [];
        const secondArr = [];

        for (let i = a1; i <= a2; i++) {
            firstArr.push(i);
        };

        for (let j = b1; j <= b2; j++) {
            secondArr.push(j);
        };
        
        if (isOverlap(firstArr, secondArr)) res++;
    });
    
    console.log(res);
};

// console.log(input);
// part1();
part2();