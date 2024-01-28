function solution(n, m, section) {
    let answer = 0;
    let sectionCopy = [...section]; // 기존 데이터 복사
    // section 배열이 없어질 때까지 수행
    while (sectionCopy.length !== 0) {
        const firstSection = sectionCopy[0];
        
        answer += 1; // 색칠 횟수 +1
        // 롤러 길이만큼 색칠하면서 section 제거
        for (let i=firstSection; i<firstSection + m; i++) {
            if (sectionCopy.includes(i)) {
                sectionCopy.shift();
            }
        }
    }
    
    return answer;
}