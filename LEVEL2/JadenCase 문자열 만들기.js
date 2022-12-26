function solution(s) {
    var answer = '';
    s = s.toLowerCase();
    var array = s.split("");

    if(array[0] != " " && isNaN(array[0])){
        array[0] = array[0].toUpperCase();
    }
    answer += array[0];

    for(var i = 1; i < array.length; i ++){
        if(array[i-1] == " " && isNaN(array[i])){
            array[i] = array[i].toUpperCase();
        }
        answer += array[i];
    }


    return answer;
}
