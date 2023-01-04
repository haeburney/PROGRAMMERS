function solution(n) {
    var answer = 0;
    var three = '';
    
    while(n > 2){
        three += Math.floor(n % 3);
        n = Math.floor(n / 3);
    }
    three += n;
    
    for(var i = 0; i < three.length; i++){
        answer += (3 ** (three.length - i - 1)) * three[i];
    }
    
    return answer;
}
