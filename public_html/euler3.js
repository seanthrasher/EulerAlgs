function checkIfPrime(candidate) {
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


function getResult() {

  console.log("runnin");

  var running = true;
  var bigNum = 100;
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
}  
