class Solution {
    public int solution(int[] numbers, int k) {
        int size = numbers.length;
        
        if(size % 2 ==0){
            if ( k % (numbers.length/2) == 0 ){
                return numbers[numbers.length-2];
            } else {
                return numbers[ 2 * (k % (numbers.length/2)-1)];
            }
        } else{
            k %= numbers.length;
        
            if(k==0){
                k = numbers.length;
             }
            
             if(k > (size/2+1) ){
                System.out.println((k - (size/2+1))*2-1);
                return numbers[(k - (size/2+1))*2-1];
            } else{
                 System.out.println("hi : "+((k-1)*2));
                return numbers[(k-1)*2];
            }  
        }
        
       // return 0;
    }
}
