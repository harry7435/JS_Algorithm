function solution(maps) {
    let visited = Array.from(Array(maps.length), () => Array(maps[0].length).fill(0));
    const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let queue = [];
    
    let mapsList = maps.map((line, row) => {
        const lineList = line.split('');
        lineList.forEach((box, col) => {
            if (box === 'S') {
                queue.push([row, col, 0])
                visited[row][col] = 1;
            }
        })
        return lineList;
    });
    
    function bfs(mode) {
        while (queue.length) {
            const [r, c, time] = queue.shift();
        
            if (mode === 'lever' && mapsList[r][c] === 'L') {
                return [r, c, time];
            }
            
            if (mode === 'exit' && mapsList[r][c] === 'E') {
                return time;
            }
            for (const d of dir) {
                const [dr, dc] = d;
                const [nr, nc] = [r+dr, c+dc];

                if (nr >= 0 && nr < mapsList.length
                   && nc >= 0 && nc < mapsList[0].length
                   && !visited[nr][nc] && mapsList[nr][nc] !== 'X') {
                    queue.push([nr, nc, time+1]);
                    visited[nr][nc] = 1;
                }
            }
        }
        
        return -1;
    }

    // 레버 찾기
    const leverResult = bfs('lever');
    // 레버 당기지 못하면 탈출 불가, -1 반환
    if (leverResult === -1) return -1;
    // 레버 당기기 성공하면 큐에 레버 위치 및 시간 추가
    // 방문 기록도 초기화 후 레버 위치 방문 체크
    visited = Array.from(Array(maps.length), () => Array(maps[0].length).fill(0));
    visited[leverResult[0]][leverResult[1]] = 1;
    queue = [leverResult];

    // 출구 찾기
    const exitTime = bfs('exit');
    // 출구로 갈 수 없으면 탈출 불가, -1 반환
    // 출구 도착하면 시간 반환
    return exitTime;
}