function solution(num, k) {
    var answer = -1;
    const numString = num.toString();
    for (let i=0; i<numString.length; i++) {
        if (numString[i] === k.toString()) {
            answer = i+1;
            break;
        }
    }
    return answer;
}