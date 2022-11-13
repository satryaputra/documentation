tanya = true;

while(tanya){
    // menangkap pilihan user
    var user = prompt(' pilih: gajah, orang, atau semut');

    // mengangkap pilihan komputer
    // membangkitkan pilihan random
    var comp = Math.random();

    if(comp < 1/3){
        comp = 'gajah';
    } else if(comp >= 1/3 && comp < 2/3){
        comp = 'orang';
    } else {
        comp = 'semut';
    }

    // menentukan rules 
    var hasil = ' ';

    if(user == comp){
        hasil = 'SERI!';
    } else if (user == 'gajah'){
        hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    } else if(user == 'orang'){
        if(comp == 'semut'){
            hasil = 'MENANG!';
        } else {
            hasil = 'KALAH!';
        }
    } else if(user == 'semut'){
        hasil = (comp == 'gajah') ? 'MENANG!' : 'KALAH!';
    } else {
        hasil = 'FORMAT SALAH BLOG!'
    }
    // tampilkan hasil
    alert('Kamu memilih ' + user + ', komputer memilih ' + comp + ' maka anda ' + hasil);

    tanya = confirm('Main lagi?');
}


