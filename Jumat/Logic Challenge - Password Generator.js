function changeVocals (str) {
    //code di sini
    var baru = ''
    var liblower = "abcdefghijklmnopqrstuvwxyz";
    var libupper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var voclower = "aeiou";
    var vocupper = "AIUEO";
    
    var skip;
    for(var i=0; i<str.length; i++) {
        skip = false;
        for(var j=0; j<liblower.length; j++) {
            for(var k=0; k<voclower.length; k++) {
                if(str[i] == liblower[j] && str[i] == voclower[k]) {
                    baru += liblower[j+1]
                    skip = true;
                }
                if(str[i] == libupper[j] && str[i] == vocupper[k]) {
                    baru += libupper[j+1]
                    skip = true;
                }
            }
        }
        if(!skip) baru += str[i]
    }
    return baru
  }
  
  function reverseWord (str) {
    //code di sini
    var baru = ''
    for(var i=0; i<str.length; i++) {
        baru += str[str.length-i-1]
    }
    return baru
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var baru = ''
    var liblower = "abcdefghijklmnopqrstuvwxyz";
    var libupper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var skip;
    for(var i=0; i<str.length; i++) {
        skip = false
        for(var j=0; j<liblower.length; j++) {
            if(str[i] == liblower[j]) {
                baru += libupper[j]
                skip = true
            }
            if(str[i] == libupper[j]) {
                baru += liblower[j]
                skip = true
            }
        }
        if(!skip) baru += str[i]
    }
    return baru
  }
  
  function removeSpaces (str) {
    //code di sini
    var baru = ''
    for(var i=0; i<str.length; i++) {
        if(str[i] == " ") continue;
        baru += str[i];
    }
    return baru
  }
  
  function passwordGenerator (name) {
    //code di sini
    // var liblower = "abcdefghijklmnopqrstuvwxyz";
    // var libupper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(name.length < 5) return 'Minimal karakter yang diinputkan adalah 5 karakter'
    var vocal = changeVocals(name);
    var reverse = reverseWord(vocal);
    var lowUp = setLowerUpperCase(reverse)
    var remove = removeSpaces(lowUp)
    return remove
    // return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))))
  }

  a="Randi"
//   var voc = changeVocals(a)
// var rvr = reverseWord(voc)
console.log(changeVocals(a))
console.log(reverseWord(changeVocals(a)))

//   console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
//   console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
//   console.log(passwordGenerator('Alexei')); // 'JFXFLb'
//   console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'