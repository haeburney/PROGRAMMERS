function solution(n) {
    var answer = '';

    for(var i = 0; i < Math.floor(n/2); i++){
        answer += '수박';
    }

    if(n % 2 === 1){
        answer += '수';
    }

    return answer;
}


// 짧게
function solution(n) {
    
    return '수박'.repeat(n/2) + (n % 2 ===1? '수':'');
}
