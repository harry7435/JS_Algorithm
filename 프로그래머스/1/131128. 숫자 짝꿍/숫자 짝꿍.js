// 각 숫자가 몇 개 포함되었는지 체크하여 객체로 반환하는 함수
function checkNum(numString) {
    const numObj = {}
    numString.split('').forEach(str => {
        if(numObj[str]) {
            numObj[str] += 1;
            return
        }
        
        numObj[str] = 1;
    })
    
    return numObj;
}

function solution(X, Y) {
    let answer = '';
    // 숫자 갯수 체크
    const numInX = checkNum(X);
    const numInY = checkNum(Y);
    // 내림차순으로 공통으로 나타나는 정수 체크
    for (let i=9; i>=0; i--) {
        const num = i.toString();
        const x = numInX[num];
        const y = numInY[num];
        
        if (x && y) {
            // 짝꿍이 0으로만 구성되면 '0'만 입력
            if (i === 0 && !answer) {
                answer += '0';
                break;
            }
            answer += num.repeat(Math.min(x, y));
        }
    }
    
    return answer || '-1';
    
}