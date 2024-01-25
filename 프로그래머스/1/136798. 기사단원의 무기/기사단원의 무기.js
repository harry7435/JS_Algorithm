// 약수 구하는 함수
function getDivider(soliderNum) {
    if (soliderNum === 1) return 1;
    
    let dividerNum = 0;
    
    const sqrtNum = soliderNum ** 0.5;
    
    for (let i=1; i<=sqrtNum; i++) {
        if(soliderNum % i === 0) {
            dividerNum += 2;
            const divideResult = soliderNum / i;
            
            if(parseInt(divideResult, 10) === i) dividerNum --;
        };
        
        
    }
    return dividerNum;
    
} 

function solution(number, limit, power) {
    let answer = 0;
    // 기사 번호 배열 생성
    const soliderNumList = Array.from(Array(number), (_, index) => index + 1);
    // 기사 공격력 배열
    const attackList = soliderNumList.map((soliderNum) => getDivider(soliderNum));
    // 공격력 제한 수치 고려해서 필요 철 계산
    attackList.forEach((attack) => {
        answer += attack > limit ? power : attack;
    })
    return answer;
}