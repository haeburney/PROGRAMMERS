function solution(a, b) {
    var answer = 0;
    
    if (a > b){
        var temp = a;
        a = b;
        b = temp;
    }
    
    for(var i = a ; i <= b ; i++){
        answer += i;
    }
    
    return answer;
}


// 간단하게 

function solution(a, b) {
    var answer = 0;
    
    for(var i = Math.min(a,b) ; i <= Math.max(a,b) ; i++){
        answer += i;
    }
    
    return answer;
}
