// DOM Traversal (Penelusuran DOM)
// Penelusuran DOM adalah untuk mendapatakan sebuah elemen bedasarakan elemen yang sudah kita seleksi sebelumnya

// kenapa harus di seleksi?


// fungsi untuk menghapus kartu jika tombol x di klik

// manual (tidak menggunakan DOM Traversal)
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function() {
//     card.style.display = 'none';
// })

// DOM Traversal
const close = document.querySelectorAll('.close');
// for(let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function(e) { 
//         // close[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none';
//     })
// }

// menggunakan forEach
close.forEach(function(el){
    el.addEventListener('click', function(e){
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    })
})


// Prevent Default adalah sebuah method yang berada di parameter "e" (object), yang bertujuan untuk menghentikan aksi default yang dilakukan oleh sebuah element
