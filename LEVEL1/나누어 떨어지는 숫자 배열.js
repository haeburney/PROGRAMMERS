function solution(arr, divisor) {
    var answer = [];
    for(var i = 0 ; i < arr.length; i++){
        if(arr[i] % divisor === 0){
            answer.push(arr[i]);
        }
    }
    answer.sort(function(a,b){return a-b;});
    
    return (answer.length > 0) ? answer : [-1] ;
}
