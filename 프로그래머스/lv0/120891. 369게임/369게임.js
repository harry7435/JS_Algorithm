function solution(order) {
    var answer = 0;
    const threeSixNine = ["3", "6", "9"];
    for (number of order.toString()) {
        if (threeSixNine.includes(number)) {
            answer += 1;
        }
    }
    return answer;
}