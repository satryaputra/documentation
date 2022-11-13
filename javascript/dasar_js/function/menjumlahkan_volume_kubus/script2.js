var lanjut = true;

while(lanjut){
    // mengambil ukuran sisi kubus
    var kubus1 = prompt('Masukan ukuran sisi kubus yang pertama(cm): ');
    var kubus2 = prompt('Masukan ukuran sisi kubus yang kedua(cm): ');

    // volume masing-masing
    function volumeKubus1(hasil){
        hasil = kubus1**3;
        return hasil;
    }

    function volumeKubus2(hasil){
        hasil = kubus2**3;
        return hasil;
    }

    // menjumlah hasil volume
    jumlahVolume = volumeKubus1() + volumeKubus2();

    // tampilkan hasil 
    alert('Jumlah volumenya adalah ' + jumlahVolume + 'cm kubik');

    lanjut = confirm('mau hitung lagi?');
    if (lanjut == false){
        alert('Terimakasih');
    } else {
        lanjut = true;
    }
    
}