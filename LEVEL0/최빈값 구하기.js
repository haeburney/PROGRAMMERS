function solution(array) {
    var answer = array[0];
    var max = 1;
    var count = 0;
    var currentMax = 1;
    var rank = [];
    
    array.sort((a,b) => a-b);
    
    for(var i = 1; i < array.length; i++) {
        if(array[i-1] === array[i]){
            currentMax++;
        } else {
            rank.push(currentMax);
            currentMax = 1;
        }
        if(currentMax >= max){
            answer = array[i];
            max = currentMax;
        }
    }
    
    rank.push(currentMax);
    
    for(var i = 0; i < rank.length; i++){
        if(max === rank[i])  count++;
        if(count >= 2)  return answer = -1;
    }
    
    return answer;
}
