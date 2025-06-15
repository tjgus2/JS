function solution(answers) {
    const pattern1 = [1, 2, 3, 4, 5];
    const pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    const scores = [0, 0, 0];
    
    answers.forEach((answer, i) => {
        if (answer === pattern1[i % pattern1.length]) scores[0]++;
        if (answer === pattern2[i % pattern2.length]) scores[1]++;
        if (answer === pattern3[i % pattern3.length]) scores[2]++;
    });
    const maxScore = Math.max(...scores);
    
    const result = [];
    scores.forEach((score, i) => {
        if (score === maxScore) result.push(i+1);
    });
    return result;
}