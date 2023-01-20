package DSA.Recursion;
// import java.io.*;
import java.util.Scanner;
public class prob01 {
    public static void printIncreasing (int num){
        if(num == 0)
        return;
        printIncreasing(num-1);
        System.out.println(num);
    }
    public static void main(String[] args) {
        Scanner scn= new Scanner (System.in);
        int n = scn.nextInt();
        printIncreasing(n);
    }
}
