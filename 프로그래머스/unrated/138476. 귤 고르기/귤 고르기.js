function solution(k, tangerine) {
    var answer = 0;
    let number_tanger = Array(10000001).fill(0);
    // 크기별 갯수 세기
    tangerine.forEach((t) => {
        number_tanger[t] += 1;
    });
    // 갯수 많은 순 정렬
    number_tanger.sort((a, b) => b-a);
    // 많은 것부터 담기
    number_tanger.forEach((number) => {
        if(k <= 0) return;
        k -= number;
        answer += 1;
    })

    return answer;
}