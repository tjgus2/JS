// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

function solution(s) {
    const len = s.length;
    const half = Math.floor(len/2);

    if (len % 2 == 0) {
        return s.slice(half-1,half+1)
    } else {
        return s.slice(half, half+1)
    }
}