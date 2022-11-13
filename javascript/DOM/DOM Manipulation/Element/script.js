
// mengubah isi elemen
const judul = document.getElementById('judul');
judul.innerHTML = '<marquee>Putra Ganteng</marquee>'


// mengubah style dari elemen 
const h1 = document.getElementsByTagName('h1')[0];
h1.style.color = 'darkblue';
h1.style.fontSize = '50px';
h1.style.fontStyle = 'italic';


// mengelola atribut
// menambahkan atribut
const p1 = document.querySelector('section#a p');
p1.setAttribute('name', 'pendahuluan');
// mengambil atau menampilkan atribut dari elemen
const a = document.querySelector('a');
const link = a.getAttribute('href');
console.log(link)
// menghapus atribut
const p3 = document.getElementsByClassName('p3')[0];
p3.removeAttribute('name');


// mengelola class
// menambahkan properti pada atribut class
const p2 = document.getElementsByClassName('p2')[0];
p2.classList.add('mockup');
p2.classList.add('hijau');
// menghapus properti pada atribut class
p2.classList.remove('hijau');

// menambahkan atau menghapus prpoerti pada atribut kelas
p2.classList.toggle('biru-muda') // menambahkan (karena di cek belum ada yang sama pada properti class)
p2.classList.toggle('biru-muda') // menghapus (karena di cek sudah ada propertinya di dalam class)
p2.classList.toggle('biru-muda') // menambahkan lagi (karena di cek belum ada yang sama pada properti class)

// melihat properti pada kelas
const p4 = document.querySelector('section#b p');
console.log(p4.classList.item(4));
// untuk mengetahui apakah properti sudah ada atau belu pada atribut class
console.log(p4.classList.contains('dua'));
console.log(p4.classList.contains('enam'));

// mengganti properti pada atribut class 
p4.classList.replace('satu', 'setunggal');
