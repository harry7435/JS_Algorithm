function solution(keymap, targets) {
    let result = [];
    const keyPressNum = {};
    // 각 알파벳의 최소 입력 가능 횟수를 객체로 변환
    keymap.forEach(key => {
        key.split('').forEach((str, index) => {
            if (!keyPressNum[str]) {
                keyPressNum[str] = index + 1;
                return
            }
            
            if (keyPressNum[str] > index + 1) {
                keyPressNum[str] = index + 1;
            }
        })
    })
    // 주어진 target 입력 횟수 계산
    targets.forEach(target => {
        const targetSum = target.split('').reduce((acc, str) => 
            acc + keyPressNum[str], 0
        );
        
        result.push(targetSum || -1);
    })
    
    return result;
}