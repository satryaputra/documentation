// Events (kejadian) != Even (genap)

// memubuat paragraf 3 jika di klik berubah warna pada background

// menggunakan Inline HTML (tidak disarankan)
const p3 = document.querySelector('.p3');

function ubahWarnaP3() {
    p3.style.backgroundColor = 'lightblue';
}
// lalu tambahkan atribut onClick pada tag yang ingin di ubah warna di HTML dengan isi function yang telah kita buat

// menggunakan method

const p2 = document.querySelector('.p2');
function ubahWarnaP2() {
    p2.style.backgroundColor = 'lightgreen';
}
p2.onclick = ubahWarnaP2;