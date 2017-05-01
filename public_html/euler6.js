function sumTheSquare(num) {

  var sum = 0;

  for (i=1; i<=100; i++) {

    sum = sum + (i * i);

  }

  return sum;

}


function squareTheSum(num) {

  var sum = 0;

  for (i=1; i<=100; i++) {

    sum = sum + i;

  }

  var result = sum * sum;

  return result;

}


function getResult() {

  document.getElementById("output").innerHTML = squareTheSum(100) - sumTheSquare(100);

}
