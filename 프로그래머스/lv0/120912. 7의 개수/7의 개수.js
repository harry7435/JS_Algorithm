function solution(array) {
    var answer = 0;
    
    for (num of array) {
        // 배열 요소 하나씩 10으로 나누면서 7 갯수 세기
        while (num !== 0) {
            if (num % 10 === 7) {
                answer += 1;
            }
            num = parseInt(num / 10);
        }
    }
    return answer;
}