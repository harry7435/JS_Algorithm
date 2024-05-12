function solution(maps) {
    const [maxRow, maxCol] = [maps.length, maps[0].length];
    const direction = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // 상, 하, 좌, 우, [drow, dcol]
    // bfs
    const bfsQueue = [];
    
    bfsQueue.push([0, 0, 1]) // row, col, 이동거리
    maps[0][0] = 0;
    // [1][0] [row][col]
    
    while (bfsQueue.length) {
        const [row, col, moveDis] = bfsQueue.shift();
        // 도착 지점에서 종료
        if (row === maxRow - 1 && col === maxCol - 1) {
            return moveDis;
        }
        // 상 하 좌 우 이동 시 이동 가능 여부 체크
        for ([drow, dcol] of direction) {
            const [newRow, newCol] = [row + drow, col + dcol];
            
            if (newCol >= 0 && newCol < maxCol
                && newRow >= 0 && newRow < maxRow
                && maps[newRow][newCol]) {
                bfsQueue.push([newRow, newCol, moveDis + 1]);
                maps[newRow][newCol] = 0;
            }
        }
    }
    // 도착 불가능 할 경우 -1 리턴
    return -1;
}