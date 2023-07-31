class Solution {
    public int solution(String s) {
        //개선된 코드
        String[] snumber = {"zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"};
        String[] inumber = {"0", "1", "2", "3", "4", "5", "6", "7", "8", "9"};
        
        for(int i=0; i<snumber.length; i++){
            s = s.replaceAll(snumber[i], inumber[i]);
        }
        
        return Integer.valueOf(s);
    }
}
