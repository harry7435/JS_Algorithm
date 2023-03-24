function solution(quiz) {
    var answer = [];
    for (q of quiz) {
        // 수식 분해
        q = q.split(' ');
        let X = Number(q[0]);
        let Y = Number(q[2]);
        let Z = Number(q[4]);
        let cal = q[1];
        // 수식 확인
        if (cal === '+') {
            let isRight = X + Y === Z ? 'O' : 'X';
            answer.push(isRight);
        } else {
            let isRight = X - Y === Z ? 'O' : 'X';
            answer.push(isRight);
        }
    }
    return answer;
}