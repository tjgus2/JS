// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.

function solution(a, b) {
    let sum = 0;
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}