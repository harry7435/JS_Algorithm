function checkCan (num) {
    // 5 미만이면서 2번째 수가 아니면 1
    if (num < 5 && num % 5 !== 2) return 1;
    // 그 외 경우에는 0
    if ((num - 2) % 5 === 0) return 0;
    
    // 5 이상의 인덱스일 경우는 5로 나누어서 5 미만으로 만들어야 함
    return checkCan(Math.floor(num / 5));
}

function solution(n, l, r) {
    let answer = 0;
    // 칸토어 비트열 숫자가 1인지 폐구간 내에서 체크
    for (let i=l-1; i<r; i++) {
        if (checkCan(i)) answer += 1;
    }
    
    return answer;
}