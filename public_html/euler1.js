function getResult() {

  var result = 0;

  for (i = 3; i <= 999; i++) {

    if ((i % 3 == 0) || (i % 5 == 0)) {
  
      result = result + i;
      
    }

  }

  document.getElementById("output").innerHTML = result;

}
