function solution(cap, n, deliveries, pickups) {
    let result = 0;

    // 택배 업무 없는 곳 제거 함수
    function popBoxList(boxList) {
        for (let i=boxList.length - 1; i>=0; i--) {
            if (boxList[i] !== 0) break;
            boxList.pop();
        }
    }
    
    // 택배 배달 수거 탐색
    function findBox(deliveries, pickups) {
        let deliverBox = 0;
        let pickupBox = 0;
        let deliverDistance = -1;
        let pickupDistance = -1;
        
        // 배달 박스 체크
        // 배달 업무 없는 곳 제거
        popBoxList(deliveries);
        for (let i=deliveries.length - 1; i>=0; i--) {
            const deliver = deliveries[i];
            // 최대 이동 거리 체크
            if (deliverDistance < i) {
                deliverDistance = i+1;
            }
            // 배달 박스가 트럭 수용 용량과 같거나 넘어설 때
            if (deliverBox + deliver >= cap) {
                deliveries[i] = deliver - (cap - deliverBox);
                deliverBox = cap;
                break;
            } else {
                // 그 외의 경우는 전부 배달
                deliverBox += deliver;
                deliveries[i] = 0;
            }
        }
        
        // 수거 박스 체크
        // 배달 업무 없는 곳 제거
        popBoxList(pickups);
        for (let i=pickups.length - 1; i>=0; i--) {
            const pickup = pickups[i];
            // 최대 이동 거리 체크
            if (pickupDistance < i) {
                pickupDistance = i+1;
            }
            // 수거 최대량 초과 시
            if (pickupBox + pickup >= cap) {
                pickups[i] = pickup - (cap - pickupBox);
                pickupBox = cap;
                break;
            } else {
                // 그 외의 경우
                pickupBox += pickup;
                pickups[i] = 0;
            }
        }
        // 최대 이동 거리 반환
        return Math.max(deliverDistance,pickupDistance);
    }
    // 반환된 거리가 -1 (남은 배달 수거 리스트가 없을 때까지)일 때까지 탐색
    while(true) {
        const dis = findBox(deliveries, pickups);
        // 반환 최대 거리가 -1이면 결과 반환
        if (dis === -1) {
            return result;
        }
        // 왕복 거리이므로 2 곱하기
        result += dis * 2;
    }
}