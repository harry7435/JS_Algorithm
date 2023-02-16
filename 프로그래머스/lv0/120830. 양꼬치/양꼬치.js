function solution(n, k) {
    var answer = 0;
    let bonus = parseInt(n / 10);
    // 보너스 빼고 계산
    answer = 12000 * n + 2000 * k - bonus * 2000;
    return answer;
}