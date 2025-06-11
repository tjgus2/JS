// 명예의 전당 목록의 점수의 개수 k, 1일부터 마지막 날까지 출연한 가수들의 점수인 score가 주어졌을 때, 매일 발표된 명예의 전당의 최하위 점수를 return하는 solution 함수를 완성해주세요.

function solution(k, score) {
    const hallOfFame = [];
    const answer = [];
    
    for (let i = 0; i < score.length; i++) {
        hallOfFame.push(score[i]);
        hallOfFame.sort((a, b) => b - a);
        if (hallOfFame.length > k) {
            hallOfFame.pop();
        }
        answer.push(hallOfFame[hallOfFame.length-1]);
    }
    return answer;
}