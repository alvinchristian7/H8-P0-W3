function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    if(arrPenumpang.length == 0) return arrPenumpang;
    var hasil = [];

    for(var i in arrPenumpang) {
        var jarak = 0;
        for(j in rute) {
            if(rute[j] == arrPenumpang[i][1]) jarak = 0;
            if(rute[j] == arrPenumpang[i][2]) break;
            jarak++
        }
        hasil[i] = {
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: jarak*2000
        }
    }
    return hasil;
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]