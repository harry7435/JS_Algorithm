function solution(n) {
    var answer = 0;
    // 제곱근이 정수인지 판별
    if (n ** 0.5 * 10 % 10 === 0) {
        answer = 1;
    } else {
        answer = 2;
    }
    return answer;
}