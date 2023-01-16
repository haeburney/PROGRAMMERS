function solution(numbers) {
    var answer = [];
   
    for(var i=0; i<numbers.length-1; i++){
        for( var j=i; j<numbers.length - 1; j++){
           answer.push(numbers[i]+numbers[j+1]);
        }
    }
    var result = answer.reduce((ac, v) => ac.includes(v) ? ac : [...ac, v], []);
    
    result = result.sort((a,b) => a-b);
    
    return result;
}
