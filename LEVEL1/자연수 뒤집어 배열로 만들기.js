// 풀이 1 -> 배열을 반으로 나눠서 음료수 나눠 담기로 
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


// 풀이 2 -> 10씩 나머지를 배열에 push 하는 방법 
function solution(n) {
    var answer = [];
    while(n>0){
        answer.push(n%10);
        n = parseInt(n / 10);
    }
    
    return answer;
}


// 풀이 3 -> 문자로 잘라서 다시 parseInt로 만들어서 reverse 하기.
function solution(n) {
    var answer = (n + '').split('').reverse().map(o => parseInt (o));
    
    return answer;
}
