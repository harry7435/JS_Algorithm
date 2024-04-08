function solution(s) {
    let answer = 0;
    let stackStr = ''; // 첫 글자 x
    let [sameNum, diffNum] = [0, 0]; // 같고 다른 문자열 갯수 stack
    
    s.split('').forEach(str => {
        // 초기 글자 x가 없을 때 등록 및 같은 문자열 갯수 +1
        if (!stackStr) {
            stackStr = str;
            sameNum += 1;
            return
        }
        // x와 같을 때
        if (stackStr === str) {
            sameNum += 1;
            // x와 x가 아닌 글자 횟수가 같을 경우
            if (sameNum === diffNum) {
                answer += 1;
                stackStr = '';
                sameNum = 0;
                diffNum = 0;
            }
            return
        }
        // x와 다를 때
        if (stackStr !== str) {
            diffNum += 1;
            // x와 x가 아닌 글자 횟수가 같을 경우
            if (sameNum === diffNum) {
                answer += 1;
                stackStr = '';
                sameNum = 0;
                diffNum = 0;
            }
            return
        }
    })
    // 남은 문자열 분리
    if (sameNum || diffNum) answer += 1;
    
    return answer;
}