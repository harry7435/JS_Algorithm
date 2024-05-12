function solution(n, computers) {
    let answer = 0;
    let visited = new Array(n).fill(0);
    
    function dfs(index) {
        visited[index] = 1;
        
        for (let connectIndex=0; connectIndex < n; connectIndex++) {
            if (!visited[connectIndex] && computers[index][connectIndex]) {
                dfs(connectIndex);
            }
        }
    }
    
    for (let i=0; i<n; i++) {
        if (!visited[i]) {
            answer += 1;
            dfs(i);
        }
    }
    
    
    return answer;
}