// 풀이 1
function solution(s){
    var answer = true;
    var countP = 0 , countY = 0;
    var array = s.toString();
    
    for(var i = 0 ; i < array.length; i++ ){
        if(array[i]==='p' || array[i]==='P') {
            countP++;
        } else if (array[i]==='y' || array[i]==='Y'){
            countY++;
        }
    }
  
    if(countP === countY){
        answer = true;
    } else {
        answer = false;
    }

    return answer;
}

// 1. countP, countY를 따로 변수로 주지 않아도 풀 수 있다.
// count로 하고 P가 나오면 ++, Y가 나오면 --를 진행하여 
// count의 값이 0이 되면 true를 주면 된다. 
// 2.  if(array[i]==='p' || array[i]==='P') 이렇게 쓸 필요 없이
// s=s.toUpperCase() 하여 대문자만 비교하면 된다.



// 풀이 2
function solution(s){
    var answer = true;
    var count = 0;
    s = s.toUpperCase();
    
    for(var i = 0 ; i < s.length; i++ ){
        if(s[i]==='P') {
            count++;
        } else if (s[i]==='Y'){
            count--;
        }
    }
  
    if(count === 0){
        answer = true;
    } else {
        answer = false;
    }

    return answer;
}
