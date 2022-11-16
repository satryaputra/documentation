// 1
const tombolUbahWarna = document.getElementById('tombolUbahWarna');
tombolUbahWarna.onclick = function() {
    // document.body.style.backgroundColor = 'lightblue';
    // document.body.setAttribute('class', 'biru-muda');
    document.body.classList.toggle('biru-muda')
}


// 2
const tombolRandomWarna = document.createElement('button');
const teksTombolRandomWarna = document.createTextNode('Acak Warna!');
tombolRandomWarna.appendChild(teksTombolRandomWarna);
tombolRandomWarna.setAttribute('type', 'button');

tombolUbahWarna.after(tombolRandomWarna);

tombolRandomWarna.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
})


// 3
const sliderMerah = document.querySelector('input[name=sliderMerah]');
const sliderHijau = document.querySelector('input[name=sliderHijau]');
const sliderBiru = document.querySelector('input[name=sliderBiru]');

sliderMerah.addEventListener('input', function() {
    const r = sliderMerah.value;
    const g = sliderHijau.value;
    const b = sliderBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
})

sliderHijau.addEventListener('input', function() {
    const r = sliderMerah.value;
    const g = sliderHijau.value;
    const b = sliderBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
})

sliderBiru.addEventListener('input', function() {
    const r = sliderMerah.value;
    const g = sliderHijau.value;
    const b = sliderBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
})




// 4
document.body.addEventListener('mouseover', function(event){
    //posisi mouse
    // clientX
    // clientY

    // ukuran browser
    // window.innerWidth

    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);

    document.body.style.backgroundColor = 'rgb('+xPos+','+yPos+',100)';

})