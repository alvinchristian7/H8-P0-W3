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
      if (kata[i] === liblower[j]) {
        result += liblower[j + 1];
      }

      if (kata[i] === libupper[j]) {
        result += libupper[j + 1]
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