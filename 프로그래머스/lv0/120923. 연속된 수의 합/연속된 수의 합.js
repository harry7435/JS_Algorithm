function solution(num, total) {
    var answer = [];
    let numSum = 0;
    let startNum = 0;
    // 1부터 num까지 합
    for (let i=1; i<=num; i++) {
        numSum += i;
    }
    // num * x + (1+ ... + num-1) = total
    // num * (x-1) = total - (num)*(num+1)/2    
    startNum = parseInt((total - numSum) / num) + 1;
    // 배열 생성
    for (let i=0; i<num; i++) {
        answer.push(startNum+i);
    }
    return answer;
}