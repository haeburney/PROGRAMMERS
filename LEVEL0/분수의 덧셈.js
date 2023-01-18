function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    answer[0] = numer1*denom2 + numer2*denom1;
    answer[1] = denom1 * denom2;
    
    var r = 1;
    var top = 1;
    gcd(answer[0], answer[1]);
        
    function gcd(a, b) {
        if(r === 0) return top=a;
        
        r = a % b;
        a = b;
        b = r; 
        
        gcd(a,b);
    }
    
    answer[0] /= top;
    answer[1] /= top;

    return answer;
}
