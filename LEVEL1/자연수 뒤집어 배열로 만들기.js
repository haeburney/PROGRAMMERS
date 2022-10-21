// 풀이 1 
function solution(n) {
    var answer = (n + '').split('');
    var i, end = answer.length - 1;
    
    for(i = 0; i < answer.length / 2; i++){
        var temp;
        temp = answer[i];
        answer[i] = parseInt(answer[end - i]);
        answer[end - i] = parseInt(temp);
    }
  
    return answer;  
}

// 풀이 2 
