function solution(users, emoticons) {
    // 최대 가입자 수 및 판매액
    let maxService = -1;
    let maxMoney = -1;
    // 할인율 조합 배열 생성
    let discountList = [];
    // 중복순열, 재귀 사용
    function makeDiscountList(list) {
        if (list.length === emoticons.length) {
            discountList.push(list);
            return;
        }
        makeDiscountList(list.concat([10]));
        makeDiscountList(list.concat([20]));
        makeDiscountList(list.concat([30]));
        makeDiscountList(list.concat([40]));
    }
    
    makeDiscountList([]);
    // 각 할인율에 따라 조건 체크
    discountList.forEach((discount, index) => {
        // [할인율, 할인적용금액] 리스트 생성
        let priceList = [];
        
        for (let i=0; i<discount.length; i++) {
            const emoticonPrice = emoticons[i] * (100 - discount[i]) / 100;
            priceList.push([discount[i], emoticonPrice]);
        }
                
        let totalMoney = 0;
        let serviceNum = 0;
        // 유저 구입 여부 체크
        users.forEach(user => {
            const [percent, limit] = user;
            let money = 0;
            // 할인율이 유저 할인율 이상일 경우 구입
            priceList.forEach(price => {
                if (price[0] >= percent) {
                    money += price[1];
                }
            })
            // 구매 금액이 최대 구매 금액 이상이면 서비스 가입
            if (money >= limit) {
                serviceNum += 1;
            } else {
                // 그 외 구매 금액 저장
                totalMoney += money;
            }
        })
        // 최대 서비스 가입자 수 갱신
        if (serviceNum > maxService) {
            maxService = serviceNum;
            maxMoney = totalMoney;
        } else if (serviceNum === maxService && totalMoney > maxMoney) {
            // 서비스 가입자 수 같으면 최대 구매 금액 갱신
            maxMoney = totalMoney;
        }
    })
    
    return [maxService, maxMoney];
    
}