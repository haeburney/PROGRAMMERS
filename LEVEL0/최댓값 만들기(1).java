class Solution {
    public int solution(int[] numbers) {
        int max1 = 0;
        int index = 0;
        int max2 = 0;
        
        for(int i=0; i<numbers.length;i++){
            if(max1 < numbers[i]){
                max1 = numbers[i];
                index = i;
            }
        }
        
        numbers[index] = 0;
        
         for(int i=0; i<numbers.length;i++){
            if(max2 < numbers[i]){
                max2 = numbers[i];
            }
        }
        
        return max1 * max2;
    }
}
