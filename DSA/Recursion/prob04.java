package DSA.Recursion;

import java.util.Scanner;

public class prob04 {

    public static int printFactorial(int num){
        if(num ==0){
            return 1;
        }
        int ans =printFactorial(num-1)*num;
        return ans;
    }
    public static void main(String[] args) {
        Scanner scn =new Scanner (System.in);
        int num =scn.nextInt();
        int ans1 =printFactorial(num);
        System.out.println(ans1);
    }
    
}
