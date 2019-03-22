function ubahHuruf(kata) {
  // you can only write your code here!
  var liblower = "abcdefghijklmnopqrstuvwxyz";
  var libupper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var result = "";
  for (var i = 0; i < kata.length; i++) {
    if (kata[i] === " ") {
      result += " ";
    }
    for (var j = 0; j < liblower.length; j++) {
      // console.log(j + ". huruf : " + liblower[j])
      if (kata[i] === liblower[j]) {
        if(j == liblower.length - 1) {
          result += liblower[0]
          break
        }
        result += liblower[j + 1];
        break;
      }

      if (kata[i] === libupper[j]) {
        if(j == libupper.length - 1) {
          result += libupper[0]
          break
        }
        result += libupper[j + 1];
        break;
      }
    }
  }
  return result;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu