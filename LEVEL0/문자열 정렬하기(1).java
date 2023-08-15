import java.util.Arrays;

class Solution {
    public int[] solution(String my_string) {
        my_string = my_string.replaceAll("[^0-9]","");
        String[] stringarr = my_string.split("");
        int[] answer=new int[stringarr.length];

        for(int i=0;i<stringarr.length;i++){
            answer[i] = Integer.parseInt(stringarr[i]);
        }

        Arrays.sort(answer);
        return answer;
    }
}
