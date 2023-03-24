function solution(my_string) {
    var answer = '';
    console.log(my_string.toLowerCase());
    answer = my_string.toLowerCase().split('').sort().join('');
    return answer;
}