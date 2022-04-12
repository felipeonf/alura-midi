function playSound(idElementSound) {
    element = document.querySelector(idElementSound);
    if (element !=  null && element.localName === 'audio') {
        element.play();
    }
    else{
        alert('Element or selector not found or invalid!')
    };

};

const keyboardList = document.querySelectorAll('.tecla');

for (let index = 0; index < keyboardList.length; index++) {

    const keyboard = keyboardList[index];
    const instrument = keyboard.classList[1];
    const idAudio = `#som_${instrument}`; // template string

    keyboardList[index].onclick = function () {
        playSound(idAudio);
    };
    keyboard.onkeydown = function (event) {
        if (event.code === 'Space' || event.code === 'Enter') {
            keyboard.classList.add('ativa');
        };
    };

    keyboard.onkeyup = function () {
        keyboard.classList.remove('ativa');
    };
};
