function solution(numbers) {
    var answer = '';
    const numArray = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    let stack = '';
    
    for (let i=0; i<numbers.length; i++) {
        stack += numbers[i];
        if(numArray.indexOf(stack) !== -1) {
            answer += numArray.indexOf(stack).toString();
            stack = '';
        }
    }
    return Number(answer);
}