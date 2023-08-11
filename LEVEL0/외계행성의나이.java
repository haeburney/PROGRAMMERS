class Solution {
    public String solution(int age) {
        String[] arr = {"a","b","c","d","e","f","g","h","i","j"};
        String answer = "";
        while(age>0){
            int num = age % 10;
            answer = arr[num] + answer;
            age /= 10;
        }
        return answer;
    }
}
