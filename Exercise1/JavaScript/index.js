// initializing the counter to 0
let i = 0;
// intializing the string to print to empty string
let str = "";
// Checking if i is less than 100 and incrementing its value
while (i++ < 100) {
  // Using short circuiting to change str value to custom values when i is a multiple of 3 or 5 or 7, and to i in all other cases
  str =
    (i % 3 == 0 && "Hello") ||
    (i % 5 == 0 && "World") ||
    (i % 7 == 0 && "Yoo") ||
    i;
  // Printing str to the console
  console.log(str);
}
