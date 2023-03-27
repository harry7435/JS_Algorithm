function solution(n, numlist) {
    var answer = [];
    // n의 배수이면 X로 치환하고 추출
    for (let i=0; i<numlist.length; i++) {
        if (numlist[i] % n === 0) {
            answer.push(numlist.splice(i,1,'X')[0]);
        }
    }
    
    return answer;
}