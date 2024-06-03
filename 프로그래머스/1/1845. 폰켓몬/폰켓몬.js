function solution(nums) {
    const numsObj = new Map();
    // 가져가는 갯수 = 전체 갯수 / 2
    const targetNum = parseInt(nums.length / 2);
    // Map 객체에 폰켓몬 숫자 추가
    nums.forEach(num => {
        const monNum = numsObj.get(num);
        // 초기 세팅이면 1로 초기화
        // 그 외의 경우 +1
        numsObj.set(num, monNum + 1 || 1);
    })
    // 연구실에 있는 폰켓몬 종류 수
    const typeNum = [...numsObj.keys()].length;
    // 가져가야 하는 수와 비교해서 적은 것을 채택
    return Math.min(targetNum, typeNum);
}