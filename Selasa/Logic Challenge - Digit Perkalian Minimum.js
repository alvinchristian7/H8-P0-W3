function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var hasil;
    var a = [];
    for(var i = 1; i <= angka ;i++) {
        if(angka % i === 0) a.push(i);
    }
    for(var i = 0;i<a.length/2;i++) {
        var next = (a[i].toString()+a[a.length-i-1].toString()).length;
        if(i == 0) hasil = next;
        if(next < hasil) hasil = next;
    }
    return hasil;
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2