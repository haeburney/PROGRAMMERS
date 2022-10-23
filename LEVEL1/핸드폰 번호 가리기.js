function solution(phone_number) {
    var answer = '', i ;
    
    for( i = 0 ; i<phone_number.length; i++){
       if(i<phone_number.length-4){
          answer += "*" 
       } else {
         answer += phone_number[i];
       }
       
    }
    
    return answer;
}


// 더 간단한 풀이 repeat, slice 

function solution(phone_number) {
    var answer = '*'.repeat(phone_number.length-4)+ phone_number.slice(-4);
    
    return answer;
}
