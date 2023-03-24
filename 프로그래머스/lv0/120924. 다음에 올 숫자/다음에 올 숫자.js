function solution(common) {
    var answer = 0;
    // 등차, 등비 조건 확인
    const isSameChar = (common[2] - common[1]) === (common[1] - common[0]);
    const isSameBi = (parseInt(common[2] / common[1])) === (parseInt(common[1] / common[0]));
    // 조건에 따라 다음 수 구하기
    if (isSameChar) {
        let numChar = common[1] - common[0];
        answer = common[common.length-1] + numChar;
    } else if (isSameBi) {
        let numBi = parseInt(common[1] / common[0]);
        answer = common[common.length-1] * numBi;
    }
    
    return answer;
}