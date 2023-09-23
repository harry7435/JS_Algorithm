let [n, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.replace('\r', ''));

let answer = 0;

for (let i = 1; i < n; i++) {
  let word = input[i];
  let firstWord = input[0];
  let newWordNum = 0;

  if (Math.abs(word.length - firstWord.length) > 1) continue;

  for (const a of word) {
    if (firstWord.includes(a)) {
      firstWord = firstWord.replace(a, '');
    } else {
      newWordNum += 1;
    }
  }

  if (firstWord.length <= 1 && newWordNum <= 1) answer += 1;
}

console.log(answer);