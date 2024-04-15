function solution(edges) {
    let answer = [0, 0, 0, 0];
    const graph = {};
    let totalGraph = 0; // 전체 그래프 갯수
    // graph 객체 생성
    edges.forEach(line => {
        const [start, end] = line;
        
        if (!graph[start]) {
            graph[start] = {
                in: [],
                out: [],
            }
        }
        
        if (!graph[end]) {
            graph[end] = {
                in: [],
                out: [],
            }
        }
        
        graph[start].out.push(end);
        graph[end].in.push(start);
            
    })
    
    Object.keys(graph).forEach(key => {
        const node = graph[key];
        // 생성 정점
        if (node.in.length === 0 && node.out.length >= 2) {
            answer[0] = Number(key);
            totalGraph = node.out.length;
            return
        }
        // 막대 그래프
        if (node.out.length === 0) {
            answer[2] += 1;
            return
        }
        // 8자 그래프
        if (node.in.length >= 1 && node.out.length === 2) {
            answer[3] += 1;
            return
        }
    })
    // 도넛 그래프는 전체 그래프 - 나머지 종류 그래프
    answer[1] = totalGraph - answer[2] - answer[3];
    
    return answer;
}