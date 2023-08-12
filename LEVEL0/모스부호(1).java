class Solution {
    public String solution(String letter) {
        String[] morse = { 
            ".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."};
        
        String[] alphabet = {"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"};
    
        String answer = "";
        String[] letter2 = letter.split(" ");
      
        for(int i=0;i<letter2.length;i++){
            for(int j=0;j<morse.length;j++){
                if(letter2[i].equals(morse[j])){
                    answer += alphabet[j];
                }
            }
        }
        return answer;
    }
}
