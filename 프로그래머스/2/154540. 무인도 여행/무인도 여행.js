function solution(maps) {
    let answer = [];
    const mapsList = maps.map(line => line.split(''));
    // 가로 세로 길이
    const [maxR, maxC] = [mapsList.length, mapsList[0].length];
    // 방문 체크 배열
    let visited = Array.from(Array(maxR), () => Array(maxC).fill(0));
    // 이동 좌표
    const dr = [-1, 1, 0, 0];
    const dc = [0, 0, -1, 1];
    // dfs 함수 작성
    function dfs(start, mapSize) {
        const [row, col] = start;
        
        // 방문 체크 및 식량 추가
        visited[row][col] = 1;
        mapSize += Number(mapsList[row][col]);
        // 상 하 좌 우 이동 체크
        for (let i=0; i<4; i++) {
            const [nr, nc] = [row + dr[i], col + dc[i]];
            if (nr >= 0 && nr < maxR && nc >= 0 && nc < maxC
                && !visited[nr][nc] && mapsList[nr][nc] !== 'X') {
                mapSize += dfs([nr, nc], 0);
            }
        }
        // 더 이상 갈 곳이 없으면 mapSize 반환
        return mapSize;
    }
    
    // mapsList 순회
    for (let i=0; i<maxR; i++) {
        for (let j=0; j<maxC; j++) {
            if (mapsList[i][j] !== 'X' && !visited[i][j]) {
                const currentSize = dfs([i, j], 0);
                answer.push(currentSize);
            }
            
        }
    }
    // 오름차순 정렬 및 무인도가 없으면 -1 반환
    return answer.length ? answer.sort((a, b) => a - b) : [-1];
}