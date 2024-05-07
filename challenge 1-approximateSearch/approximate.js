
const fs = require('fs');
const readline = require('readline');

let wordSet = [];

fs.readFile('word_list.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    wordSet = data.split('\n').map(word => word.trim());
});


function calculateSimilarity(word1, word2) {

}


function approximate(input, k) {
    const results = [];

    for (let word of wordSet) {
        const similarity = calculateSimilarity(input, word);
        results.push({ word, similarity });
    }

    
    results.sort((a, b) => b.similarity - a.similarity);

    
    return results.slice(0, k).map(result => result.word);
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a word: ', (input) => {
    const suggestions = approximate(input, 5);
    console.log('Suggestions:', suggestions);
    rl.close();
});
