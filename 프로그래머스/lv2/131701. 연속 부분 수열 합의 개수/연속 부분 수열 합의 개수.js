function solution(elements) {
    var answer = 0;
    let circle = [...elements]; 
    // 원형 수열 만들기 => 두 번 이어붙이기
    for (let i=0; i<elements.length; i++) {
        circle.push(elements[i]);
    }
        
    let sumSet = new Set(); // 부분 수열 합 집합
    // 부분 수열 체크
    for (let start=0; start<elements.length; start++) {
        for (let n=1; n<elements.length+1; n++) {
            let end = start+n;
            let tempSum = 0;
            circle.slice(start, end).forEach((number) => {
                tempSum += number;
            });
            // 집합에 요소가 없으면 추가
            if (!sumSet.has(tempSum)) {
                sumSet.add(tempSum);
            }
                    
        }
    }
    
    answer = sumSet.size; // 집합 요소 갯수 반환
    
    return answer;
}