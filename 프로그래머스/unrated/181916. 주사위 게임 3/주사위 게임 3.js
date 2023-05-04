function solution(a, b, c, d) {
    var answer = 0;
    let dice = [a, b, c, d];
    dice.sort((a,b) => b-a);
    let countNum = 1;
    let countDice = new Array(7).fill(0);
    // 주사위 숫자 세기
    for (let i=0; i<4; i++) {
        if(i === 3) {
            countDice[dice[i]] = countNum;
        }
        if(dice[i] === dice[i+1]) {
            countNum++;
        } else {
            countDice[dice[i]] = countNum;
            countNum = 1;
        }
    }
    
    let setDice = new Set(countDice);
    setDice.delete(0);
    // 점수 매기기
    if(setDice.has(4)) {
        answer += 1111 * countDice.indexOf(4);
    } else if (setDice.has(3)) {
        let p = countDice.indexOf(3);
        let q = countDice.indexOf(1);
        answer += (10 * p + q) ** 2;
    } else if (setDice.has(2)) {
        if (setDice.has(1)) {
            let p = countDice.indexOf(2);
            let q = countDice.indexOf(1);
            let r = countDice.lastIndexOf(1);
            answer += q * r;
        } else {
            let p = countDice.indexOf(2); 
            let q = countDice.lastIndexOf(2);
            answer += (p + q) * Math.abs(p-q);
        }
    } else {
        answer += countDice.indexOf(1);
    }
    return answer;
}