function solution(data, col, row_begin, row_end) {
    // col 번째 컬럼의 값을 기준으로 오름차순
    // 같으면 기본키 첫 번째 컬럼의 값 기준 내림차순 정렬
    let sortedData = data.sort((a, b) => {
        if (a[col - 1] === b[col - 1]) {
            return b[0] - a[0];
        }
        
        return a[col - 1] - b[col - 1];
    });
    // i 번째 튜플의 각 컬럼 값을 i로 나눈 나머지들의 합으로 리스트 구하기
    let hashList = [];
    
    for (let i=row_begin - 1; i<row_end; i++) {
        let divResult = 0;
        sortedData[i].forEach(num => {
            divResult += num % (i + 1);
        });
        
        hashList.push(divResult);
    }
    // 누적하여 bitwise XOR 계산 (^)
    let result = hashList[0];
    
    for (let i=1; i<hashList.length; i++) {
        result = result ^ hashList[i];
    }
    
    return result;
}