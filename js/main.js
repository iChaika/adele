let menuBtn = document.querySelector('.menu-btn');
let menuBlock = document.querySelector('.main-menu');

menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('active-menu');
    menuBlock.classList.toggle('menu-open');
    document.body.classList.toggle('no-scroll');

    let escToggle = function(e) {
        if(e.keyCode == 27) {
            menuBlock.classList.toggle('menu-open');
            menuBtn.classList.toggle('active-menu');
            document.body.classList.toggle('no-scroll');
            document.removeEventListener('keydown', escToggle, false);
        }
    }

    document.addEventListener('keydown', escToggle, false);   
});