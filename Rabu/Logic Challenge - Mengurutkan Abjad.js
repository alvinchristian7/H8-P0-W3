function urutkanAbjad(str) {
  // you can only write your code here!
  var baru = ""
  var liblower = " abcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < liblower.length; i++) {
    for (var j = 0; j < str.length; j++) {
      if (str[j] == liblower[i]) {
        baru += liblower[i]
      }
    }
  }
  return baru
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'