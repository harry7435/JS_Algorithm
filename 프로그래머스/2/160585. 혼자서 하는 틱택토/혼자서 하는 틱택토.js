function solution(board) {
    let answer = -1;
    let [isWinO, isWinX] = [false, false];
    let oLocation = [];
    let xLocation = [];
    
    board.forEach((line, row) => {
        console.log(line.split(''));
        // 가로 줄이 같은 문자일 경우 승리 체크
        if (line === 'XXX') isWinX = true;
        if (line === 'OOO') isWinO = true;
        line.split('').forEach((mark, col) => {
            // O, X 갯수 체크
            if (mark === 'O') {
                oLocation.push(`${row}${col}`);
            }
            if (mark === 'X') {
                xLocation.push(`${row}${col}`);
            }
        })
    })
    
    // console.log(oLocation, xLocation);
    // O, X 갯수 체크
    const [numO, numX] = [oLocation.length, xLocation.length];
    
    // 세로줄, 대각선 체크
    let checkORow = [0, 0, 0];
    let checkODig = [0, 0, 0];
    let checkOReDig = [0, 0, 0];
    oLocation.forEach(loc => {
        const [row, col] = [loc[0], loc[1]];
        if (loc === '00' || loc === '22') checkODig[col]++;
        if (loc === '20' || loc === '02') checkOReDig[col]++;
        if (loc === '11') {
            checkODig[1]++;
            checkOReDig[1]++;
        }
        checkORow[col]++;
    })
    
    let checkXRow = [0, 0, 0];
    let checkXDig = [0, 0, 0];
    let checkXReDig = [0, 0, 0];
    xLocation.forEach(loc => {
        const [row, col] = [loc[0], loc[1]];
        if (loc === '00' || loc === '22') checkXDig[col]++;
        if (loc === '20' || loc === '02') checkXReDig[col]++;
        if (loc === '11') {
            checkXDig[1]++;
            checkXReDig[1]++;
        }
        
        checkXRow[col]++;
    })
    
    // console.log(checkORow, checkXRow);
    // console.log(checkODig, checkOReDig, checkXDig,checkXReDig);
    // 세로줄 또는 대각선 승리 체크
    if (checkORow.includes(3)) isWinO = true;
    if (checkXRow.includes(3)) isWinX = true;
    
    if(checkODig.join('') === '111' || checkOReDig.join('') === '111') isWinO = true;
    if(checkXDig.join('') === '111' || checkXReDig.join('') === '111') isWinX = true;
    
    // 불가능한 경우 체크
    if (isWinO && numO - numX !== 1) return answer = 0;
    if (isWinX && numO !== numX) return answer = 0;
    if (numO < numX) return answer = 0;
    if (numO - numX > 1) return answer = 0;
    
    return answer = 1;
}