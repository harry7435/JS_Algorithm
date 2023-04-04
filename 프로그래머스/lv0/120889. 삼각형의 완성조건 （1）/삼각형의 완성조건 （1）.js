function solution(sides) {
    var answer = 0;
    let maxLine = Math.max(...sides);
    let sumLine = 0;
    
    for (let i=0; i<3; i++) {
        sumLine += sides[i];
    }
    
    if (sumLine - maxLine > maxLine) {
        answer = 1;
    } else {
        answer = 2;
    }
    return answer;
}