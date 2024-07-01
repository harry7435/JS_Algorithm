class PriorityQueue {
    constructor() {
        this.heap = [null];
    }
    
    push(value) {
        this.heap.push(value);
        let current = this.heap.length - 1;
        let parent = Math.floor(current / 2);
        
        while (current > 1 && this.heap[current] < this.heap[parent]) {
            [this.heap[parent], this.heap[current]] = [this.heap[current], this.heap[parent]];
            current = parent;
            parent = Math.floor(current / 2);
        }
    }
    
    pop() {
        if (this.heap.length === 2) return this.heap.pop();
        
        const popValue = this.heap[1];
        this.heap[1] = this.heap.pop();
        let current = 1;
        let left = 2;
        let right = 3;
        
        while (this.heap[left] < this.heap[current] || this.heap[right] < this.heap[current]) {
            const currentTemp = this.heap[current];
            if (this.heap[left] > this.heap[right]) {
                this.heap[current] = this.heap[right];
                this.heap[right] = currentTemp;
                current = right
            } else {
                this.heap[current] =  this.heap[left];
                this.heap[left] = currentTemp;
                current = left;
            }
            
            left = current * 2;
            right = left + 1;
        }
        
        return popValue;
    }
    
    print() {
        return this.heap;
    }
}


function solution(n, k, enemy) {
    // 우선순위 큐 최소 힙 생성
    let queue = new PriorityQueue();
    // 무적권 k개까지 일단 라운드 가능
    enemy.slice(0, k).forEach(num => queue.push(num));
    console.log(queue.print());
    // 병사 한계치
    let limit = 0;
    
    for (let i=k; i<enemy.length; i++) {
        queue.push(enemy[i]);
        const maxEnemy = queue.pop();
        // 병사 한계치를 넘을 경우 라운드 종료 반환
        if (limit + maxEnemy > n) {
            return i;
        }
        // 병사 한계치 차감
        limit += maxEnemy;
    }
    // 끝까지 진행할 경우 enemy 배열 길이 return
    return enemy.length;
}



