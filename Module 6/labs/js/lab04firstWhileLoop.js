/*
  This is the JavaScript code for
  "Lab 4: Your First While Loop"
  File: /unit6/labs/lab04firstWhileLoop.html
*/

function UserInputWhileLoop() {
  // Variables Defined
  var userInput = "";
  var userGratitude = "";
  var loopCount = 0;

  // Loop initialized 
  while (loopCount < 5) {
    userInput = prompt("Please enter something you would like to see displayed:");
    document.write("You entered: " + userInput + "\n");
    loopCount++;
  }

  // Thank user after loop
  userGratitude = "\n" + "Thanks for participating!"
  document.write(userGratitude);
}
UserInputWhileLoop();
