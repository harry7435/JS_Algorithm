function solution(my_string) {
    var answer = 0;
    let cal_string = my_string.split(" ");
    answer = Number(cal_string[0]);
    
    for (let i=0; i<cal_string.length; i++) {
        if (cal_string[i] === "+") {
            answer += Number(cal_string[i+1]);
        } else if (cal_string[i] === "-") {
            answer -= Number(cal_string[i+1]);
        }
    }
    return answer;
}