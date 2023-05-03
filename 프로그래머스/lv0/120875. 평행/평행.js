function solution(dots) {
    var answer = 0;
    let check = [[0,1,2,3], [0,2,1,3], [0,3,1,2]]
    // 기울기 체크
    for (i=0; i<check.length; i++) {
        let line1 = (dots[check[i][0]][1] - dots[check[i][1]][1]) / (dots[check[i][0]][0] - dots[check[i][1]][0]);
        let line2 = (dots[check[i][2]][1] - dots[check[i][3]][1]) / (dots[check[i][2]][0] - dots[check[i][3]][0]);
        
        if(line1 === line2) answer = 1;
    }
    return answer;
}