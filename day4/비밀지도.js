// 네오가 프로도의 비상금을 손에 넣을 수 있도록, 비밀지도의 암호를 해독하는 작업을 도와줄 프로그램을 작성하라.

function solution(n, arr1, arr2) {
    const result = [];
    
    for (let i = 0; i < n; i++){
        let row = ''
        let merged = (arr1[i] | arr2[i]).toString(2).padStart(n, '0');
        for (let j = 0; j < n; j++) {
            row += merged[j] === '1' ? "#" : " ";
        }
        result.push(row);
    }
    return result;
}