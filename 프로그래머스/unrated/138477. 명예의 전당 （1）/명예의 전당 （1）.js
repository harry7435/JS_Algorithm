function solution(k, score) {
    var answer = [];
    let 명예의전당 = [];
    
    for (let i=0; i<score.length; i++) {
        // 명예의 전당
        명예의전당.push(score[i]);
        명예의전당.sort((a, b) => b-a);
        // k개만큼 명예의 전당 유지
        if (i>k-1) {
            명예의전당 = 명예의전당.slice(0, k);
        }
                
        // 발표 점수 기록
        let 명예의전당최소 = 명예의전당.pop();
        answer.push(명예의전당최소);
        명예의전당.push(명예의전당최소);
    }
    return answer;
}