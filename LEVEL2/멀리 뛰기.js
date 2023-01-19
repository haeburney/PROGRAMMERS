function solution(n) {
    var answer = 0;
    var num1 = 1;
    var num2 = 2;
    
    if(n === 1){
        return 1;
    } else if(n ===2){
        return 2;
    }
    
    for(var i = 3; i <= n; i++){
        answer = (num1 + num2) % 1234567;
        num1 = num2 % 1234567;
        num2 = answer % 1234567;
    }
    
    return answer;
}
