// 만료시점 구하는 함수
function getExpireTime(privacy, term) {
    const privacyData = privacy.split('.')
    const year = Number(privacyData[0]);
    const month = Number(privacyData[1]);
    const date = Number(privacyData[2]);
    
    const plusMonth = term % 12;
    const plusYear = parseInt(term / 12);
    
    const newMonth = (month + plusMonth) > 12
        ? (month + plusMonth)% 12
        : month + plusMonth;
    const overYear = (month + plusMonth) > 12
        ? parseInt((month + plusMonth) / 12)
        : 0 
    const newYear = year + plusYear + overYear;
    
    return [ newYear , newMonth, date ];
    
}

function solution(today, terms, privacies) {
    let answer = [];
    // 오늘 날짜
    const todayYear = Number(today.split('.')[0]);
    const todayMonth = Number(today.split('.')[1]);
    const todayDate = Number(today.split('.')[2]);
    // 유효기간 term 객체 생성
    const termData = {};
    terms.forEach(term => {
        termData[term.split(' ')[0]] = Number(term.split(' ')[1]);
    })
    
    privacies.forEach((data, index) => {
        const dataList = data.split(' ');
        const date = dataList[0];
        const name = dataList[1];
        // 만료 시간 구하기
        const [expireYear, expireMonth, expireDate] = getExpireTime(date, termData[name]);
        // 오늘 날짜와 비교
        if (todayYear > expireYear) {
            return answer.push(index + 1);
        }
        
        if (todayYear === expireYear) {
            if (todayMonth > expireMonth) {
                return answer.push(index + 1);
            }
            
            if (todayMonth === expireMonth) {
                if (todayDate >= expireDate) {
                    return answer.push(index + 1);
                }
            }
        }
    })
    
    return answer;
}