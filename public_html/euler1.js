function getResult() {

  var prevNum = 1;
  var prevPrevNum = 0;
  var sum = 0;
  var curNum = 1;
  var buffer = 0;

  while (curNum < 4000000) {

    if (curNum % 2 == 0) {

      sum += curNum;

    }

      console.log("Generation begins.");
      console.log("Current number is " , curNum);

      buffer = curNum;
      console.log("Buffer set to " , curNum);

      curNum += prevNum;
      console.log("Current num set to the sum of " , prevNum , " and " , prevPrevNum);

      prevPrevNum = prevNum;
      console.log("prevPrevNum set to " , prevNum);

      prevNum = buffer;
      console.log("prevNum set to " , buffer);

      console.log(curNum);

  }
  document.getElementById("output").innerHTML = sum;
}
