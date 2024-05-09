function solution(sequence, k) {
    let answer = [];
    let start = 0;
    let end = 0;
    let sumStack = sequence[0];
    
    while (end < sequence.length) {
        if (sumStack === k) {
            answer.push([start, end]);
            end++;
            sumStack += sequence[end];
        } else if (sumStack > k) {
            sumStack -= sequence[start];
            start++;
        } else {
            end++;
            sumStack += sequence[end];
        }
    }
    
    answer.sort((a, b) => {
        const aLength = a[1] - a[0];
        const bLength = b[1] - b[0];
        if (aLength !== bLength) return aLength - bLength;
        return a[0] - b[0];
    })
    
    return answer[0];
}