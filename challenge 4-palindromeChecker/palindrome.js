const readline = require('readline');

function checkPalindrome(string) {
    string = string.toLowerCase();
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return 'The string \'' + string + '\' is not a palindrome';
        }
    }
    return 'The string \'' + string + '\' is a palindrome';
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a string: ', (string) => {
  const result = checkPalindrome(string);
  console.log(result);
  rl.close();
});
