class Solution {
    public int solution(String my_string) {
        int answer = 0;
        my_string = my_string.replaceAll("[^0-9]","");
        for(int i=0;i<my_string.length();i++){
            answer += (int) my_string.charAt(i) - (int)'0';
        }
        return answer;
    }
}
