// Memanipulasi array dengan manual

// 1. Menambah isi array
// var arr = [];
// arr[0] = 'Mohammad';
// arr[1] = 'Eka';
// arr[2] = 'Satrya';
// arr[3] = 'Putra';

// console.log(arr)

// 2. Menghapus isi array
// var arr = ['Mohammad', 'Eka', 'Satrya', 'Putra'];
// arr[0] = undefined;
// console.log(arr)

// 3. Menampilkan semua isi array
// var arr = ['Mohammad', 'Eka', 'Satrya', 'Putra'];
// for(var i = 0; i < arr.length; i++){
//     console.log(arr[i])
// };



// Memanipulasi array dengan menggunakan method pada array
// 1. Join (menggabungkan seluruh isi array dan mengubahnya menggunakan string)
// var arr = ['Mohammad', 'Eka', 'Satrya'];
// console.log(arr.join(' '));

// 2. Push (untuk menambah elemen array yang ditaruh paling akhir)
// arr.push('Putra');
// console.log(arr.join(' '));

// 3. Pop (untuk menghapus elemen yang paling akhir)
// arr.pop()
// console.log(arr.join(' '));

// 4. Unshift (untuk menambah elemen array di posisi paling awal)
// arr.unshift('Halo', 'Nama', 'Saya');
// console.log(arr.join(' '));

// 5. shift (untuk menghapus elemen array di posisi paling awal)
// arr.shift() 
// console.log(arr.join(' '));

// 6. splice
// splice(indexAwall, mauDiahpusBerapa, elemenBaru1, elemenBaru2, ...)
// arr.splice(1, 0, 'adalah')
// console.log(arr.join(' '))

// 7. slice
// slice(awal, akhir);
// var arr = ['Sandhika', 'Galih', 'Nofa', 'Doddy', 'Fitri'];
// var arr2 = arr.slice(1,4);
// console.log(arr.join(' '));
// console.log(arr2.join(' '));



// 8. foreach
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];

// mengguakan looping yang biasa
// for(var i = 0; i < angka.length; i++){
//     console.log(angka[i]);
// }

// menggunakan forEach
// angka.forEach(function(e){
//     console.log(e);
// })

// contoh lainnya
// nama = ['Putra', 'Satrya', 'Eka'];
// nama.forEach(function(e,i){
//     console.log('Siswa ke-' + (i+1) + ' adalah : ' + e);
// })

// filter
// var angka = [1,3,4,2,7,5,8,6,9,1,2,4];
// angka2 = angka.filter(function(n){
//     return n <= 5;
// })

// console.log(angka2)

// find
// var angka = [1,3,4,2,7,5,8,6,9,1,2,4];
// angka2 = angka.find(function(n){
//     return n <= 5;
// })

// console.log(angka2)