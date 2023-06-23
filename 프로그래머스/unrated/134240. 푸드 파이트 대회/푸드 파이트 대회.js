function solution(food) {
    var answer = '0';
    
    for (let i=food.length-1; i>0; i--) {
        let menu = parseInt(food[i] / 2);
        
        for (let j=0; j<menu; j++) {
            answer = i.toString() + answer + i.toString();
        }
    }
    return answer;
}