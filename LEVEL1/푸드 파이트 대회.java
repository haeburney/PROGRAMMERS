class Solution {
    public String solution(int[] food) {
        String answer = "";
        
        for(int i=0;i<food.length;i++){
            if(food[i] > 1){
                for(int j=0; j<food[i]/2;j++){
                    answer += String.valueOf(i); 
                }
            }
        }
        
        StringBuffer sb = new StringBuffer(answer);
        answer += "0" + sb.reverse().toString();
        
        return answer;
    }
}
