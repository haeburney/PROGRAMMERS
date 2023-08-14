class Solution {
    public int solution(int n) {
        int sum = 0;
        int answer = 0;
        while(n>0){
            sum=0;
            int num = (int) Math.sqrt(n);
            for(int i=1;i<=num;i++){
                if(n % i ==0){
                    sum++;
                }
                
                if(sum>=2){
                    answer++;
                    break;
                }
            }
            n--;
        }       
       
        return answer;
    }
}
