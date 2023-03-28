function solution(s) {
    var answer = '';
    let one = [];
    let two = [];
    // 한번만 등장하는 문자 구분
    for (let i=0; i<s.length; i++) {
        if(!two.includes(s[i])) {
            if (!s.slice(i+1).includes(s[i])) {
                one.push(s[i]);
            } else {
                two.push(s[i]);
            }
        }
    }
    // 정렬 후 문자열 변환
    one.sort();
    answer = one.join("");
    return answer;
}