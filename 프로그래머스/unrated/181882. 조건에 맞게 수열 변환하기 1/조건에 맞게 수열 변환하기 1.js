function solution(arr) {
    var answer = [];
    for (let i=0; i<arr.length; i++) {
        let element = arr[i];
        if (element < 50 && element % 2 !== 0) {
            answer.push(element * 2);
        } else if (element >= 50 && element % 2 === 0) {
            answer.push(element / 2);
        } else answer.push(element)
    }
    return answer;
}