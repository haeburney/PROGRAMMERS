class Solution {
    public int solution(int hp) {
        int answer = 0;
        
        while(hp > 0){
            if(hp % 5 == 0){
                answer += hp/5;
                return answer;
            } else if(hp-5 >0){
                hp-=5;
                answer++;
            } else if(hp % 3 == 0){
                answer += hp/3;
                return answer;
            } else if(hp-3>0){
                hp-=3;
                answer++;
            } else {
                hp--;
                answer++;
            }
        }
        
        return answer;
    }
}
