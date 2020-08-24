const hamburger = document.querySelector('#icon-img');

let state = false;
hamburger.addEventListener('click', function(){
    const navLinks = document.querySelector('.nav-links');
    if(!state){
        navLinks.style.display = 'block';
        this.src = 'images/icon-close.svg';
        state = true;
    }
    else{
        navLinks.style.display = 'none';
        this.src = 'images/icon-hamburger.svg';
        state = false;
    }
     
});