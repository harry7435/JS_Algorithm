function solution(elements) {
    var answer = 0;
    
    let circle = [...elements];
    
    for (let i=0; i<elements.length; i++) {
        circle.push(elements[i]);
    }
        
    let sumSet = new Set();
    
    for (let start=0; start<elements.length; start++) {
        for (let n=1; n<elements.length+1; n++) {
            let end = start+n;
            let tempSum = 0;
            circle.slice(start, end).forEach((number) => {
                tempSum += number;
            });
            
            if (!sumSet.has(tempSum)) {
                sumSet.add(tempSum);
            }
                    
        }
    }
    
    answer = sumSet.size;
    
    return answer;
}