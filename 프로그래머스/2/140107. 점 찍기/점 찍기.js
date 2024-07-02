function solution(k, d) {
    let answer = 0;
    // x 좌표에 따른 y 최대 값을 구한다.
    for (let x=0; x<=d; x+=k) {
        let maxY = Math.floor(Math.sqrt(d ** 2 - x ** 2));
        // y 최대 값 내에서 k 배수의 갯수만큼 점을 찍을 수 있다.
        answer += Math.floor(maxY / k) + 1;
    }
    
    return answer;
}