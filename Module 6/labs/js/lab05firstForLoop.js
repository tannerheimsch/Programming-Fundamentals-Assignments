/*
  This is the JavaScript code for
  "Lab 5: Your First For Loop"
  File: /unit6/labs/lab05firstForLoop.html
*/

function UserInputForLoop() {
  // Variables Defined
  var userInput = "";
  var userGratitude = "";

  // Loop initialized 
  for (var loopCount = 0; loopCount < 5; loopCount++) {
    userInput = prompt("Please enter something you would like to see displayed:");
    document.write("You entered: " + userInput + "\n");
  }

  // Thank user after loop
  userGratitude = "\n" + "Thanks for participating!"
  document.write(userGratitude);
}
UserInputForLoop();
