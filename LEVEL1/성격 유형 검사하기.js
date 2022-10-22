function solution(survey, choices) {
    var answer = '';
    var count =[0,0,0,0,0,0,0,0];
    var type = ['R', 'T', 'C', 'F', 'J', 'M', 'A', 'N'];
    // R=0, T=1, C=2, F=3, J=4, M=5, A=6, N=7
    
    for(var i = 0 ; i < survey.length; i++){
        var input = survey[i].split('');
        if(input[0]>input[1]){
            input = input.sort();
            choices[i] = 8 - choices[i];
        }
        
        switch(input[0]){
            case 'R':
                if( choices[i]>=4){
                    count[1] += choices[i] - 4;
                } else {
                    count[0] += 4 - choices[i];
                }
                break;
            case 'C':
                if( choices[i]>=4){
                    count[3] += choices[i] - 4;
                } else {
                    count[2] += 4 - choices[i];
                }
                break;
             case 'J':
                if( choices[i]>=4){
                    count[5] += choices[i] - 4;
                } else {
                    count[4] += 4 - choices[i];
                }
                break;
             case 'A':
                if( choices[i]>=4){
                    count[7] += choices[i] - 4;
                } else {
                    count[6] += 4 - choices[i];
                }
                break;         
        }   
    }
    
    for( var i = 0 ; i < 4 ; i++){
        if(count[i*2]>=count[i*2+1]){
            answer += type[i*2];
        } else {
            answer += type[i*2+1];
        }
        console.log(i,":",answer);
    }
    
    return answer;
}
