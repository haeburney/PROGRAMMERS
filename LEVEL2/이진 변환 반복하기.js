function solution(s) {
    var answer = [1,0];
    var nextX = '';
    
    while(s != '1'){
        nextX = '';
        for(var i = 0; i < s.length; i++){
            s[i] === '1' ? nextX += s[i] : answer[1]++;
        }
        
        if(nextX === s) { // 이진변환 해야 함
            answer[0]++;
            nextX = '';
            var length = s.length;
            while(length > 1){
                length % 2 === 0 ? nextX += '0' : nextX += '1';
            length = Math.floor(length/2);
            }
            nextX += '1';
            const reversed = nextX.split('').reverse().join('');
            s = reversed; 
        } else {
            s = nextX;
        }
    }
    
    return answer;
    
}
