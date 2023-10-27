function solution(want, number, discount) {
    let answer = 0;
    const wantFruit = new Object();
    // 원하는 과일과 갯수 객체 생성
    want.forEach((name, i) => {
        wantFruit[name] = number[i];
    })
    
    let startDate = 0;
    // 할인 정보 탐색
    while (startDate + 10 <= discount.length) {
        const discountFruit = discount.slice(startDate, startDate + 10);
        const checkFruit = new Object();
        // 할인 과일 정보 만들기
        discountFruit.forEach((name) => {
            if (Object.keys(checkFruit).includes(name)) {
                checkFruit[name] += 1;
            } else {
                checkFruit[name] = 1;
            }
        })

        const fruits = Object.keys(wantFruit); // 원하는 과일 목록
        
        let canBuy = true; // 살 수 있는지
        
        fruits.forEach((fruit) => {
            // 할인 과일 목록에 원하는 과일이 업거나 갯수가 맞지 않으면 회원가입 x
            if (!checkFruit[fruit] || checkFruit[fruit] !== wantFruit[fruit]) {
                canBuy = false;
                return;
            }
        })
        
        if (canBuy) answer ++; // 가능하면 회원가입
        
        startDate++;
    }
    
    return answer;
}