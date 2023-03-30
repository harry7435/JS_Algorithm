function solution(my_string) {
    var answer = '';
    let arr = [];
    for (let i=0; i<my_string.length; i++) {
        if(my_string[i].toUpperCase() === my_string[i]) {
           arr.push(my_string[i].toLowerCase());
        } else {
           arr.push(my_string[i].toUpperCase());
        }
    }
    
    answer = arr.join("");

    return answer;
}