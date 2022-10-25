function solution(n, arr1, arr2) {
    var answer = [], i, j;
    
    for(i = 0; i < n; i++){
        var count1 = [], count2 = []; 
        var k = 0;
        
        for(j = 0; j < n; j++){
            if(arr1[i]===0){
                count1.push(0)
            } else{
                (arr1[i] % 2 == 1)? count1[k] = '1' :  count1[k] = '0';
            }
            
             if(arr2[i]===0){
                count2.push(0)
            } else{
                (arr2[i] % 2 == 1)? count2[k] = '1' :  count2[k] = '0';
            }
            
            arr1[i] = Math.floor(arr1[i]/2);
            arr2[i] = Math.floor(arr2[i]/2);
            k++;
        }
        
        answer[i]='';
        for(j = n-1 ; j >= 0; j--){
            if(count1[j] === '1' || count2[j] === '1'){
                answer[i] += '#';
            } else {
                answer[i] += ' ';
            }
        }
    }
    return answer;
}
