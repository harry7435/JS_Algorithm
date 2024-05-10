function solution(plans) {
    let answer = [];
    
    const planTime = plans.map(plan => {
        const [name, startTime, playTime] = plan;
        const [startHour, startMin] = startTime.split(':');
        const startTimestamp = Number(startHour) * 60 + Number(startMin);
        
        return [name, startTimestamp, Number(playTime)];
    }).sort((a, b) => a[1] - b[1])
        
    let waitPlanList = [];
    let currentPlan = [];
    planTime.forEach(newPlan => {
        const [name, startTime, playTime] = newPlan;
        
        if (!currentPlan.length) {
            currentPlan = newPlan;
        } else {
            if (startTime < currentPlan[1] + currentPlan[2]) {
                waitPlanList.push([currentPlan[0], currentPlan[2] - startTime + currentPlan[1]]);
                currentPlan = newPlan;
            } else if (startTime === currentPlan[1] + currentPlan[2]) {
                answer.push(currentPlan[0]);
                currentPlan = newPlan;
            } else {
                let remainTime = startTime - (currentPlan[1] + currentPlan[2]);
                answer.push(currentPlan[0]);
                
                while (remainTime > 0 && waitPlanList.length) {
                    const lastestWaitPlan = waitPlanList.pop();
                    
                    if (remainTime < lastestWaitPlan[1]) {
                        waitPlanList.push([lastestWaitPlan[0], lastestWaitPlan[1] - remainTime]);
                    } else {
                        answer.push(lastestWaitPlan[0]);
                    }
                    
                    remainTime -= lastestWaitPlan[1];
                }
                
                currentPlan = newPlan;
            }
        }
    })
    
    answer.push(currentPlan[0]);
    
    if (waitPlanList.length) {
        waitPlanList.reverse().forEach(plan => {
            answer.push(plan[0]);
        })
    }
   
    return answer;
}