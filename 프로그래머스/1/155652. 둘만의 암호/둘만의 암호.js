function solution(s, skip, index) {
    let answer = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    // skip 할 문자 제외
    let filteredString = alphabet;
    skip.split('').forEach(str => {
        filteredString = filteredString.replace(str, '');
    });
    // index 만큼 뒤로 이동시키기 위해 전체 복사
    filteredString = filteredString + filteredString;
    const passwordString = filteredString.slice(index) + filteredString.slice(0, index);
    // 변환 객체 생성
    const convertList = {};
    
    filteredString.split('').forEach((str, idx) => {
        if (convertList[str]) return
        
        convertList[str] = passwordString[idx];
    })
    // 암호 변환
    answer = s.split('').map(str => convertList[str]).join('');
    
    return answer;
}