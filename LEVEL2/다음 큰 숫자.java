class Solution {
    public int solution(int n) {
        String binary = Integer.toBinaryString(n);
        
        int answer = 0;
        int count = 0;
        for(int i=0; i<binary.length();i++){
            if(binary.charAt(i)=='1'){
                count++;
            }
        }
        
        
        for(int i=n+1;i<1000000;i++){
            int check = 0; 
            
            String binary2 = Integer.toBinaryString(i);
            
            for(int j=0; j<binary2.length();j++){
                if(binary2.charAt(j)=='1'){
                    check++;
                }
            }
            
            if(check == count){
                answer = i;
                break;
            }
        }
        
    
        return answer;
    }
}
