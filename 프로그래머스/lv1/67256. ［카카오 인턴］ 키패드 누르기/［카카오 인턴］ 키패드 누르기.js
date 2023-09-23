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
    
    let leftHand = '*';
    let rightHand = '#';
    
    for (const n of numbers) {
        if (n === 1 || n === 4 || n === 7) {
            answer += 'L';
            leftHand = n;
        }
        else if (n === 3 || n === 6 || n === 9) {
            answer += 'R';
            rightHand = n;
        }
        else {
            let leftDistance = leftHand === '*'
                ? numberDistance['special'][n]
                : numberDistance[n.toString()][leftHand];
            let rightDistance = rightHand === '#'
                ? numberDistance['special'][n]
                : numberDistance[n.toString()][rightHand];
            
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