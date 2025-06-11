// 수웅이가 준비한 음식의 양을 칼로리가 적은 순서대로 나타내는 정수 배열 food가 주어졌을 때, 대회를 위한 음식의 배치를 나타내는 문자열을 return 하는 solution 함수를 완성해주세요.

function solution(food) {
    let left = "";
    for (let i = 1; i < food.length; i++) {
        let count = Math.floor(food[i]/2);
        left += String(i).repeat(count);
    }
    let right = [...left].reverse().join("");
    return left + "0" + right;
}