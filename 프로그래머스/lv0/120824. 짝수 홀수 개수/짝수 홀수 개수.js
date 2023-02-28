function solution(num_list) {
    var answer = [];
    let odd = 0;
    let even = 0;
    
    for (num of num_list) {
        if (num % 2 === 0) {
            odd++;
        } else {
            even++;
        }
    }
    
    answer = [odd, even];
    return answer;
}