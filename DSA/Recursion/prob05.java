package DSA.Recursion;

import java.util.Scanner;

public class prob05 {

    public static int linearPower (int x,int n){
        if(n==0){
            return 1;
        }
    int hlt = linearPower(x, n-1);
    return hlt*x;
    }

    public static void main(String[] args) {
        Scanner scn =new Scanner (System.in);
        
        
        int x =scn.nextInt();
        int n =scn.nextInt();
        int getOutPut =linearPower(x, n);
        System.out.println(getOutPut);
    }
}
