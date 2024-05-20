function solution(picks, minerals) {
    let answer = 0;
    // 피로도 표 객체
    const costData = {
        "dia": {
            "diamond": 1,
            "iron": 1,
            "stone": 1,
        },
        "iron": {
            "diamond": 5,
            "iron": 1,
            "stone": 1,
        },
        "stone": {
            "diamond": 25,
            "iron": 5,
            "stone": 1,
        }
    };
    // 총 곡괭이 수
    let pickNum = picks.reduce((a, b) => a + b);
    // 피로도 리스트
    let costList = [];
    // 곡괭이가 가능한만큼 5개씩 나눠서 피로도 리스트 추가
    for (let i=0; i<Math.ceil(minerals.length / 5); i++) {
        if (i === pickNum) break;
        const group = minerals.slice(i * 5, i * 5 + 5);
        
        let diaCost = 0;
        group.forEach(mineral => {
            diaCost += costData['dia'][mineral];
        })
        
        let ironCost = 0;
        group.forEach(mineral => {
            ironCost += costData['iron'][mineral];
        })
        
        let stoneCost = 0;
        group.forEach(mineral => {
            stoneCost += costData['stone'][mineral];
        })
        
        costList.push([diaCost, ironCost, stoneCost]);
    }
    // 피로도 리스트를 돌 곡괭이 피로도 기준으로 내림차순 정렬
    costList.sort((a, b) => b[2] - a[2]);
    
    let currentPick = [picks[0], 0]; // 작업 중인 곡괭이 갯수, 인덱스
    // 피로도 리스트 순회하면서 피로도가 적은 순으로 합산
    costList.forEach(cost => {
       const [pickNum, index] = currentPick;
        if (pickNum) {
            answer += cost[index];
            currentPick[0] -= 1;
        } else {
            // 곡괭이가 없으면 다음 곡괭이 탐색
            let newIndex = index + 1;
            while (newIndex < 3) {
                const newPickNum = picks[newIndex];
                if (newPickNum) {
                    currentPick = [newPickNum, newIndex];
                    break;
                }
                
                newIndex ++;
            }
            
            answer += cost[newIndex];
            currentPick[0] -= 1;
        }
    })
    
    return answer;
}