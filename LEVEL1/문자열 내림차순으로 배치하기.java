import java.util.Arrays;
import java.util.Comparator;

class Solution {
    public String solution(String s){
        String[] arr=s.split("");
        String answer="";
		Arrays.sort(arr, Comparator.reverseOrder());
		
		for(int i=0;i<arr.length;i++) {
			System.out.print(arr[i]);
            answer+=arr[i];
		}
        return answer;
    }
}
