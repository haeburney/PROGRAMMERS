function solution(n, m) {
    var answer = [];
    var r = 1;
    gcd(n,m);
    
    function gcd(a, b) {
        if(r === 0) return answer[0] = a;
        
        r = a % b;
        a = b;
        b = r; 
        
        gcd(a,b);
    }
    
    answer[1] = n * m / answer[0];
    
    return answer;
}
