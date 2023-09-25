let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

let answer = '';
let stack = [];
let isTag = false;

for (let i = 0; i < input.length; i++) {
  let current = input[i];
  // < 태그가 열렸을 때
  if (current === '<') {
    // 이전 단어가 태그가 아니면 뒤집어서 출력
    if (!isTag) {
      answer += stack.reverse().join('');
      stack = [];
    } else {
      // 태그이면 그대로 출력
      answer += stack.join('');
      stack = [];
    }
    isTag = true;
    stack.push(current);
  } // > 태그가 닫힐 때
  else if (current === '>') {
    stack.push(current);
    answer += stack.join('');
    stack = [];
    isTag = false;
  } // 공백이 있을 때
  else if (current === ' ') {
    if (!isTag) {
      answer += stack.reverse().join('') + ' ';
      stack = [];
    } else {
      stack.push(current);
    }
  } else {
    stack.push(current);
  }
}
// 잔여 스택 확인 후 출력
if (stack[0] === '<') {
  answer += stack.join('');
} else {
  answer += stack.reverse().join('');
}

console.log(answer.replace('\n', ''));
