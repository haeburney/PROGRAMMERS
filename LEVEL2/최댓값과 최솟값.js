function solution(s) {
    var answer = '';
    var array = s.split(" ").map(function(item){
        return parseInt(item, 10);
    });
    
    return answer = Math.min.apply(Math, array) + " " + Math.max.apply(Math, array) ;
}
