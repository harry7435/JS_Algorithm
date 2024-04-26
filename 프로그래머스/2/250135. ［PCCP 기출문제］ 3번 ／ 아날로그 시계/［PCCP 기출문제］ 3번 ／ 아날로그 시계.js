function solution(h1, m1, s1, h2, m2, s2) {
    let answer = 0;
    const startTimeStamp = h1 * 3600 + m1 * 60 + s1;
    const endTimeStamp = h2 * 3600 + m2 * 60 + s2;
    
    const getTimeDeg = (t) => {
        const h = parseInt(t / 3600);
        const m = parseInt((t % 3600) / 60);
        const s = t % 3600 % 60;
        const hourDeg = (h >= 12 ? h - 12 : h) * 30 + m / 2 + s / 120;
        const minDeg = m * 6 + s / 10;
        const secDeg = s * 6;
        
        return [hourDeg, minDeg, secDeg]
    }
    
    const checkMeet = (time, hourDeg, minDeg, secDeg) => {
        const nextHourDeg = hourDeg + 1/120;
        const nextMinDeg = minDeg + 1/10;
        const nextSecDeg = secDeg + 6;
        
        const isHourMeet = secDeg < hourDeg && nextSecDeg >= nextHourDeg;
        const isMinMeet = secDeg < minDeg && nextSecDeg >= nextMinDeg;
                        
        return [isHourMeet, isMinMeet];
    }
    
        
    for (let time=startTimeStamp; time < endTimeStamp ; time++) {
        if (time === 0 || time === 12 * 3600) answer += 1;
        const [currentHourDeg, currentMinDeg, currentSecDeg] = getTimeDeg(time);
        const [isHourMeet, isMinMeet] = checkMeet(time, currentHourDeg, currentMinDeg, currentSecDeg);
        if (isHourMeet && isMinMeet) {
            const nextHourDeg = currentHourDeg + 1/120;
            const nextMinDeg = currentMinDeg + 1/10;
            const h = parseInt(time / 3600);
            const m = parseInt((time % 3600) / 60);
            const s = time % 3600 % 60;
            
            if (time === 11 * 3600 + 59 * 60 + 59) {
                if (endTimeStamp === 12 * 3600) answer += 1;
            } else {
                answer += 2;   
            }
            
            
        } else if (isHourMeet || isMinMeet) {
            answer += 1;
        }
    }    
    
    return answer;
}