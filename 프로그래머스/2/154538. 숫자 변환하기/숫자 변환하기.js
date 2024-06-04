function solution(x, y, n) {
    // dp 배열 생성
    let dp = Array(y + 1).fill(-1);
    
    // 초기값 세팅
    dp[x] = 0;
    // dp 연산 탐색
    for (let i=x; i<y+1; i++) {
        // 연산으로 도달 불가능
        if (dp[i] === -1) continue
        // 세 연산 수행
        // y보다 연산 값이 크지 않고
        // 이전 i의 dp 값과 비교해서 작은값으로 교체
        if (i + n <= y) {
            if (dp[i+n] === -1) {
                dp[i+n] = dp[i] + 1;
            } else if (dp[i+n] > dp[i] + 1) {
                dp[i+n] = dp[i] + 1;
            }
        }
        
        if (i * 2 <= y) {
            if (dp[i * 2] === -1) {
                dp[i * 2] = dp[i] + 1;
            } else if (dp[i * 2] > dp[i] + 1) {
                dp[i * 2] = dp[i] + 1;
            }
        }
        
        if (i * 3 <= y) {
            if (dp[i * 3] === -1) {
                dp[i * 3] = dp[i] + 1;
            } else if (dp[i * 3] > dp[i] + 1) {
                dp[i * 3] = dp[i] + 1;
            }
        }
    }
    // dp y 값 반환
    return dp[y];
    
}