// 이동 체크 함수
function checkMove(park, route, location) {
    const direction = route.split(' ')[0];
    const distance = Number(route.split(' ')[1]);
    const [y , x] = location;
    // x, y 최대 좌표
    const [maxX, maxY] = [park[0].length - 1, park.length - 1];
    // 북쪽
    if (direction === 'N') {
        const newY = y - distance;
        // 공원 벗어나면 무시
        if (newY < 0) return location
        
        for (let dy = y-1; dy >= newY; dy--) {
            // 장애물 만나면 무시
            if (park[dy][x] === 'X') return location
        }
        return [newY, x]
    }
    // 남쪽
    if (direction === 'S') {
        const newY = y + distance;
        // 공원 벗어나면 무시
        if (newY > maxY) return location
        
        for (let dy = y+1; dy <= newY; dy++) {
            // 장애물 만나면 무시
            if (park[dy][x] === 'X') return location
        }
        return [newY, x]
    }
    // 서쪽
    if (direction === 'W') {
        const newX = x - distance;
        // 공원 벗어나면 무시
        if (newX < 0) return location
        
        for (let dx = x-1; dx >= newX; dx--) {
            // 장애물 만나면 무시
            if (park[y][dx] === 'X') return location
        }
        return [y, newX]
    }
    // 동쪽
    if (direction === 'E') {
        const newX = x + distance;
        // 공원 벗어나면 무시
        if (newX > maxX) return location
        
        for (let dx = x+1; dx <= newX; dx++) {
            // 장애물 만나면 무시
            if (park[y][dx] === 'X') return location
        }
        return [y, newX]
    }
}

function solution(park, routes) {
    // 초기 좌표 구하기
    let currentLocation = [];
    park.forEach((route, index) => {
        if (route.includes('S')) {
            currentLocation = [index, route.indexOf('S')];
            return
        }
    })
    // 공원 산책
    routes.forEach(route => {
        const newLocation = checkMove(park, route, currentLocation);
        currentLocation = newLocation;
    })
    return currentLocation;
}