function solution(babbling) {
    var answer = 0;
    let canSpeak = [];
    const possible = ["aya", "ye", "woo", "ma"];
    // 네 가지 발음을 '*'으로 치환
    for (let i=0; i<babbling.length; i++) {
        for (pos of possible) {
            if (babbling[i].includes(pos)) {
                babbling[i] = babbling[i].replace(pos,'*');
            }
        }
    }
    // 모두 다 치환된 문자만 발음 가능
    for (babble of babbling) {
        if (babble.split('*').join('') === '') {
            answer += 1;
        }
    }
    
    return answer;
}