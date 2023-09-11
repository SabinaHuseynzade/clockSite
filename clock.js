setInterval(timer, 1000);

function timer() {
    let t = new Date();
    let timeForAll = `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`;
    let allElem = document.querySelectorAll('.time');

    allElem.forEach(function(allElem) {
        allElem.innerHTML = timeForAll;
    });
}


setInterval(timerTwo, 1000);

function timerTwo() {
    let t = new Date();
    let timeForAll = `${t.getHours()}:${t.getMinutes()}`;
    let allElem = document.querySelectorAll('.timeTwo');

    allElem.forEach(function(allElem) {
        allElem.innerHTML = timeForAll;
    });
}

const week = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat']

setInterval(weekDay, 1000);

function weekDay() {
    let t = new Date();
    let dayOf = `${t.getDay()}`;
    let allElem = document.querySelectorAll('.day');

    allElem.forEach(function(allElem) {
        allElem.innerHTML = week[dayOf];
    });
}

const buyBut = document.querySelectorAll('.buy');

buyBut.forEach(function(button) {
    button.addEventListener('click', function() {
        
        button.classList.toggle('clicked');


        if (button.classList.contains('clicked')) {
            button.textContent = 'Bought';
        } else {
            button.textContent = 'Buy';
        }
    });
});

