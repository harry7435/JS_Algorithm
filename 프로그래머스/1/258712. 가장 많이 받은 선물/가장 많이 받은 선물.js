function solution(friends, gifts) {
    let answer = 0;
    const friendsNum = friends.length;
    // 다음 달 선물 예정 리스트
    let nextGiftList = new Array(friendsNum).fill(0);
    // 선물 지수
    let giftPoint = new Array(friendsNum).fill(0);
    // 선물 기록
    let giftRecord = Array.from(Array(friendsNum), () => Array(friendsNum).fill(0))
    
    gifts.forEach(gift => {
        const [sender, receiver] = gift.split(' ');
        const senderIndex = friends.indexOf(sender);
        const receiverIndex = friends.indexOf(receiver);
        giftRecord[senderIndex][receiverIndex] += 1;
        giftPoint[senderIndex] += 1;
        giftPoint[receiverIndex] -= 1;
    })
    
    for (let s=0; s<friendsNum - 1; s++) {
        for (let r=s+1; r<friendsNum; r++) {
            if (giftRecord[s][r] > giftRecord[r][s]) {
                nextGiftList[s] += 1;
            } else if (giftRecord[s][r] < giftRecord[r][s]) {
                nextGiftList[r] += 1;
            } else {
                if (giftPoint[s] > giftPoint[r]) {
                    nextGiftList[s] += 1;
                } else if (giftPoint[s] < giftPoint[r]) {
                    nextGiftList[r] += 1;
                }
            }
        }
    }

    nextGiftList.forEach(nextGift => {
        if (nextGift > answer) answer = nextGift;
    })
    
    return answer;
}