function solution(s) {
    var answer = '';
    var length = s.length
    
    if(length % 2 === 0){
        answer = s[length/2-1]+ s[length/2]
    } else {
        answer = s[Math.floor(length/2)]
    }
    
    return answer;
}



// 조금 더 간단하게 

function solution(s) {
    var answer = '';
    var half = Math.floor(s.length/2)
    
    return (s.length % 2 ===0) ? answer = s[half-1] + s[half] : answer = s[half];
}
