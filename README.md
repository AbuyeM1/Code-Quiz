# Web APIs: Code Quiz

This is a quiz application using HTML,CSS and Javascript. 
this application focus on the javascript to provide quiz questions and 
collect user data decide whether the answers correct or wrong. 
also this applicatio has a score and results.

## summary

* HTML and CSS and Javascript documents create a quiz with multiple choice questions.
* This project focus using Javascript changes to HTML document.


## Images

  ![alt text](https://lh3.googleusercontent.com/ycb1bbdNEXxUeOYKEyy164P5c1FnLrweCmdMZbk1aAwS4dZEVvnZjtTUP-JZYvdlJTiDVw=s500)
  ![alt text](https://lh3.googleusercontent.com/iOe5AGEBPAHWlJkiRK4jeV3s8-xiSw94IXi4FZdosztEp8-Xh-4Z-P3FJ3BRiAKKB1RVCe0=s500)
  ![alt text](https://lh3.googleusercontent.com/GW-iJiI1ngIgVGcu0wmLsFB8VIadZyeaWHn1_D4aIwrd8G8iESeY6eG2pBLNLnzDYtzUZw=s500)
  ![alt text](https://lh3.googleusercontent.com/SVzGcIRcl5B1Mtl3JoBru3lRzVF0nUq0jvjAUiWwmgSAWwaKuLkqPobiKiJhxmF6stIu5g=s500)

## Code Snippet 
 ## HTML

    <div id="wrapper">
        <!-- Div for timer -->
        <div id="currentTime"></div>
        <!-- Div for quiz content -->
        <div id="questionsDiv">
            <h1>Coding Quiz Challenge</h1>
            <p>Try to answer the following code-Quiz questions within the time limit. if you don not answer the time given then geam is over!</p>
            <ul id="choicesUl"></ul>
            <!-- Buttons -->
            <button id="startTime">Start Quiz</button>
        </div>


## Javascript

    // Declared variables
     var score = 0;
    var questionIndex = 0;

    // Start working code 
    // Declared variables
    var currentTime = document.querySelector("#currentTime");
    var timer = document.querySelector("#startTime");
    var questionsDiv = document.querySelector("#questionsDiv");
    var wrapper = document.querySelector("#wrapper");

    // Seconds left is 15 seconds per question:
    var secondsLeft = 60;
    // Holds interval time
    var holdInterval = 0;
    // Holds penalty time
    var penalty = 10;
    // Creates new element
    var ulCreate = document.createElement("ul");


## Author Links
      
* [GitHub](https://github.com/AbuyeM1)
* [GitHub](https://abuyem1.github.io/Password-Generator/)
* [LinkedIn](https://www.linkedin.com/in/abuye-mamuye-5a49921b0/)