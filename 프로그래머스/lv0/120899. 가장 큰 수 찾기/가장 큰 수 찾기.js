function solution(array) {
    var answer = [];
    let maxNum = -1;
    let maxIndex = 0;
    for (i=0; i<array.length; i++) {
        if(array[i] > maxNum) {
            maxNum = array[i];
            maxIndex = i;
        }
    }
    answer = [maxNum, maxIndex];
    return answer;
}