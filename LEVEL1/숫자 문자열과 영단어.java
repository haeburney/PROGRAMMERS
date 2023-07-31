class Solution {
    public int solution(String s) {
        String sanswer = "";
        String[] number = s.split("");
        for(int i=0; i<number.length;i++){
            if(number[i].equals("z")){
                sanswer += "0";
                i += 3;
            } else if(number[i].equals("o")){
                sanswer += "1";
                i += 2;
            } else if(number[i].equals("t") && number[i+1].equals("w")){
                sanswer += "2";
                i += 2;
            } else if(number[i].equals("t") && number[i+1].equals("h")){
                sanswer += "3";
                i += 4;
            } else if(number[i].equals("f") && number[i+1].equals("o")){
                sanswer += "4";
                i += 3;
            } else if(number[i].equals("f") && number[i+1].equals("i")){
                sanswer += "5";
                i += 3;
            } else if(number[i].equals("s") && number[i+1].equals("i")){
                sanswer += "6";
                i += 2;
            } else if(number[i].equals("s") && number[i+1].equals("e")){
                sanswer += "7";
                i += 4;
            } else if(number[i].equals("e")){
                sanswer += "8";
                i += 4;
            } else if(number[i].equals("n")){
                sanswer += "9";
                i += 3;
            } else {
                sanswer += number[i];
            }
        }
        return Integer.valueOf(sanswer);
    }
}
