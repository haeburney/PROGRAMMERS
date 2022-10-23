function solution(numbers) {
    var answer = 0;
    var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    
    for(var i = 0 ; i < numbers.length; i++){
        array[numbers[i]]=0;
    }
    
    answer = array.reduce(function add(sum, currValue){
        return sum += currValue;
    },0);
    
    return answer;
}
