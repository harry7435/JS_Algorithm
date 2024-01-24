function solution(k, m, score) {
    let answer = 0;
    // 사과 점수 내림차순 정렬
    const sortedScore = score.sort((a, b) => b - a);
    // 상자 안 사과 갯수 m개마다 최대 이익 계산 및 합산
    sortedScore.forEach((apple, index) => {
        if((index + 1) % m === 0) {
            answer += m * apple;
        }
    });
    
    return answer;
}