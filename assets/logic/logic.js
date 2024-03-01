//identifies start button
const startButton = document.querySelector('.start-button');

//https://www.shecodes.io/athena/11102-how-to-trigger-a-prompt-on-button-click-in-javascript#:~:text=addEventListener('click'%2C%20function,log(userInput)%3B%20%7D)%3B
// Add an event listener to the button that listens for the click 'event'
startButton.addEventListener('click', function () {
    // Display the prompt when the button is clicked

    const userInput = prompt('Are you happy or sad?').toLowerCase(); //to make input lowercase
    //hide after clicked
    startButton.style.display = 'none';
    console.log(userInput);

    const happyDiv = document.querySelector('.happy');
    const sadDiv = document.querySelector('.sad');

// Clear the content of the emoji and quote containers if user wants another go
//changed to move button so need to figure this out
// document.getElementById('emojiContainer').innerHTML = '';
// document.getElementById('quoteContainer').innerHTML = '';

// need to the correct dropdown based on user input
//boolean
//if statement

//need array of emojis

//need to use happy or sad array depending on choice

//need a for loop
//match user choice to array content/position
//need event listeners for see my mood button

//





// Create a web app that takes input from the user and updates the web page based on the 
// input. The HTML and CSS should be simple but present. The primary focus is on JavaScript. 
// Remember to come up with a unique creative problem or scenario!
// You will be marked on:
// A. Knowledge and demonstrated use of Javascript (13 marks)
// B. Knowledge and demonstrated use of HTML and CSS (10 marks)
// C. Code readability, layout, and use of best practices (4 marks)
// D. Creativity (5 marks)
// You should:
// + Use boolean values and if..else statements to branch logic of your program  YES
// + Use a data structure like an array to store values YES
// + Use a loop or a while loop to reduce repetition
// + Use functions to make code reusable
// + Use console.log and alert to display messages YES
// + Use some HTML and CSS to create a basic website. Use at least 4 different HTML tags YES
// and style at least 2 of them. This does not need to look good! It is just a demo of what is 
// covered. YES
// + Get input from the user on a web page YES
// + Make changes to the HTML or CSS  using JavaScript
// + Use an event to trigger a change to a web page