function solution(before, after) {
    var answer = 0;
    
    for (let i=0; i<before.length; i++) {
        if (after.includes(before[i])) {
            after = after.replace(before[i], "0");
        } else {
            return answer;
        }
    }
    
    answer = 1;
    return answer;
}