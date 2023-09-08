function solution(cards1, cards2, goal) {
    var answer = 'Yes';
    let card1 = '';
    let card2 = '';
   
    for (let i=0; i<goal.length; i++) {
        // 카드1 체크
        card1 = cards1.shift();
        if (goal[i] === card1) continue; // 같으면 넘어가기
        cards1.unshift(card1);
        // 카드2 체크
        card2 = cards2.shift();
        if (goal[i] === card2) continue; // 같으면 넘어가기
        cards2.unshift(card2);
        answer = 'No';
    }
    
    return answer;
}