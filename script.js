// Website elements
let timeString = document.getElementById('time');
let toolsButton = document.getElementById('toolsButton');
let toolsContainer = document.getElementById('toolsContainer');
let toolsSection = document.getElementById('toolsSection');
let timeSection = document.getElementById('timeSection');

let fontQuestrial = document.getElementById('fontQuestrial');
let fontMontserrat = document.getElementById('fontMontserrat');
let fontSystemUI = document.getElementById('fontSystemUI');

let format1 = document.getElementById('format1');
let format2 = document.getElementById('format2');
let format3 = document.getElementById('format3');

let size1 = document.getElementById('size1');
let size2 = document.getElementById('size2');
let size3 = document.getElementById('size3');

let darkOn = document.getElementById('darkOn');
let darkOff = document.getElementById('darkOff');

let langEn = document.getElementById('langEn');
let langIt = document.getElementById('langIt');

let title1 = document.getElementById('title1');
let title2 = document.getElementById('title2');
let title3 = document.getElementById('title3');
let title4 = document.getElementById('title4');
let title5 = document.getElementById('title5');
let title6 = document.getElementById('title6');
let title7 = document.getElementById('title7');

// Variables
let darkMode = false;
let timeFormat = 1;
let lang = 'en';

// Changes the time every second
const changeTime = () => {
    let today = new Date();

    if (timeFormat === 1) {
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        timeString.innerHTML = time;
    } else if (timeFormat === 2) {
        let time = today.getHours() + ":" + today.getMinutes();
        timeString.innerHTML = time;
    } else if (timeFormat === 3) {
        let time = today.getHours() + "h " + today.getMinutes() + "m " + today.getSeconds() + "s ";
        timeString.innerHTML = time;
    } else {
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        timeString.innerHTML = time;
    }

    setTimeout(changeTime, 1000);
}
changeTime();

// Changes the format of the time
format1.addEventListener('click', function() {
    timeFormat = 1;
    format1.classList.add('active');
    format2.classList.remove('active');
    format3.classList.remove('active');
})

format2.addEventListener('click', function() {
    timeFormat = 2;
    format1.classList.remove('active');
    format2.classList.add('active');
    format3.classList.remove('active');
})

format3.addEventListener('click', function() {
    timeFormat = 3;
    format1.classList.remove('active');
    format2.classList.remove('active');
    format3.classList.add('active');
})

// Displays or removes the tools section
const triggerTools = () => {
    if (toolsContainer.style.display == 'none') {
        toolsContainer.style.display = 'flex';
        if (lang == 'en') {
            toolsButton.innerHTML = 'Hide Tools';
        } else {
            toolsButton.innerHTML = 'Nascondi strumenti';
        }
    } else {
        toolsContainer.style.display = 'none';
        if (lang == 'en') {
            toolsButton.innerHTML = 'Show Tools';
        } else {
            toolsButton.innerHTML = 'Mostra strumenti';
        }
    }
}
toolsButton.addEventListener('click', triggerTools);

// Changes the font of the time
fontQuestrial.addEventListener('click', function() {
    timeString.style.fontFamily = 'Questrial';
    fontQuestrial.classList.add('active');
    fontMontserrat.classList.remove('active');
    fontSystemUI.classList.remove('active');
});

fontMontserrat.addEventListener('click', function() {
    timeString.style.fontFamily = 'Montserrat';
    fontQuestrial.classList.remove('active');
    fontMontserrat.classList.add('active');
    fontSystemUI.classList.remove('active');
});

fontSystemUI.addEventListener('click', function() {
    timeString.style.fontFamily = 'system-ui';
    fontQuestrial.classList.remove('active');
    fontMontserrat.classList.remove('active');
    fontSystemUI.classList.add('active');
});


// Changes the size of the time
size1.addEventListener('click', function() {
    timeString.style.fontSize = '7rem';
    size1.classList.add('active');
    size2.classList.remove('active');
    size3.classList.remove('active');
});

size2.addEventListener('click', function() {
    timeString.style.fontSize = '10rem';
    size1.classList.remove('active');
    size2.classList.add('active');
    size3.classList.remove('active');
});

size3.addEventListener('click', function() {
    timeString.style.fontSize = '15rem';
    size1.classList.remove('active');
    size2.classList.remove('active');
    size3.classList.add('active');
});

// Checks and toggles dark mode
const checkDarkMode = () => {
    let status = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if(status) {
        darkOn.classList.add('active');
        darkOff.classList.remove('active');
    } else {
        darkOn.classList.remove('active');
        darkOff.classList.add('active');
    }

    setTimeout(checkDarkMode, 1000);
}
checkDarkMode();

// Changes the language
langEn.addEventListener('click', function() {
    lang = 'en';
    langEn.classList.add('active');
    langIt.classList.remove('active');

    title1.innerHTML = 'Time Format';
    title2.innerHTML = 'Time Font';
    title3.innerHTML = 'Time Size';
    title4.innerHTML = 'Dark Mode';
    title5.innerHTML = 'Language';
    title6.innerHTML = 'Made with ❤️ by Alessandro Sherhey';
    title7.innerHTML = 'System UI';
    toolsButton.innerHTML = 'Hide Tools';
});

langIt.addEventListener('click', function() {
    lang = 'it';
    langEn.classList.remove('active');
    langIt.classList.add('active');

    title1.innerHTML = 'Formato';
    title2.innerHTML = 'Font';
    title3.innerHTML = 'Dimensione';
    title4.innerHTML = 'Mod. scura';
    title5.innerHTML = 'Lingua';
    title6.innerHTML = 'Fatto con ❤️ da Alessandro Sherhey';
    title7.innerHTML = 'UI sistema';
    toolsButton.innerHTML = 'Nascondi strumenti';
})

// Hides the show tools button when spacebar is pressed
document.querySelector('body').addEventListener("keydown", (event) => {
    if(event.key == ' ') {
        console.log('Spacebar pressed!');
        if (toolsButton.style.display == 'block') {
            toolsButton.style.display = 'none';
            toolsContainer.style.display = 'none';
            toolsButton.innerHTML = 'Show Tools';
            timeSection.style.height = '100vh';
            toolsSection.style.height = '0';
        } else {
            toolsButton.style.display = 'block';
            toolsContainer.style.display = 'none';
            timeSection.style.height = '80vh';
            toolsSection.style.height = '20vh';
        }
    }
})