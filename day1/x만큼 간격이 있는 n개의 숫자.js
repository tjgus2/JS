// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다

function solution(x, n) {
    var answer = [];
    let num = 0;
    for (let i = 0; i < n; i++) {
        num += x
        answer.push(num);    
    }
    return answer;
}