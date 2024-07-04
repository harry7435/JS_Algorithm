/*
10 5 20 17
최대 공약 수
오름차순 정렬된 배열에서 최대 공약수를 구하는 함수를 먼저 만들고
A B에서 각각 최대 공약수를 구하고
해당 공약수가 다른 배열의 요소를 나누지 않는지 확인
조건을 만족하는 값을 리턴
*/

function findDivNum(arr) {
    let result = [];
    const sortedArr = arr.sort((a, b) => a - b);
    const minNum = sortedArr[0];
    
    for (let i=minNum; i>1; i--) {
       if (minNum % i === 0) {
           let isAllDiv = true;
           for (let j=0; j<sortedArr.length; j++) {
               if (sortedArr[j] % i !== 0) {
                    isAllDiv = false;
               }
           }
           
           if (isAllDiv) {
               result.push(i);
           }
       }
    }
    
    return result;
}

function solution(arrayA, arrayB) {
    const divA = findDivNum(arrayA);
    const divB = findDivNum(arrayB);
    
    let maxDiv = 0;
    
    let isFindA = false;
    
    for (let i=0; i<divA.length; i++) {
        if (isFindA) break;
        
        const numA = divA[i];
        let numAOk = true;
        
        for (let j=0; j<arrayB.length; j++) {
            if (arrayB[j] % numA === 0) {
                numAOk = false;
                break;
            }
        }
        
        if (numAOk) {
            maxDiv = maxDiv < numA ? numA : maxDiv;
            isFindA = true;
        }
    }
    
    let isFindB = false;
    
    for (let i=0; i<divB.length; i++) {
        if (isFindB) break;
        
        const numB = divB[i];
        let numBOk = true;
        
        for (let j=0; j<arrayA.length; j++) {
            if (arrayA[j] % numB === 0) {
                numBOk = false;
                break;
            }
        }
        
        if (numBOk) {
            maxDiv = maxDiv < numB ? numB : maxDiv;
            isFindB = true;
        }
    }
    
    return maxDiv;
    
}