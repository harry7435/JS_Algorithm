function solution(numbers, hand) {
    let answer = '';
    // 2, 5, 8, 0의 각 숫자 간 거리
    const numberDistance = {
        '2': [3, 1, 0, 1, 2, 1, 2, 3, 2, 3],
        '5': [2, 2, 1, 2, 1, 0, 1, 2, 1, 2],
        '8': [1, 3, 2, 3, 2, 1, 2, 1, 0, 1],
        '0': [0, 4, 3, 4, 3, 2, 3, 2, 1, 2],
        'special': [1, 0, 4, 0, 0, 3, 0, 0, 2, 0],
    }
    
    let leftHand = '*'; // 왼손 위치
    let rightHand = '#'; // 오른손 위치
    
    for (const n of numbers) {
        // 1, 4, 7 왼손
        if (n === 1 || n === 4 || n === 7) {
            answer += 'L';
            leftHand = n;
        } // 3, 6, 9 오른손
        else if (n === 3 || n === 6 || n === 9) {
            answer += 'R';
            rightHand = n;
        } // 2, 5, 8, 0
        else {
            // 왼손까지 거리
            let leftDistance = leftHand === '*'
                ? numberDistance['special'][n]
                : numberDistance[n.toString()][leftHand];
            // 오른손까지 거리
            let rightDistance = rightHand === '#'
                ? numberDistance['special'][n]
                : numberDistance[n.toString()][rightHand];
            // 가까운 손 선택 or 같으면 주 손 선택
            if (leftDistance < rightDistance) {
                answer += 'L';
                leftHand = n;
            } else if (rightDistance < leftDistance) {
                answer += 'R';
                rightHand = n;
            } else {
                if (hand === 'left') {
                    answer += 'L';
                    leftHand = n;
                } else {
                    answer += 'R';
                    rightHand = n;
                }
            }
        }
    }
    
    return answer;
}