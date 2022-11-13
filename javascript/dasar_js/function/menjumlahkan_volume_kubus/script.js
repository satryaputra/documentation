function penjumalahanVolumeKubus(a, b){
    var volumeKubusA = a**3;
    var volumeKubusB = b**3;
    var jumlahVolume =  volumeKubusA + volumeKubusB;
    return jumlahVolume;
}

console.log(penjumalahanVolumeKubus(10, 5))