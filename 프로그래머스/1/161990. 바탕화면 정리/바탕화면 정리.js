function solution(wallpaper) {
    // 초기 드래그 좌표 설정
    // [ x 좌표 최솟값, y 좌표 최솟값, x 좌표 최댓값 + 1, y 좌표 최댓값 + 1] 이어야 함
    let answer = [wallpaper.length, wallpaper[0].length, 0, 0];
    // 파일 위치 탐색
    wallpaper.forEach((col, dx) => {
        col.split('').forEach((file, dy) => {
            // 파일이 있을 경우 최대, 최소 좌표값 갱신
            if (file === '#') {
                answer[0] = answer[0] > dx ? dx : answer[0];
                answer[1] = answer[1] > dy ? dy : answer[1];
                answer[2] = answer[2] < dx ? dx : answer[2];
                answer[3] = answer[3] < dy ? dy : answer[3];
            }
        })
    })
    
    // 최댓값은 +1 씩 해주어야 드래그가 포함됨
    answer[2] += 1;
    answer[3] += 1;
    
    return answer;
}