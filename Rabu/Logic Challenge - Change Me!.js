function changeMe(arr) {
    // you can only write your code here!
    if(arr.length == 0) {
        console.log('""');
        return;
    }
    // var obj = [];
    for(i in arr) {
        obj = {}
        obj["firstName"] = arr[i][0]
        obj["lastName"] = arr[i][1]
        obj["gender"] = arr[i][2]
        if(arr[i][3] == undefined) {
            obj["age"] = "Invalid Birth Year";
        }
        else{
            obj["age"] = 2019 - arr[i][3]
        }
        i = Number(i)
        console.log(i + 1 +". "+obj.firstName+" "+obj.lastName+":\n",obj);
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""