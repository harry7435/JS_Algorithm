function solution(weights) {
    const sisoNum = [1, 2/3, 3/4, 2/4]; // 완전한 균형을 이루기 위한 거리 비율
    let answer = 0;
    let sisoObj = {}; // 탐색한 무게의 갯수 객체
    // 무게 오름차순 정렬
    const sortedWeights = weights.sort((a, b) => a - b);
    for (const weight of sortedWeights) {
        for (const num of sisoNum) {
            answer += sisoObj[weight * num] || 0;
        }
        sisoObj[weight] = (sisoObj[weight] || 0) + 1;
    }
    
    return answer;
}