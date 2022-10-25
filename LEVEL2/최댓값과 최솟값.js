function solution(s) {
    var answer = '';
    var array = s.split(" ").map(function(item){
        return parseInt(item, 10);
    });
    
    return answer = Math.min.apply(Math, array) + " " + Math.max.apply(Math, array) ;
}


// 이렇게도 간응한 자바스크립트 대박.. 밑이 훨 빠름
function solution(s) {
    var array = s.split(" ");
    
    return Math.min.apply(Math, array) + " " + Math.max.apply(Math, array) ;
}

