function solution(numbers) {
    let answer = Array(numbers.length).fill(-1);
    // 그대로 둔 숫자 인덱스 스택
    let stack = [];
    // 배열 순회 시작
    numbers.forEach((num, index) => {
        // 스택의 가장 최근 인덱스에 해당하는 숫자보다 큰 숫자가 나왔을 때
        // 스택 내 모든 이전 인덱스에 대한 뒷 큰수를 적용
        while(numbers[stack[stack.length - 1]] < numbers[index]) {
            answer[stack.pop()] = numbers[index];
        }
        // 모두 적용 후 다시 인덱스를 스택에 저장
        stack.push(index);
    })
    
    return answer;
}