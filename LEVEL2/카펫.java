class Solution {
    public int[] solution(int brown, int yellow) {
        
        int[] answer = new int[2];
        
        int num = (int) Math.floor(Math.sqrt(yellow));
     
        int i = 1;
        while (i <= num) {
            if (yellow == 1 && i == 1 && brown == 8) {
                answer[0] = 3;
                answer[1] = 3;
                break;
            }
            if (yellow % i == 0 && brown == (yellow/i + i) * 2 + 4) {
                if (yellow > i) { // yellow가 0번째
                    answer[0] = yellow/i + 2;
                    answer[1] = i + 2;
                } else {
                    answer[0] = i + 2;
                    answer[1] = yellow/i + 2;
                }
                break;
            }
            i++;
        }
        
        return answer;
    }
}
