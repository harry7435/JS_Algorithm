function solution(i, j, k) {
    var answer = 0;
    let stringNum;
    for (let num=i; num<=j; num++) {
        stringNum = num.toString();
        for (s of stringNum) {
            if (Number(s) === k) answer += 1;
        }
    }
    return answer;
}