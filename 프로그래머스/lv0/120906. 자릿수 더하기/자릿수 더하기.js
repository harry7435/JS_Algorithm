function solution(n) {
    var answer = 0;
    let number = n.toString().split('');
    for (num of number) {
        answer += Number(num);
    }
    return answer;
}