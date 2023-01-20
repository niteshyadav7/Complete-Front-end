package DSA.Recursion;

import java.util.Scanner;

public class prob03 {
    
    public static void printIncAndDec (int num){
        if(num == 0)
        return ;
        System.out.println(num);
        printIncAndDec(num-1);
        System.out.println(num);
    }
    public static void main(String[] args) {
        Scanner scn =new Scanner (System.in);
        int n =scn .nextInt();
        printIncAndDec(n);
    }
    
}
