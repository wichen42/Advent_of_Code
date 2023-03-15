import { readFileSync } from "fs";

const input = readFileSync("./input.txt", {encoding: "utf-8"}).trim().split("\n");

const priorityHash = {
    'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8,
    'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16,
    'q': 17, 'r': 18, 's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24,
    'y': 25, 'z': 26, 'A': 27, 'B': 28, 'C': 29, 'D': 30, 'E': 31, 'F': 32,
    'G': 33, 'H': 34, 'I': 35, 'J': 36, 'K': 37, 'L': 38, 'M': 39, 'N': 40,
    'O': 41, 'P': 42, 'Q': 43, 'R': 44, 'S': 45, 'T': 46, 'U': 47, 'V': 48,
    'W': 49, 'X': 50, 'Y': 51, 'Z': 52
  };

function commonItem(first, second, third) {
    if (third === undefined) {
        for (let i = 0; i < first.length; i++) {
            const letter = first.charAt(i);
            if (second.indexOf(letter) > -1) return letter;
        }
    } else {
        for (let i = 0; i < first.length; i++) {
            const letter = first.charAt(i);
            if (second.indexOf(letter) > -1 && third.indexOf(letter) > -1) return letter;
        }
    }
    return null;
};

function part1() {
    let totalPrioritiy = 0;

    input.map((rucksack) => {
        const mid = Math.floor(rucksack.length / 2);
        const first = rucksack.slice(0, mid);
        const second = rucksack.slice(mid);
        
        const item = commonItem(first, second);

        totalPrioritiy += priorityHash[item];
    });
    console.log(totalPrioritiy);
};

function part2() {

};

part1();