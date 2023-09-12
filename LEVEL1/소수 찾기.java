import java.lang.Math.*;

class Solution {
    public int solution(int n) {
        int answer = 0;
        
        while(n>1){
            double num = Math.sqrt(n);
            int count=0;
            
            for(int i=2;i<=num;i++){
                if(n%i==0){
                    count++;
                    break;
                }
            }
            
            if(count==0) answer++;
            
            n--;
        }
        
        return answer;
    }
}
