function solution(board) {
    let answer = 0;
    let robot = [];
    const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    // 출발 지점 찾기
    board.forEach((line, index) => {
        if (line.indexOf('R') !== -1) {
            robot = [index, line.indexOf('R')];
        }
    })
    
    let visited = Array.from(Array(board.length), () => Array(board[0].length).fill(0));
    // 출발지점 큐 추가 및 방문 처리
    let queue = [[robot[0], robot[1], 0]];
    visited[robot[0]][robot[1]] = 1;
    // BFS 시작
    while (queue.length) {
        const [row, col, move] = queue.shift();
        // 목표 지점 도달 시 이동거리 반환
        if (board[row][col] === 'G') {
            return answer = move;
        }
        // 상 하 좌 우 이동
        dir.forEach(rowCol => {
            const [drow, dcol] = rowCol;
            let [nRow, nCol] = [row + drow, col + dcol];
            // 끝까지 이동
            while (nRow >= 0 && nRow < board.length
                   && nCol >= 0 && nCol < board[0].length
                   && board[nRow][nCol] !== 'D') {
                nRow += drow;
                nCol += dcol;
            }
            // 한 칸 더 이동한 것 복귀
            nRow -= drow;
            nCol -= dcol;
                        
            // 방문한 곳이 아니면 이동 횟수 +1 및 큐 추가
            if (visited[nRow][nCol] === 0) {
                queue.push([nRow, nCol, move + 1]);
                visited[nRow][nCol] = 1;
            }
        })
        
    }
    
    // 목표 위치에 도달하지 못하면 -1
    return -1;
}