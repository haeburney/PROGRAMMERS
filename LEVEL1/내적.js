function solution(a, b) {
    var answer = 0;
    
    for(var i = 0; i < a.length; i++){
        answer += a[i] * b[i];
    }
    
    return answer;
}


// 이렇게 reduce를 이용할 수도 있음

function solution(a, b) {
    return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}

function solution(a, b) {
    var answer = a.reduce((acc, cur, idx) => acc += cur*b[idx], 0)
    return answer;
}
