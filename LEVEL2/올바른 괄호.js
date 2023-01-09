function solution(s){
    var answer = true;
    
    if(s[0] === ')'){
        return answer = false;
    }
    
    var balance = 0 ;
    
    for(var i = 0; i < s.length; i++){
        s[i] === '(' ? balance++ : balance--;
        
        if(balance < 0){
            return answer = false;
        }
    }
    
    if(balance != 0){
        answer = false;
    }
    
    return answer;
}
