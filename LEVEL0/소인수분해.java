import java.util.*;

class Solution {
    public Set<Integer> solution(int n) {
        ArrayList<Integer> arr = new ArrayList<>(); 
        Set<Integer> set = new TreeSet<Integer>();
        int[] answer = {1,2,3};
        int num=2;
        
        while(n>1){
            if(n % num == 0){
                set.add(num);
                n /= num;
            } else{
                num++;
            }
        }
        return set;
    }
}
