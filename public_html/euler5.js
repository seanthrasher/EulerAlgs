function isDivByRange(num) {

  for (i=2; i<=20; i++) {

    if (num % i != 0 ) {

      return false;

    }

  }

  return true;

}



function findPosNum() {

  var hasItBeenFound = false;
  var numToCheck = 20;

  while (hasItBeenFound == false) {

    if (isDivByRange(numToCheck)) {

     document.getElementById("output").innerHTML = numToCheck;

     hasItBeenFound = true;

    }

  numToCheck = numToCheck + 20;

  }

} 
