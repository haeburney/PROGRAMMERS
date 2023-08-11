class Solution {
    public int[] solution(int[] emergency) {
        int max = 0;
        int where = 0;
        int[] answer = new int[emergency.length];
        
        for(int i=0; i < emergency.length; i++){
            max = 0;
            where = 0;
            for(int j=0; j < emergency.length; j++){
                if(emergency[j]>max){
                    max = emergency[j];
                    where = j;
                }
            }
            answer[where] = i + 1;
            emergency[where] = 0;
        }
        
        return answer;
    }
}
