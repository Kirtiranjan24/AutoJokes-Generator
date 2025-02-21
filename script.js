const jokeDisplay = document.getElementById('jokeDisplay');
const flirtDisplay = document.getElementById('flirtDisplay');
const getJokeBtn = document.getElementById('getJokeBtn');
const getFlirtBtn = document.getElementById('getFlirtBtn');
const copyBtn = document.getElementById('copyBtn');
const toastNotification = document.getElementById('toastNotification');
const themeToggleButton = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

themeToggleButton.addEventListener('click', function()  {
    document.body.classList.toggle('dark-theme');
    // bodyElement.classList.toggle('dark-mode');
    // bodyElement.classList.toggle('light-mode');
    
    // Change icon for theme toggle
    // const icon = themeToggleButton.querySelector('i');
    if (document.body.classList.contains('dark-theme')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});


document.getElementById('getJokeBtn').addEventListener('click', () => {
    const jokeDisplay = document.getElementById('jokeDisplay');
    jokeDisplay.textContent = 'Here is a fun joke!';
});

document.getElementById('getFlirtBtn').addEventListener('click', () => {
    const flirtDisplay = document.getElementById('flirtDisplay');
    flirtDisplay.textContent = 'Here is a charming flirt line!';
});


let currentContent = '';

function fetchJoke() {
    const category = document.querySelector('input[name="category"]:checked').value;
    let url = '';

    if (category === 'random') {
        url = 'https://api.chucknorris.io/jokes/random';
    } else if (category === 'dad') {
        url = 'https://icanhazdadjoke.com/';
    } else if (category === 'programming') {
        url = 'https://official-joke-api.appspot.com/random_joke';
    } else {
        url = 'https://api.chucknorris.io/jokes/random'; 
    }

    jokeDisplay.textContent = 'Loading...';
    copyBtn.classList.add('d-none');

    fetch(url, { headers: { 'Accept': 'application/json' } })
        .then(response => response.json())
        .then(data => {
            if (category === 'programming') {
                jokeDisplay.textContent = `${data.setup} - ${data.punchline}`;
                currentContent = `${data.setup} - ${data.punchline}`;
            } else {
                jokeDisplay.textContent = data.joke || data.value;
                currentContent = data.joke || data.value;
            }
            copyBtn.classList.remove('d-none');
        })
        .catch(error => {
            jokeDisplay.textContent = 'Oops! Something went wrong.';
            copyBtn.classList.add('d-none');
        });
}

function fetchFlirtingLine() {
    flirtDisplay.textContent = 'Loading...';
    copyBtn.classList.add('d-none');

    const flirtingLines = [
        "Are you a magician? Because whenever I look at you, everyone else disappears!",
        "Do you have a map? I just keep getting lost in your eyes.",
        "Is your name Google? Because you've got everything I've been searching for.",
        "Are you a camera? Because every time I look at you, I smile.",
        "Do you believe in love at first sight, or should I walk by again?",
        "I must be a snowflake, because I've fallen for you.",
        "Are you a bank loan? Because you've got my interest.",
        "If you were a vegetable, you'd be a cute-cumber!",
        "Are you a parking ticket? Because you've got 'fine' written all over you.",
        "I'm not a photographer, but I can picture us together.",
       
            "Are you a magician? Because whenever I look at you, everyone else disappears!",
            "Do you have a map? I just keep getting lost in your eyes.",
            "Is your name Google? Because you've got everything I've been searching for.",
            "Are you a camera? Because every time I look at you, I smile.",
            "Do you believe in love at first sight, or should I walk by again?",
            "I must be a snowflake, because I've fallen for you.",
            "Are you a bank loan? Because you've got my interest.",
            "If you were a vegetable, you'd be a cute-cumber!",
            "Are you a parking ticket? Because you've got 'fine' written all over you.",
            "I'm not a photographer, but I can picture us together.",
            "Can I follow you home? Because my parents always told me to follow my dreams.",
            "Are you French? Because Eiffel for you.",
            "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
            "Is your dad a boxer? Because you're a knockout!",
            "Are you from Tennessee? Because you're the only ten I see.",
            "If looks could kill, you'd be a weapon of mass destruction.",
            "Do you have a pencil? Because I want to erase your past and write our future.",
            "Is your name Chapstick? Because you're da balm!",
            "Are you a Wi-Fi signal? Because I'm feeling a connection.",
            "Are we at the airport? Because my heart is taking off whenever you're around.",
            "If you were a fruit, you'd be a fineapple.",
            "Is your name Winter? Because you'll be coming soon.",
            "Are you a time traveler? Because I see you in my future.",
            "You must be tired because you've been running through my mind all day.",
            "Do you like Star Wars? Because Yoda one for me.",
            "Are you a 90-degree angle? Because you're looking right.",
            "Is your name Starbucks? Because I like you a latte.",
            "If you were words on a page, you’d be fine print.",
            "Do you believe in fate? Because I think we were meant to meet.",
            "Do you have a sunburn, or are you always this hot?",
            "Are you Australian? Because when I look at you, I feel like I’m down under.",
            "Is your name Dunkin'? Because you keep me running.",
            "If kisses were snowflakes, I’d send you a blizzard.",
            "Is it hot in here, or is it just you?",
            "Do you have a mirror in your pocket? Because I can see myself in your pants.",
            "If you were a Transformer, you’d be Optimus Fine.",
            "Are you the ocean? Because I'm lost at sea.",
            "Can I tie your shoe? Because I can’t have you fall for anyone else.",
            "You must be a magician, because every time I look at you, everyone else disappears.",
            "I think you dropped something: my jaw.",
            "Are you an angel? Because heaven is missing one.",
            "Are you a light bulb? Because you brighten up my day.",
            "Did it hurt when you fell from heaven?",
            "If you were a steak, you’d be well done.",
            "Are you a campfire? Because you're hot and I want s'more.",
            "Can I borrow a kiss? I promise I'll give it back.",
            "Is your name Google? Because you have everything I’ve been searching for.",
            "Are you made of copper and tellurium? Because you’re Cu-Te.",
            "Are you a keyboard? Because you're just my type.",
            "Is your dad a baker? Because you’ve got a nice set of buns.",
            "Are you a parking ticket? Because you’ve got ‘fine’ written all over you.",
            "If you were a vegetable, you’d be a cutecumber.",
            "Are you a magician? Because whenever I look at you, everyone else disappears.",
            "Do you have a quarter? Because I want to call my mom and tell her I met the one.",
            "Is your name Daisy? Because I have a sudden urge to plant you right here.",
            "Do you have a name? Or can I call you mine?",
            "Are you lost? Because heaven is a long way from here.",
            "Are you from Italy? Because you're a fine-apple.",
            "Are you an alien? Because you've abducted my heart.",
            "If beauty were time, you'd be an eternity.",
            "Do you have a twin? Because I can't believe someone like you exists.",
            "Are you a black hole? Because you're irresistibly attractive.",
            "Are you Netflix? Because I could watch you for hours.",
            "Is it okay if I follow you home? Cause my parents always told me to follow my dreams.",
            "I must be a snowflake, because I’ve fallen for you.",
            "Is your name Ariel? Because we mermaid for each other.",
            "If you were a vegetable, you'd be a 'cute-cumber.'",
            "Do you have a compass? Because I keep getting lost in your eyes.",
            "Are you a campfire? Because you're hot and I want s'more.",
            "Did you invent the airplane? Because you seem Wright for me.",
            "Is your name Wi-Fi? Because I'm feeling a connection.",
            "Are you a beaver? Because daaaaam.",
            "Do you have a map? I keep getting lost in your eyes.",
            "Are you an angel? Because I feel like I'm in heaven when I'm around you.",
            "Are you made of beryllium, gold, and titanium? Because you’re Be-Au-Ti-ful.",
            "You must be a magician, because every time I look at you, everyone else disappears.",
            "Are you a campfire? Because you're hot and I want s'more.",
            "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
            "You must be exhausted, because you've been running through my mind all day.",
            "Is your name Google? Because you have everything I’ve been searching for.",
            "Are you a dictionary? Because you add meaning to my life.",
            "Is your name Chapstick? Because you're da balm!",
            "Are you a cat? Because I'm feline a connection between us.",
            "Can I follow you home? 'Cause my parents always told me to follow my dreams.",
            "Is your name Wi-Fi? Because I'm feeling a connection.",
            "Do you like raisins? How about a date?",
            "Are you made of copper and tellurium? Because you're Cu-Te.",
            "Are you Australian? Because when I look at you, I feel like I’m down under.",
            "Are you a banana? Because I find you a-peeling.",
            "If you were a fruit, you'd be a fineapple.",
            "Are you a time traveler? Because I see you in my future.",
            "Are you a campfire? Because you're hot and I want s'more.",
            "Is your name Dunkin'? Because you keep me running.",
            "You must be tired because you’ve been running through my mind all day.",
            "Can I follow you home? ‘Cause my parents always told me to follow my dreams.",
            "Are you French? Because Eiffel for you.",
            "If you were words on a page, you’d be fine print.",
            "Do you have a sunburn, or are you always this hot?",
            "Are you Australian? Because when I look at you, I feel like I’m down under.",
            "Is your name Dunkin'? Because you keep me running.",
            "If kisses were snowflakes, I’d send you a blizzard.",
            "Is it hot in here, or is it just you?",
            "Do you have a mirror in your pocket? Because I can see myself in your pants.",
            "Are you a 90-degree angle? Because you’re looking right.",
            "Can I tie your shoe? Because I can’t have you fall for anyone else.",
            "You must be tired because you’ve been running through my mind all day.",
            "I think you dropped something: my jaw."
        ];
        
   

    const randomLine = flirtingLines[Math.floor(Math.random() * flirtingLines.length)];
    flirtDisplay.textContent = randomLine;
    currentContent = randomLine;
    copyBtn.classList.remove('d-none');
}

function copyToClipboard() {
    navigator.clipboard.writeText(currentContent).then(() => {
        showToast('Copied to clipboard!');
    });
}

function showToast(message) {
    toastNotification.textContent = message;
    toastNotification.style.opacity = '1';
    setTimeout(() => {
        toastNotification.style.opacity = '0';
    }, 3000);
}

getJokeBtn.addEventListener('click', fetchJoke);
getFlirtBtn.addEventListener('click', fetchFlirtingLine);
copyBtn.addEventListener('click', copyToClipboard);
