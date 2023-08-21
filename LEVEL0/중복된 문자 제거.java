class Solution {
    public String solution(String my_string) {
        String answer = "";
        int[] upper = new int[26];
        int[] lower = new int[27];
        
        for(int i=0;i<my_string.length();i++){
            int num = (int)my_string.charAt(i);
           // System.out.println(num);
            
            
            if(num >= 97 ){ // 소문자라면
                if(lower[num-97]==0){
                    lower[num-97] = 1;
                    answer += String.valueOf(my_string.charAt(i));
                }
            } else if(num >= 65){
                if(upper[num-65]==0){
                    upper[num-65] = 1;
                    answer += String.valueOf(my_string.charAt(i));
                }
            } else if(num==32){
                if(lower[26]==0){
                    lower[26] = 1;
                    answer += String.valueOf(my_string.charAt(i));
                }
            }
            
        }
        
        return answer;
    }
}
