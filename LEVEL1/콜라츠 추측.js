function solution(num) {
    var answer = 0;
    
    while(answer<=500){
        if( num === 1 ){
            return answer;
        } else if(num % 2 === 0 ){
            num /= 2;
            answer++;
        } else {
            num = num * 3 + 1;
            answer++;
        }        
    }
    
    return -1;
}
