const numOfKeys = document.querySelectorAll('.drum').length;
for (let i=0; i<numOfKeys; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', () => {
        const pianoKey = this.innerHTML
        switch (pianoKey) {
            case 'w':
                const tim1 = new Audio('sounds/tom-1.mp3');
                tim1.play();
                break;
            case 'a':
                const tim2 = new Audio('sounds/tom-2.mp3');
                tim2.play();
                break;
            case 's':
                const tim3 = new Audio('sounds/tom-3.mp3');
                tim3.play();
                break;
            case 'd':
                const tim4 = new Audio('sounds/tom-4.mp3');
                tim4.play();
                break;
            case 'j':
                const snare = new Audio('sounds/snare.mp3');
                snare.play();
                break;
            case 'k':
                const kick = new Audio('sounds/kick.mp3');
                kick.play();
                break;
            case 'l':
                const crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;
        
            default:
                alert("Couldn't play sound for whatever reason");
                break;
        }
        //this.style.colo
        //console.log(this.innerHTML);
        //audioElement.play();
    });
}
