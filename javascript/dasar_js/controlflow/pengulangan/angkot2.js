var jumlahAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

// angkot beroperasi
while(noAngkot <= angkotBeroperasi) {
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
    noAngkot++;
}

// angkot bermasalah
for(angkotBermasalah = angkotBeroperasi + 1; angkotBermasalah <= jumlahAngkot; angkotBermasalah++) {
    console.log('Angkot No. ' + angkotBermasalah + ' sedang tidak beroperasi.');
}