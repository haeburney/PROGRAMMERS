class Solution {
    public int solution(int n) {
        int num=1;
        
        while(n > num){
            n /= num;
            if(n>num){
                num++;
            }
        }
        
        return num;
    }
}
