const fs = require('fs');


const evaluateExpression = (expression) => {
    try {
        return eval(expression);
    } catch (error) {
        console.error(`Error evaluating expression: ${expression}`);
        return null;
    }
};


const solveArithmeticExpressions = (inputFilePath, outputFilePath) => {
    fs.readFile(inputFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file: ${err}`);
            return;
        }

        const expressions = data.split('\n');

        const results = expressions.map((expression) => {
            return evaluateExpression(expression.trim());
        });

        const outputData = results.join('\n');

        fs.writeFile(outputFilePath, outputData, 'utf8', (err) => {
            if (err) {
                console.error(`Error writing to file: ${err}`);
                return;
            }
            console.log(`Output file with answers generated: ${outputFilePath}`);
        });
    });
};


const inputFilePath = 'input.txt';
const outputFilePath = 'output.txt';
solveArithmeticExpressions(inputFilePath, outputFilePath);
