class Solution {
    public int solution(int n, int k) {
        int answer = n*12000;
        k=k-(n/10);
        answer += k*2000;
        return answer;
    }
}
