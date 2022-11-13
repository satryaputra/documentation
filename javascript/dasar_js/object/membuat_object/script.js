// Membuat Object
// Object Literal

var mhs = {
    nama : 'Putra',
    umur : 17,
    gender :'laki-laki',
    alamat : {
        desa : 'Ngampel',
        kecamatan : 'Papar',
        kabupaten : 'Kediri',
    },
    contact : [085755330288, 'muhammadsatrya12@gmail.com']
};


// Function Declaration
function tambahMahasiswa(nama, umur, gender) {
    var mhs = {};
    mhs.nama = nama;
    mhs.umur = umur;
    mhs.gender = gender;
    return mhs;
}

var mhs2 = tambahMahasiswa('Satrya', 20, 'laki-laki');


// Constructor
function Mahasiswa(nama, umur, gender) {
    this.nama = nama;
    this.umur = umur;
    this.gender = gender;
};

var mhs3 = new Mahasiswa('Eka', 14, 'laki-laki');