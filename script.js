var _ = {
  average: function(array){
    var total = 0;
    for(i=0; i<array.length; i++){
      var newTotal = (total += array[i]);
    }
    return newTotal/array.length
  },
  contains: function(array, value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] === value) {
        return true;
      }
    }
  },
  first: function(array) {
      return array[0];
  },
  last: function(array) {
  //why does this work?  Not sure I understand this -1 concept.  Because it loops around?
            return array[array.length -1];
  },
  max: function(array) {
    var largestNum =0;
  //cycle through array
  for (i=0; i<array.length; i++){
    //if statement to check if number at that position in array is larger than the largestNum variable
    if(array[i] > largestNum){
      //if number at that position in array is larger than number...
      largestNum = array[i];
      //sets largestNum variable to the number at that position...
    }
    // console.log("largestNum", largestNum);
    // console.log("array value", array[i]);
    // console.log("");
  } return largestNum;
},
  min: function(array) {
     var smallestNum = array[0];
     //this is basically the reverse of largestNum
     for (i=0; i<array.length; i++){
       if(array[i] < smallestNum){
         smallestNum = array[i];
       }
     } return smallestNum;
  },

  shuffle: function(numA) {
    var result = [];
    var workA = numA.slice(0);
    while(workA.length > 0) {
      var random = Math.floor(Math.random() * workA.length);
      result.push(workA.splice(random,1)[0]);
    }
    return result;
},


  sample: function(array, amount){
    var shuffleArr = _.shuffle(array);
    if (amount === null){
      amount = 1;
    }
    return shuffleArr.slice(0, amount)
  },

pull out a number, and test it against all the numbers in the second array.
  difference: function(array1, array2) {
    for (var i = 0; i < array2.length; i++) {
        for (var j = 0; j < array1.length; j++){
          console.log("j",j)
          console.log("array2j", array2[j]);
          if (array2[i] === array1[j]) {
            //array1.splice([i],1);
              array1.splice([j],1);
                console.log("array 1", array1, "array2", array2)
              }
          }
      }
    console.log(array1, array2)
    return array1
  },

  indexOf: function(array, position) {
    var index = 0;
    for (var i = 0; i < array.length; i++) {
        if (position == array[i]) {
            index = i;
        }
     }
    return index
  },
  pluck: function(array, key) {
    var info = [];
    for (var i = 0; i < array.length; i++) {
        //console.log(i[key]); why does this return undefined?
        info.push(array[i][key]);
          //console.log(info) this shows each piece of info being pushed into the array.
      }

        return info;
  },
};

//console.log(_.);
