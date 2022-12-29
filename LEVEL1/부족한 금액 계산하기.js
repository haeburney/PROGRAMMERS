function solution(price, money, count) {
    var answer = count * price * ( count + 1) / 2;
    
    if(answer - money > 0){
        return answer = answer - money;
    } else {
        return 0;
    }
}
