// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

function solution(phone_number) {
    const len = phone_number.length;
    const hidden = "*".repeat(len-4);
    const visible = phone_number.slice(-4);
    return hidden+visible;
}