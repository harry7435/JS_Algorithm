function solution(book_time) {
    let roomList = [];
    // 예약 시간 타임스탬프 변환 및 시간순 오름차순 정렬
    const sortedBookTimeStamp = book_time.map(timeRange => {
        const [start, end] = timeRange;
        const startTime = start.split(':').reduce((timeStamp, t, index) => {
            return timeStamp + t * (index === 0 ? 60 : 1);
        }, 0);
        const endTime = end.split(':').reduce((timeStamp, t, index) => {
            return timeStamp + t * (index === 0 ? 60 : 1);
        }, 0);
        
        return [startTime, endTime];
    }).sort((a, b) => a[0] - b[0]);
    
    // room 배열에 추가해보기
    sortedBookTimeStamp.forEach(bookTime => {
        const [start, end] = bookTime;
        let isEnter = false; // 방 배정 체크
        // 방 리스트를 체크해서 시간이 겹치면 방 추가해서 투입
        for (let i=0; i<roomList.length; i++) {
            const endTime = roomList[i];
            // 대실 완료했으면 해당 방에 추가
            if (endTime <= start) {
                roomList[i] = end + 10;
                isEnter = true;
                break;
            }
        }
        // 기존 방에 배정이 안되었으면 방 추가
        if (!isEnter) {
            roomList.push(end + 10);   
        }
        // 종료 시간 오름차순 정렬
        roomList.sort((a, b) => a - b);
    })
    // 방 최소 갯수 반환
    return roomList.length;
}