function solution(land) {
    let answer = 0;
    const move = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // 이동좌표
    // land 최대 x, y 길이
    const maxX = land[0].length;
    const maxY = land.length;
    
    let oil = new Map(); // { idx : 최대 석유량 }
    
    for (let i=0; i < maxX; i++) {
        for (let j=0; j < maxY; j++) {
            let tempOil = 0; // 열 석유량 체크값
            let xSet = new Set(); // 열 인덱스 체크 Set
            // 시작점이 석유가 있을 경우 bfs 시작
            if (land[j][i] === 1) {
                let queue = [[j, i]]; // 처음 큐 추가
                while (queue.length) {
                    const [y, x] = queue.shift();
                    if (land[y][x] === 1) {
                        // 석유량 추가 및 land에서 석유 제거
                        tempOil++;
                        land[y][x] = 0;
                        if (!xSet.has(x)) xSet.add(x); // 열 인덱스 추가
                        // 상하좌우 이동
                        move.forEach(route => {
                            const [dy, dx] = route;
                            const newX = x + dx;
                            const newY = y + dy;
                            // 이동 가능 및 석유 존재할 경우 큐 추가
                            if (
                                newX >= 0
                                && newX < maxX
                                && newY >= 0
                                && newY < maxY
                                && land[newY][newX] === 1
                            ) {
                                queue.push([newY, newX]);
                            }
                        })
                    }
                }
            }
            // 추출 가능 석유량이 있을 경우
            if (tempOil !== 0) {
                for (let idx of xSet) {
                    // 열 인덱스에 추가 가능 석유량이 있을 경우 추가
                    oil.set(
                        idx,
                        oil.has(idx) ? oil.get(idx) + tempOil : tempOil
                    );
                }
            }
        }
    }  
    // 열에서 석유 최댓값
    answer = Math.max(...oil.values());
    
    return answer;
}