function solution(name, yearning, photo) {
    var answer = [];
    let point = {}; // 개인 기억 점수 object
    // 개인 기억 점수 저장
    for (let i=0; i<name.length; i++) {
        point[name[i]] = yearning[i];
    }
     // photo 내 기억점수 계산   
    photo.forEach((names) => {
        let photoPoint = 0; // 사진별 기억점수
        // 기억점수가 존재하는 사람만 점수 추가
        for (photoName of names) {
            if (Object.keys(point).includes(photoName)) {
                photoPoint += point[photoName];
            }
        }
        
        answer.push(photoPoint);
    })
    
    return answer;
}