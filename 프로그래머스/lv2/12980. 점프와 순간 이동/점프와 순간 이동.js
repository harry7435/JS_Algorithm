function solution(n)
{
    let ans = 0;
 
    while (n > 0) {
        if (n % 2 === 0) {
            n = parseInt(n / 2);
        } else {
            ans += 1;
            n -= 1;
        }
    }

    return ans;
}