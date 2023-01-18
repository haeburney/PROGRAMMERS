function solution(n) {
    var answer = BigInt(1);
    var f1 = BigInt(0);
    var f2 = BigInt(1);

    for(var i = 1; i < n; i++){
        answer = f1 + f2;
        f1 = f2;
        f2 = answer;
    }

    return answer%1234567n;
}
