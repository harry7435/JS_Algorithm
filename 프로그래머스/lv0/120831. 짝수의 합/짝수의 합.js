function solution(n) {
    var answer = 0;
    if (n >= 2) {
        // n 이하 짝수 더하기
        for (let i=2;i<=n;i+=2) {
            answer += i;
        }
    }
    // n이 2보다 작으면 0
    else {
        answer = 0;
    }     
    return answer;
}