function solution(A, B) {
    var answer = -1;
    let newWord = A;
    
    for (let i=0; i<A.length; i++) {
        if (newWord === B) {
            answer = i;
            break;
        }
        
        newWord = newWord.slice(-1) + newWord.slice(0, A.length-1);
    }
    
    return answer;
}