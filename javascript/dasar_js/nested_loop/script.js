var pola = '';

// function persegi(jumlahBintang){
//     for(var i = 0; i < jumlahBintang; i++){
//         for(var j = 0; j < jumlahBintang; j++){
//             pola += '*';
//         }
//         pola += '\n';
//     }
//     return pola;
// };
// console.log(persegi(5));

// function segitiga1(jumlahBintang){
//     for(var i = 0; i < jumlahBintang; i++){
//         for(var j = 0; j <= i; j++){
//             pola += '*';
//         }
//         pola += '\n';
//     }
//     return pola;
// }
// console.log(segitiga1(5))

// function segitiga2(jumlahBintang){
//     for(var i = 0; i < jumlahBintang; i++){
//         for(var j = jumlahBintang; j > i; j--){
//             pola += '*';
//         }
//         pola += '\n';
//     }
//     return pola;
// }
// console.log(segitiga2(5))

// function segitiga3(jumlahBintang){
//     for(var i = 0; i < jumlahBintang; i++){
//         for(var j = jumlahBintang - 1; j > i; j--){
//             pola += ' ';
//         }
//         for(var k = 0; k <= i; k++){
//             pola += '*';
//         }
//         pola += '\n';
//     }
//     return pola;
// }
// console.log(segitiga3(5))

function segitigaSamaKaki(jumlahBintang){
    for(var i = 0; i < jumlahBintang; i++){
        for(var j = jumlahBintang; j > i; j--){
            pola += ' ';
        }
        for(var k = 0; k < i; k++){
            pola += '*';
        }
        for(var l = 1; l < i; l++){
            pola += '*';
        }
        pola += '\n';
    }
    return pola;
}
console.log(segitigaSamaKaki(5))

function segitigaSamaKakiTerbalik(jumlahBintang){
    for(var i = 0 ; i < jumlahBintang; i++){
        for(var j = 0; j < i; j++){
            pola += ' '
        }
        for(var k = jumlahBintang - 1; k > i; k--){
            pola += '*';
        }
        for(var l = i; l > (2 * i - jumlahBintang); l--){
            pola += '*'
        }
        pola += '\n';
    }
    return pola;
}
console.log(segitigaSamaKakiTerbalik(5))