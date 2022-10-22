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


// 좀 더 간결한 코드가 있었다
function solution(num) {
    var answer = 0;
    
    while(answer!=500 && num!==1){
        (num % 2 ===0) ? num /= 2 :   num = 3 * num + 1;
        answer++;
    }
    
    return (num ===1 ) ? answer : -1;
}
