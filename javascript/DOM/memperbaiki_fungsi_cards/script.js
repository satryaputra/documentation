// memperbaiki fungsi yang telah kita buat dengan memanfaatkan method event bubbling

const container = document.querySelector('.container');

container.addEventListener('click', function(e){
    if( e.target.className == 'close' ){
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    };
});