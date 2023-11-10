class Solution {
    public String solution(int a, int b) {
        int[] month = {31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
        String[] day = {"FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"};
        
        int sum = b;
        for (int i = 0; i < a-1; i++) {
            sum += month[i];
        }
        
        sum = sum % 7;
        System.out.println(sum);
        if(sum ==0) {
            sum = 6;
        } else {
            sum--;
        }
 
        return day[sum];
    }
}
