// DOM Selection

// document.getElementById() -> element
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = 'lightgrey';
judul.innerHTML = 'Putra Ganteng';


// document.getElementsByTagName() -> HTMLCollection
const p = document.getElementsByTagName('p'); // -> array
for( let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = 'lightblue'
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';


// document.getElementsByClassName() -> HTMLCollection
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'paragraf 1 - ini diubah javascript';


// document.querySelector() -> element
const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';


// document.querySelector() -> HTMLCollection
const pAll = document.querySelectorAll('p');
for( let i = 0; i < pAll.length; i++){
    pAll[i].style.fontWeight = '800';
}


// mengubah node root
const sectionB = document.getElementById('b');
const pB = sectionB.querySelector('p');
pB.style.fontStyle = 'italic';
