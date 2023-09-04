class Solution {
    public int solution(String t, String p) {
        int answer = 0;
        long numP = Long.valueOf(p);
        
        for(int i=0;i<t.length()-p.length()+1;i++){
            if(Long.valueOf(t.substring(i, i+p.length()))<=numP){
                answer++;
            }      
        }
        
        return answer;
    }
}
