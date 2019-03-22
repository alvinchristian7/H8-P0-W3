function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    var liblower = "abcdefghijklmnopqrstuvwxyz";
    var libupper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var result = "";
    for (var i = 0; i < kalimat.length; i++) {
        var found = false;
        for (var j = 0; j < liblower.length; j++) {
            if (kalimat[i] === liblower[j]) {
                result += libupper[j];
                found = true
            }

            if (kalimat[i] === libupper[j]) {
                result += liblower[j]
                found = true
            }
        }
        if(!found) result += kalimat[i]
    }
    return result;
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"