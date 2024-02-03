function solution(babbling) {
    let answer = 0;
    // 옹알이 가능 단어
    const babbleWord = ['aya', 'ye', 'woo', 'ma'];
    // 옹알이 가능 체크
    babbling.map(word => {
        let stack = '';
        let prevBabble = ''; // 이전 옹알이 히스토리
        
        for (w of word) {
            stack += w;
            // 옹알이 가능한 단어가 중복되지 않을 때
            if (babbleWord.includes(stack) && stack !== prevBabble) {
                const index = babbleWord.indexOf(stack);
                // 히스토리 업데이트
                prevBabble = stack;
                // stack에서 해당 옹알이 단어 제거
                stack = stack.replace(babbleWord[index], '');
            }
        }
        // stack이 남아있지 않으면 발음 가능
        if (stack.length === 0) answer += 1;
    });
    
    return answer;
    
}