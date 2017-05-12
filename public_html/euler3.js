function checkIfPrime(candidate) {
/*
  var myNum = Math.ceil(candidate);
  var x = 2;
  
  while (x < myNum) {

    if (candidate % x == 0) {
     
      return false;
    
    }

    x++;

  }

  return true;

}

*/
  
  for(i = 2; i < candidate; i++) {

    if (candidate % i == 0) {

      return  checkIfPrime(candidate / i);

    }

  }

  return candidate;

}

function getResult() {

  //console.log("runnin");

/*

  This part of the code is what kept it from running efficiently. Only the above function is needed to rapidly and efficiently check for prime factors. Constantly bouncing between the two functions made the check lengthy and cumbersome.

  var running = true;
  var bigNum = 600851475143;
  var x = Math.ceil(bigNum / 2);
  
  while (running == true) {

    console.log(x);

    if (bigNum % x == 0) {

      if (checkIfPrime(x)) {

        document.getElementById("output").innerHTML = x;
        
        running = false;

      }

    }
    x -= 1;
  }

*/

  document.getElementById("output").innerHTML = checkIfPrime(600851475143);

}  

getResult();
