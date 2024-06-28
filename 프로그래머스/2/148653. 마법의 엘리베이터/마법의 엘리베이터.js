function solution(storey) {
    let stone = 0;
    let storeyList = [0].concat(storey.toString().split('').map(str => Number(str)));
    // 일의 자리부터 탐색
    for (let i=storeyList.length - 1; i>=0; i--) {
        // 현재 자리 숫자가 5보다 크면
        // 10 - 현재 자리 숫자만큼 버튼 클릭
        // 다음 자리 숫자 +1
        if (storeyList[i] > 5) {
            stone += 10 - storeyList[i];
            if (i !== 0) {
                storeyList[i-1] += 1;
            }
        } else if (storeyList[i] === 5) {
            // 현재 자리 숫자가 5일 때는
            // 다음 자리 숫자가 5 이상 때만 +1
            stone += storeyList[i];
            
            if (i !== 0) {
                if (storeyList[i-1] >= 5) {
                    storeyList[i-1] += 1;
                }
            }
        } else {
            // 그 외 현재 자리 숫자만큼 버튼 클릭
            stone += storeyList[i];
        }
    }
    
    return stone;
}