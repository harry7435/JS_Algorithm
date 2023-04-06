function solution(my_string) {
    var answer = '';
    let newWord = [];
    for (let i=0; i<my_string.length; i++) {
        if (!newWord.includes(my_string[i])) {
            newWord.push(my_string[i]);
        }
    }
    
    answer = newWord.join("");
    return answer;
}