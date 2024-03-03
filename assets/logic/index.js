//page wasn't loading https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
//also did this in last course
document.addEventListener('DOMContentLoaded', function () {

    //identifies start button
    const startButton = document.querySelector('.start-button');

    const quoteButton = document.querySelector('.quote-button');

    //hide quote button until needed
    quoteButton.style.display = 'none';

    //https://www.shecodes.io/athena/11102-how-to-trigger-a-prompt-on-button-click-in-javascript#:~:text=addEventListener('click'%2C%20function,log(userInput)%3B%20%7D)%3B
    // Add an event listener to the button that listens for the click 'event'
    startButton.addEventListener('click', function () {
        // Display the prompt when the button is clicked

        const userInput = prompt('Are you happy or sad?').toLowerCase(); //to make input lowercase

        console.log(userInput);

        //hide h3 when button clicked
        document.querySelector('.h3').style.display = 'none';

        const happyDiv = document.querySelector('.happy');
        const sadDiv = document.querySelector('.sad');

        // clear the content of the emoji and quote containers if user wants another go?
        //changed to move button so need to figure this out
        // document.getElementById('emojiContainer').innerHTML = '';
        // document.getElementById('quoteContainer').innerHTML = '';

        // need to the correct dropdown based on user input
        //boolean
        //if statement code from lesson

        if (userInput === 'happy') {
            happyDiv.style.display = 'block';
            sadDiv.style.display = 'none'; // Hide sad dropdown/div
            //hide start button 
            startButton.style.display = 'none';
        } else if (userInput === 'sad') {
            sadDiv.style.display = 'block';
            happyDiv.style.display = 'none'; // Hide happy dropdown/div
            //hide start button
            startButton.style.display = 'none';

        } else {
            alert('Invalid input. Please enter "happy" or "sad".');
        }
    });

    //need array of emojis
    //array contains objects linked to dropdown options
    //need class to target with css
    let happyEmojiArray = [
        { emoji: "😊", word: "Happy", class: "emoji" },
        { emoji: "😌", word: "Peaceful", class: "emoji" },
        { emoji: "😄", word: "Funny", class: "emoji" },
        { emoji: "🥰", word: "Lovely", class: "emoji" },
    ];

    // Array for sad emotions
    let sadEmojiArray = [
        { emoji: "😴", word: "Tired", class: "emoji" },
        { emoji: "😠", word: "Upset", class: "emoji" },
        { emoji: "😢", word: "Sad", class: "emoji" },
        { emoji: "😡", word: "Angry", class: "emoji" },
    ];


    //need to use happy or sad array depending on choice

    //need a for loop
    //match user choice to array content/position
    //need functiom for displaying emoji

    function displayEmoji(userInput) {
        const emojiContainer = document.getElementById('emojiContainer');
        let emojiArray;

        // choose the emoji array based on the user input from text
        if (userInput === 'happy') {
            emojiArray = happyEmojiArray;
        } else if (userInput === 'sad') {
            emojiArray = sadEmojiArray;
        } else {
            // Handle invalid input
            emojiContainer.innerHTML = 'Invalid input';
            return;
        }

        // Get the selected value from the dropdown
        const selectedValue = document.getElementById('dropdown-' + userInput).value;

        //logs
        console.log('Selected value:', selectedValue);

        console.log('Emoji array:', emojiArray);

        // need to find the emoji object corresponding to the selected value
        //arrow function
        const selectedEmoji = emojiArray.find(emoji => emoji.word === selectedValue);

        console.log('Selected emoji:', selectedEmoji); // Log the selected emoji object

        // Check if undefined
        //error statement
        //!NOT!!
        if (!selectedEmoji) {
            console.error('Emoji not found for selected value:', selectedValue);
            return;
        }

        // display the selected emoji and word in the emoji container
        //can't target with css - want to make dynamically instead according to lesson
        // emojiContainer.innerHTML = selectedEmoji.emoji + ' ' + selectedEmoji.word;
        const emojiElement = document.createElement('div');
        emojiElement.textContent = selectedEmoji.emoji + ' ' + selectedEmoji.word;
        emojiElement.classList.add('emoji'); //  emoji class for styling css
        emojiContainer.appendChild(emojiElement);
    }

    // need to add event listener to the see my mood button inside the happy div
    document.querySelector('.happy button').addEventListener('click', function () {
        displayEmoji('happy');

        const happyDropdown = document.querySelector('.dropdown-happy');
        happyDropdown.style.display = 'none';
        document.querySelector('.happy button').style.display = 'none';
        quoteButton.style.display = 'block';
    });
    //could do in html too 

    // event listener to the button inside the sad div
    document.querySelector('.sad button').addEventListener('click', function () {
        displayEmoji('sad');

        const sadDropdown = document.querySelector('.dropdown-sad');
        sadDropdown.style.display = 'none';
        document.querySelector('.sad button').style.display = 'none';
        quoteButton.style.display = 'block';

        //need to hide buttons and dropdown on click
        //https://community.qualtrics.com/custom-code-12/show-hide-buttons-how-to-hide-a-button-when-another-button-is-clicked-22159#:~:text=You%20can%20just%20use%20the,hide()%20for%20the%20same.
        // document.querySelector('.sad button').style.display = 'none';
        document.querySelector('.happy').style.display = 'none';
        // document.querySelector('.dropdown-sad').style.display = 'none';
        // document.querySelector('.dropdown-happy').style.display = 'none';
    });
});



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

// function to display a random quote and author
function displayRandomQuote() {

    const quoteContainer = document.querySelector('.quoteContainer');
    const authorContainer = document.querySelector('.author-container');



    //(uses class)


    // uses for loop (requirement) to get random index from array of quotes
    //https://stackoverflow.com/questions/75166534/how-do-i-use-a-loop-to-pick-random-characters-from-an-array
    //
    let randomIndex;
    for (let i = 0; i < 1; i++) {
        randomIndex = Math.floor(Math.random() * inspirationalQuotes.length);
    }


    //get the random quote and its author
    //square brackets denote the array. randomIndex is the variable that gets random posision in array with for loop &math.random
    const randomQuote = inspirationalQuotes[randomIndex].quote;
    const randomAuthor = inspirationalQuotes[randomIndex].author;

    // append to quote container

    quoteContainer.textContent = randomQuote;


    // append to author container
    authorContainer.textContent = randomAuthor;
}

// event listener to the quote button
document.querySelector('.quote-button').addEventListener('click', function () {
    // hides the quote button
    const quoteButton = document.querySelector('.quote-button');
    quoteButton.style.display = 'none';

    // calls the function
    displayRandomQuote();

     // create restart button dynamically
     const restartButton = document.createElement('button');
     restartButton.classList.add('restart-button');
     restartButton.textContent = 'Try Again!';
     
     // add restart button 
     document.body.appendChild(restartButton);
 
     // event listener for restart button
     restartButton.addEventListener('click', function () {
         // reload the page to reset the state https://www.freecodecamp.org/news/refresh-the-page-in-javascript-js-reload-window-tutorial/#:~:text=reload(),to%20the%20browser%27s%20Refresh%20button.
         location.reload();
     });
    });

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
// + Use a loop or a while loop to reduce repetition YES
// + Use functions to make code reusable YES
// + Use console.log and alert to display messages YES
// + Use some HTML and CSS to create a basic website. Use at least 4 different HTML tags YES
// and style at least 2 of them. This does not need to look good! It is just a demo of what is 
// covered. YES
// + Get input from the user on a web page YES
// + Make changes to the HTML or CSS  using JavaScript YES
// + Use an event to trigger a change to a web page YES