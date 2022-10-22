function solution(n) {
    var answer = 0;
    
    var array = (n + '').split('').map(o=>parseInt(o));
    
    array.sort(function(a,b){
        return b-a;
    });
    
    for( var i = 0 ; i < array.length; i++){
        answer += array[i]*Math.pow(10,array.length-1-i);
    }
    
    return answer;
}

// 이 방법이 훨씬 간결한 것 같다.
function solution(n) {
    var array =[];
    
    while(n>0){
        array.push(parseInt(n%10));
        n = parseInt(n / 10);
    }
    
    return array.sort((a,b)=>b-a).join('')*1;
}
