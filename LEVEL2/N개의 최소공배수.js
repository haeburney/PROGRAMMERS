function solution(arr) {
    if(arr.length === 1) return arr[0];
    
    var answer = arr[0];
    var min = 1;
    var r = 1;
    
    
    for(var i = 0; i < arr.length-1; i++){
        var sum = answer * arr[i+1];
        gcd(answer, arr[i+1]);
        answer = sum / min; 
        r = 1;
    }
    
    function gcd(a, b){
        if(r === 0) return  min = a;
        
        r = a % b;
        a = b; 
        b = r;
        
        gcd(a, b);
    }
    
    return answer;
}
