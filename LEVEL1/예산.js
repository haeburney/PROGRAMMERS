function solution(d, budget) {
    var answer = 0;
    d.sort((a,b)=>a-b);

    while(true) {
        budget -= d[answer];
        if(budget >= 0) {
            answer++;
        } else {
            break;
        }
    }
    return answer;
}
