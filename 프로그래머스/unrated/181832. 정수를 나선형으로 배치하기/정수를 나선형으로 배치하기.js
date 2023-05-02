function solution(n) {
    var answer = [];
    // 0 배열 생성
    for (let i=0; i<n; i++) {
        answer.push(new Array(n).fill(0));
    }
    // 초기 설정
    let num = 2;
    let x = 0;
    let y = 0;
    answer[y][x] = 1;
    // 나선형 배치
    while (num <= n**2) {
        while (x < n-1 && answer[y][x+1] === 0) {
            x++;
            answer[y][x] = num;
            num++;
        }
        
        while (y < n-1 && answer[y+1][x] === 0) {
            y++;
            answer[y][x] = num;
            num++;
        }
        
        while (x > 0 && answer[y][x-1] === 0) {
            x--;
            answer[y][x] = num;
            num++;
        }
        
        while (y > 0 && answer[y-1][x] === 0) {
            y--;
            answer[y][x] = num;
            num++;
        }
    }
    return answer;
}