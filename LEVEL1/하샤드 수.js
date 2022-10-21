function solution(x) {
    var answer = true;
    var sum = 0;
    var n = x;
    
    while (n > 0){
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    
    (x % sum ===0 )? answer = true : answer = false;
    
    return answer;
}
