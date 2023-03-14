import { readFileSync } from "fs";

const input = readFileSync('./input.txt', {encoding: 'utf-8'})
    .trim()
    .split("\n")
    .map((round) => {
        return round.split(" ");
    });
    
// console.log(input);
    
const scoreHash = {
    X: 1, // Rock
    Y: 2, // Paper 
    Z: 3 // Scissor
};

const resultHash = {
    AX: 0, // Rock Rock
    AY: -1, // Rock Paper
    AZ: 1, // Rock Scissor
    BX: 1, // Paper Rock
    BY: 0, // Paper Paper
    BZ: -1, // Paper Scissor
    CX: -1, // Scissor Rock
    CY: 1, // Scissor Paper
    CZ: 0 // Scissor Scissor
};

const testInput = [['A', 'Y'], ['B', 'X'], ['C', 'Z']];

// Rock(A || X): 1, Paper(B || Y): 2, Scissors(C || Z): 3, Win: 6, Draw: 3, Loss: 0
function totalScore() {
    let result = 0;

    input.forEach((round) => {
        const combo = round[0].concat(round[1]);
        let score = 0;
        const shapeScore = scoreHash[round[1].toUpperCase()];

        if (resultHash[combo] === 1) {
            console.log(`${combo}: win(+6)`);
            console.log(`shape score: ${shapeScore}`);
            score = (6 + shapeScore);
            console.log(`score: ${score} \n`)
        } else if (resultHash[combo] === 0) {
            console.log(`${combo}: draw(+3)`)
            console.log(`shape score: ${shapeScore}`);
            score = (3 + shapeScore);
            console.log(`score: ${score} \n`)
        } else if (resultHash[combo] === -1) {
            console.log(`${combo}: loss(+0)`)
            console.log(`shape score: ${shapeScore}`);
            score = shapeScore;
            console.log(`score: ${score} \n`)
        };
        // console.log(`score: ${score}`);
        console.log(`adding score: ${score} to result: ${result}...`)
        result += score;
        console.log(`updated result: ${result} \n`)
        // console.log(`result: ${result}`);
    });
    return result;
};

console.log(totalScore());
