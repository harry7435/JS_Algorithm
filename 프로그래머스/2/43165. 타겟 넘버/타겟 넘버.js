
function solution(numbers, target) {
    let answer = 0;
    // dfs 함수
    function dfs(index, sumResult) {
        // 전체 숫자를 모두 사용하고
        if (index === numbers.length) {
            // 합이 타겟 넘버일 경우 answer +1
            if (sumResult === target) {
                answer += 1;
            }
            // 모든 숫자 사용했으므로 탐색 종료
            return
        }
        // dfs 수행 + 또는 -
        dfs(index + 1, sumResult + numbers[index]);
        dfs(index + 1, sumResult - numbers[index]);
    }
    // 탐색 시작
    dfs(0, 0);
    
    return answer;
}