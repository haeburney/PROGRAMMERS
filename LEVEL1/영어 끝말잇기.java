import java.util.HashSet;

class Solution {
    public int[] solution(int n, String[] list) {
        int[] answer = new int[2];

        HashSet<String> word = new HashSet<>();
        int index = 0;
        for (int i = 0; i < list.length; i++) {
            if (i > 0 && word.contains(list[i])) {
                index = i;
                System.out.println(list[i]);
                break;
            } else {
                word.add(list[i]);
            }

            if (i < list.length - 1 && list[i].charAt(list[i].length() - 1) != list[i + 1].charAt(0)) {
                index = i + 1;
                break;
            }
        }

        if (index > 0) {
            index += 1; // 9번째

            answer[0] = index % n;
            System.out.println(Math.ceil((double) index / n));
            answer[1] = (int) Math.ceil((double) index / n);

            if (answer[0] == 0) {
                answer[0] = n;
            }
        }

        return answer;
    }
}
