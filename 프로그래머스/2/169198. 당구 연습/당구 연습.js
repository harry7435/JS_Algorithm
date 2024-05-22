function solution(m, n, startX, startY, balls) {
    let answer = [];
    
    balls.forEach(ball => {
        const [endX, endY] = ball;
        let sumList = [];
                
        // 상
        if (startX !== endX || startY > endY) {
            const topSum = (startX - endX) ** 2 + (2 * n - startY - endY) ** 2;
            sumList.push(topSum);
        }
        // 하
        if (startX !== endX || startY < endY) {
            const bottomSum = (startX - endX) ** 2 + (startY + endY) ** 2;
            sumList.push(bottomSum);
        }
        // 좌
        if (startY !== endY || startX < endX) {
            const leftSum = (startX + endX) ** 2 + (startY - endY) ** 2;
            sumList.push(leftSum);
        }
        // 우
        if (startY !== endY || startX > endX) {
            const rightSum = (2 * m - startX - endX) ** 2 + (startY - endY) ** 2;
            sumList.push(rightSum);
        }
        
        sumList.sort((a, b) => a - b);
                
        answer.push(sumList[0]);
    })
    
    
    return answer;
}
