class Solution {
    public String solution(String my_string) {
        String answer = "";
        for(int i=0; i<my_string.length();i++){
            if((int)my_string.charAt(i) >= 97){
                answer += String.valueOf((char)(my_string.charAt(i)-32));
            } else{
                answer += String.valueOf((char)(my_string.charAt(i)+32));
            }
        }
        return answer;
    }
}
