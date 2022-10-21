function solution(n) {
    var answer = 0;
    var squareRoot = Math.sqrt(n)

    if(Number.isInteger(squareRoot)){
        answer = Math.pow(squareRoot + 1, 2);
        return answer;
    } else {
        return -1;
    }

}
