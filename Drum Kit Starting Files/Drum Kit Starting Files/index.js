const numOfKeys = document.querySelectorAll('.drum').length;
//const audioElement = new Audio('sounds/tom-1.mp3');
for (let i=0; i<numOfKeys; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', () => {
    const element = this ?? {};
        element.color = 'white';

        //this.style.colo
        //console.log(this.innerHTML);
        //audioElement.play();
    });
}
