function urutkanAbjad(str) {
    // you can only write your code here!
    var baru = ""
    var strb = str.split("")
    strb.sort()
    // for(var i=0;i<strb.length;i++){
    //     baru += strb[i];
    // }
    strb = strb.join("")
    return strb
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'