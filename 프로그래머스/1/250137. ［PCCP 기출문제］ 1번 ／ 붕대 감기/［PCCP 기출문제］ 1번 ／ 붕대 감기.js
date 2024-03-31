function solution(bandage, health, attacks) {
    let answer = health; // 초기 체력 세팅
    const [coolTime, healPerSec, bonusHeal] = bandage;
    let healStack = 0; // 연속 성공 값
    const endTime = attacks[attacks.length - 1][0]; // 공격이 끝나는 시간
    const attackTime = attacks.map(attack => attack[0]); // 공격 당하는 시간
    
    for (let time=0; time <= endTime; time++) {
        const attackIndex = attackTime.indexOf(time);
        
        if (attackIndex !== -1) {
            // 공격을 당할 때
            answer -= attacks[attackIndex][1];
            if(answer <= 0) {
                // 체력이 0 이하가 되면 죽음
                return answer = -1;
            }
            healStack = 0; // 연속 성공 초기화
        } else {
            // 기술 시전
            healStack += 1;
            if (healStack === coolTime) {
                // 연속 시전 성공 시 추가 회복 및 연속 성공 스택 초기화
                answer += healPerSec + bonusHeal;
                healStack = 0;
            } else {
                // 일반 시전
                answer += healPerSec;
            }
            
            if (answer > health) {
                // 최대 체력 이상 회복 불가능
                answer = health;
            }
        }
        
    }
    
    return answer;
}