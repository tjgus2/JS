// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요

function solution(n)
{
    let sum = 0;
    
    let str_n = n.toString();
    for (let i=0; i < str_n.length; i++){
        sum += Number(str_n[i]);
    }
    return sum;
}