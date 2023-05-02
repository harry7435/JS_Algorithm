function solution(n) {
    var answer = [];
    
    for (let i=0; i<n; i++) {
        let tempArr = new Array(n).fill(0);
        tempArr[i] = 1;
        answer.push(tempArr);
    }
    
    return answer;
}