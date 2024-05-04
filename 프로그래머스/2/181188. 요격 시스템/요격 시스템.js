function solution(targets) {
    let answer = 1;
    // 내림차순 정렬
    targets.sort((a, b) => {
        return b[0] - a[0];
    })
    
    let startRange = -1; // 초기 미사일 x좌표 초기화
    
    targets.forEach(target => {
        const [start, end] = target;
        // 초기 시작 설정
        if (startRange === -1) {
            startRange = start;
            return
        }
        // 시작 범위를 다음 미사일 끝점을 벗어날 때
        // 시작 범위 재설정 및 요격 미사일 수 +1
        if (end <= startRange) {
            startRange = start;
            answer += 1;
        }
    })
    
    
    return answer;
}