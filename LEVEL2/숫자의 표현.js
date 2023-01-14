function solution(n) {
    var answer = 0;
    var sum, count;
    
    for(var i = 1; i <= n; i++){
        sum = 0;
        count = i;
        while(sum < n){
            sum += count;
            count++;
        }
        sum === n ? answer++ : null;
    }
    
    return answer;
}
