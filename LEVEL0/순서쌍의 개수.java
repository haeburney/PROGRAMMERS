class Solution {
    public int solution(int n) {
        int answer = 0;
        int sqrRt = (int)Math.sqrt(n);
        
        for(int i=1;i<=sqrRt;i++){
            if(i==sqrRt && sqrRt * sqrRt == n){
                answer++;
            } else if(n % i == 0){
                answer += 2;
            }
        }
        
        return answer;
    }
}
