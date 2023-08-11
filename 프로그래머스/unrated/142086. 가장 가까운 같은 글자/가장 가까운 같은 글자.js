function solution(s) {
    var answer = [];
    let stack = [];
    for (let i=0; i<s.length; i++) {
        if (!stack.includes(s[i])) {
            answer.push(-1);
            stack.push(s[i]);
            continue;
        }
        
        if(stack.includes(s[i])) {
            answer.push(stack.length - stack.lastIndexOf(s[i]));
            stack.push(s[i]);
            continue;
        }
    
    }
    
    return answer;
}