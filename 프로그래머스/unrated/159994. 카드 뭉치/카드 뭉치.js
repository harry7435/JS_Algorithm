function solution(cards1, cards2, goal) {
    var answer = 'Yes';
    let card1 = '';
    let card2 = '';
   
    for (let i=0; i<goal.length; i++) {
        card1 = cards1.shift();
        if (goal[i] === card1) continue;
        cards1.unshift(card1);
        
        card2 = cards2.shift();
        if (goal[i] === card2) continue;
        cards2.unshift(card2);
        answer = 'No';
    }
    
    return answer;
}