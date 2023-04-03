function solution(array, n) {
    var answer = 0;
    let minClose = Number.MAX_SAFE_INTEGER;

    for (let i=0; i<array.length; i++) {
        if(Math.abs(array[i] - n) < minClose) {
            answer = array[i];
            minClose = Math.abs(array[i] - n);
        } else if (Math.abs(array[i] - n) === minClose) {
            answer = Math.min(array[i], answer);
        }
    }
    return answer;
}