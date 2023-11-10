import java.util.Stack;

class Solution
{
    public int solution(String str)
    {
        int answer = -1;
        Stack<String> stack = new Stack<>();

         for (int i = 0; i < str.length(); i++) {
            if (stack.size() > 0 &&  stack.peek().equals(String.valueOf(str.charAt(i)))) {
                stack.pop();
            } else {
                stack.add(String.valueOf(str.charAt(i)));
            }
        }

        if (stack.size() == 0) {
            answer = 1;
        } else {
            answer = 0;
        }

        return answer;
    }
}
