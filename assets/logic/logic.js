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
//if statement code from lesson

if (userInput === 'happy') {
    happyDiv.style.display = 'block';
    sadDiv.style.display = 'none'; // Hide sad dropdown/div
} else if (userInput === 'sad') {
    sadDiv.style.display = 'block';
    happyDiv.style.display = 'none'; // Hide happy dropdown/div
} else {
    alert('Invalid input. Please enter "happy" or "sad".');
}
});

//need array of emojis
//array contains objects linked to dropdown options
let happyEmojiArray = [
    { emoji: "😊", word: "Happy" },
    { emoji: "😌", word: "Peaceful" },
    { emoji: "😄", word: "Funny" },
    { emoji: "🥰", word: "Lovely" },
];

// Array for sad emotions
let sadEmojiArray = [
    { emoji: "😴", word: "Tired" },
    { emoji: "😠", word: "Upset" },
    { emoji: "😢", word: "Sad" },
    { emoji: "😡", word: "Angry" },
];


//need to use happy or sad array depending on choice

//need a for loop
//match user choice to array content/position
//need event listeners for see my mood button

//loop through quote array instead
//https://www.southernliving.com/culture/sad-quotes

const inspirationalQuotes = [
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "Keep your face always toward the sunshine - and shadows will fall behind you.",
        author: "Walt Whitman"
    },
    {
        quote: "In the middle of difficulty lies opportunity.",
        author: "Albert Einstein"
    },
    {
        quote: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S. Lewis"
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "The best way to predict the future is to create it.",
        author: "Abraham Lincoln"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "Life is 10% what happens to us and 90% how we react to it.",
        author: "Charles R. Swindoll"
    },
    {
        quote: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        quote: "Your time is limited, don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        quote: "Success is not the key to happiness. Happiness is the key to success.",
        author: "Albert Schweitzer"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky"
    },
    {
        quote: "Happiness is not by chance, but by choice.",
        author: "Jim Rohn"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quote: "Change your thoughts and you change your world.",
        author: "Norman Vincent Peale"
    },
    {
        quote: "Don't cry because it's over, smile because it happened.",
        author: "Dr. Seuss"
    },
    {
        quote: "You must be the change you wish to see in the world.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "Happiness is not something ready made. It comes from your own actions.",
        author: "Dalai Lama"
    },
    {
        quote: "The only way to achieve the impossible is to believe it is possible.",
        author: "Charles Kingsleigh"
    },
    {
        quote: "Opportunities don't happen, you create them.",
        author: "Chris Grosser"
    },
    {
        quote: "The purpose of our lives is to be happy.",
        author: "Dalai Lama"
    },
    {
        quote: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
];

console.log(inspirationalQuotes);







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