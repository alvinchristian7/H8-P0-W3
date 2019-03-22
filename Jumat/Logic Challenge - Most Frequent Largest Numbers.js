function sorting(arrNumber) {
    // code di sini
    var baru = [];
    for(var i = 0;i<arrNumber.length; i++) {
        baru.push(arrNumber[i])
    }
    for (var i = 0; i < baru.length - 1; i++) {
        for(var j = 0; j < baru.length - i - 1; j++) {
            if (baru[j] > baru[j + 1]) {
            var tmp = baru[j];
            baru[j] = baru[j+1];
            baru[j+1] = tmp;
            }
        }
    }
    return baru;
  }
  
  function getTotal(listSort) {
    // code di sini
    if(listSort.length == 0) return "''"
    var n = 0;
    for(var i = 0; i < listSort.length; i++) {
        if(listSort[i] === listSort[listSort.length-1]) n++;
    }
    return 'angka paling besar adalah ' + listSort[listSort.length-1] + ' dan jumlah kemunculan sebanyak ' + n + ' kali'
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''