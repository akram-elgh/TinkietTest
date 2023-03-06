public class App {
    public static void main(String[] args) throws Exception {
        // Intializing the counter to 0
        int i = 0;
        // Cheking if i is less than 100 and incrementing it
        while (i++ < 100)
        {
            // Checking if i is multiple of 3
            if (i % 3 == 0)
            {
                System.out.println("Hello");
            }
            // Checking if i is multiple of 5
            else if (i % 5 == 0)
            {
                System.out.println("World");
            }
            // Checking if i is multiple of 7
            else if (i % 7 == 0)
            {
                System.out.println("Yoo");
            }
            // Printing the value of i in all other cases
            else 
            {
                System.out.println(i);
            }
        }
    }
}
