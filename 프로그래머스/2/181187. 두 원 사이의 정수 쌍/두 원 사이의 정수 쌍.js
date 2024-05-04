function solution(r1, r2) {
    let answer = 0;
    
    for (let i = 1; i < r2 + 1; i++) {
        // x ** 2 + y ** 2 = r ** 2
        const maxY = Math.floor((r2 ** 2 - i ** 2) ** 0.5);
        const minY = i >= r1 ? 0 : Math.ceil((r1 ** 2 - i ** 2) ** 0.5);
        answer += maxY - minY + 1;
    }
    
    return answer * 4;
}