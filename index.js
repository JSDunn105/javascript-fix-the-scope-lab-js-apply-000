
function myAnimal() {
  var animal = 'dog';
  return animal;
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal = 'cat';
  return animal;
}
  
const two = 2;
function add2(n) {
  return n + two;
}
  // Feel free to move things around!


var funkyFunction = function() {
  return function() {
<<<<<<< HEAD
    return 'FUNKY!';
  };
};

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction();
var theFunk = theFunk();
=======
    return "FUNKY!";
  };
};
// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction(theFunk());

>>>>>>> b9c2553cb4a6e65c6322e0e2d0c71ea7398e30a6
