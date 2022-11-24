function getPilihanComputer() {
    const comp = Math.random();
    if(comp < 1/3) return 'gajah';
    if(comp >= 1/3 && comp < 2/3) return 'orang';
    return 'semut';
}

function getHasil(comp, player){
    if(player == comp) return 'SERI!';
    if (player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    if(player == 'orang') return (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    if(player == 'semut') return (comp == 'gajah') ? 'MENANG!' : 'KALAH!';
}

const pGajah = document.querySelector('.gajah');
pGajah.addEventListener('click', function() {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pGajah.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    const imgComp = document.querySelector('.img-komputer');
    imgComp.setAttribute('src', 'img/' + pilihanComputer + '.png');
    
    const info = document.querySelector('.info');
    info.innerHTML = hasil;
});

const pOrang = document.querySelector('.orang');
pOrang.addEventListener('click', function() {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pOrang.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    const imgComp = document.querySelector('.img-komputer');
    imgComp.setAttribute('src', 'img/' + pilihanComputer + '.png');
    
    const info = document.querySelector('.info');
    info.innerHTML = hasil;
});

const pSemut = document.querySelector('.semut');
pSemut.addEventListener('click', function() {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pSemut.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    const imgComp = document.querySelector('.img-komputer');
    imgComp.setAttribute('src', 'img/' + pilihanComputer + '.png');
    
    const info = document.querySelector('.info');
    info.innerHTML = hasil;
});