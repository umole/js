function playDrum(key) {
    switch (key) {
        case 'w':
            const tim1 = new Audio('sounds/tom-1.mp3');
            tim1.play();
            buttonAnimation(key)
            break;
        case 'a':
            const tim2 = new Audio('sounds/tom-2.mp3');
            tim2.play();
            buttonAnimation(key)
            break;
        case 's':
            const tim3 = new Audio('sounds/tom-3.mp3');
            tim3.play();
            buttonAnimation(key)
            break;
        case 'd':
            const tim4 = new Audio('sounds/tom-4.mp3');
            tim4.play();
            buttonAnimation(key)
            break;
        case 'j':
            const snare = new Audio('sounds/snare.mp3');
            snare.play();
            buttonAnimation(key)
            break;
        case 'k':
            const kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            buttonAnimation(key)
            break;
        case 'l':
            const crash = new Audio('sounds/crash.mp3');
            crash.play();
            buttonAnimation(key)
            break;
    
        default:
            alert("Couldn't play sound for whatever reason");
            break;
    }
}

function buttonAnimation(currentKey) {
    const drumKey = document.querySelector('.' + currentKey);
    drumKey.classList.add('pressed');
    setTimeout( () => {
        drumKey.classList.remove('pressed'); 
   }, 150);
}

const numOfKeys = document.querySelectorAll('.drum').length;
for (let i=0; i<numOfKeys; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', () => {
        const pianoKey = event.target.innerHTML;
        playDrum(pianoKey);
        //this.style.colo
        //console.log(this.innerHTML);
        //audioElement.play();
    });
    
}
document.addEventListener('keydown', (event) => {
    console.log(event);
    const keyPressed = event.key;
    playDrum(keyPressed);
})

