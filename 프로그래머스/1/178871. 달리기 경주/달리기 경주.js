function solution(players, callings) {
    let answer = players;
    // 순위 해시 객체 생성
    const playerRank = {};
    players.forEach((name, index) => {
        playerRank[name] = index;
    })
        
    // 호명
    callings.forEach(name => {
        // 호명한 사람의 현재 순위
        const currentRank = playerRank[name];
        // 호명한 사람 이전 순위 선수
        const upperRankName = answer[currentRank - 1];
        // 순위 및 선수 이름 스위칭
        playerRank[upperRankName] += 1;
        playerRank[name] -= 1;
        answer[currentRank] = upperRankName;
        answer[currentRank - 1] = name;
    })
    
    return answer;
}