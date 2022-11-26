// DOM Traversal (Penelusuran DOM)
// Penelusuran DOM adalah untuk mendapatakan sebuah elemen bedasarakan elemen yang sudah kita seleksi sebelumnya

// kenapa harus di seleksi?


// fungsi untuk menghapus kartu jika tombol x di klik

// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function() {
//     card.style.display = 'none';
// })

const close = document.querySelectorAll('.close');
// for(let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function(e) { 
//         // close[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none';
//     })
// }

close.forEach(function(el){
    el.addEventListener('click', function(e){
        e.target.parentElement.style.display = 'none';
    })
})
