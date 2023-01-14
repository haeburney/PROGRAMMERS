function solution(s) {
    var world = s.split(' ');
    var answer = '';
    
    for(var i = 0; i<world.length ; i++){
        for(var j = 0; j < world[i].length; j++){
            j % 2 === 0 ? answer += world[i][j].toUpperCase() : answer += world[i][j].toLowerCase();
        }
        if(i < world.length -1) answer += " ";
    }
    
    return answer;
}
