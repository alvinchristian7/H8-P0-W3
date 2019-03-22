function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    if(arrPenumpang.length == 0) return arrPenumpang;
    var hasil = [];

    for(var i in arrPenumpang) {
        var a,b;
        for(var j = 0; j < rute.length;j++) {
            if(rute[j] == arrPenumpang[i][1]) a = j;
            if(rute[j] == arrPenumpang[i][2]) b = j;
        }
        hasil[i] = {
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: Math.abs((b-a)*2000)
        }
    }
    return hasil;
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'F', 'B'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]