function getResult() {

  var prevNum = 0;
  //unecesary variable--var prevPrevNum = 0;
  var sum = 0;
  var curNum = 1;
  var buffer = 0;

  while (curNum < 4000000) {

    if (curNum % 2 == 0) {

      sum += curNum;

    }

      buffer = curNum;
  
      curNum += prevNum;
      console.log("current number: " + curNum);      

      //prevPrevNum = prevNum;
      //console.log("previous previous number: " + prevPrevNum);

      prevNum = buffer;
      //console.log("previous number: " + prevNum);


  }

  document.getElementById("output").innerHTML = sum;

}
