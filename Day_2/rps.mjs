import { readFileSync } from "fs";

const input = readFileSync('./input.txt', {encoding: 'utf-8'})
    .trim()
    .split("\n")
    .map((round) => round.split(" "));
    
// console.log(input);
    
const testInput = [['A', 'Y'], ['B', 'X'], ['C', 'Z']];

const moves = {
    A: 1, // Rock
    B: 2, // Paper
    C: 3, // Scissor
    X: 1, // Rock
    Y: 2, // Paper
    Z: 3 // Scissor
}

// Rock(A || X): 1, Paper(B || Y): 2, Scissors(C || Z): 3, Win: 6, Draw: 3, Loss: 0
function calculateScore(opponent, self) {
    if (opponent === self) return self + 3;
    if (
        opponent === moves.A && self === moves.Y ||
        opponent === moves.B && self === moves.Z ||
        opponent === moves.C && self === moves.A
    ) {
        return self + 6
    }
    return self;
};

function totalScore() {
    const result = input.map((round) => {
        const opponent = moves[round[0]];
        const self = moves[round[1]];
        return calculateScore(opponent, self);
    });
    return result.reduce((a, b) => a + b, 0);
};

console.log(totalScore());

