const container = document.querySelector('.container');
const screen = document.querySelector('.screen');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e) {
    // cek yang di klik adalah thumb
    if( e.target.className = 'thumb') {
        screen.src = e.target.src;
        screen.classList.add('fade');
        setTimeout(function(){
            screen.classList.remove('fade');
        },500);

        thumbs.forEach(function(thumb){
            thumb.className = 'thumb';
        });

        e.target.classList.add('active');
    }
})