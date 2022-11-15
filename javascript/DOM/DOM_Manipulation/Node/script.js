// DOM Manipulation

// menambahkan paragraf baru
// 1. membuat element baru
const parBaru = document.createElement('p');
// 2. membuat teks baru untuk di dalam element
const teksDalamPar = document.createTextNode('Paragraf Baru');
// menggabungkan langkah 1 dan 2
parBaru.appendChild(teksDalamPar);

// menyimpan parBaru di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(parBaru)



// menambahkan list baru setelah item 1
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
liBaru.append(teksLiBaru);

const ul = document.querySelector('section#b ul'); // parent
const li2 = ul.querySelector('li:nth-child(2)');   // element setelahnya

ul.insertBefore(liBaru, li2);




// menghapus element
// tangkap parentnya dan element yang mau dihapus
const link = sectionA.querySelector('a');
// hapus
sectionA.removeChild(link);




// mengganti element
const sectionB = document.querySelector('section#b');
const parEmpat = sectionB.querySelector('p');


const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru');
h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, parEmpat);

const baru = [parBaru,liBaru,h2Baru];
for(let i = 0; i < baru.length;i++){
    baru[i].style.backgroundColor = 'lightgreen'
};