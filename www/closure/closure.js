/****************************************************************************/
// EXERCISE 1:
//
// The function below should return an object with two
// properties:
//
//   setTemp: A function that takes a single argument and sets the
//            current temperature to the value of the argument.
//
//   getTemp: A function that returns the last temperature set by
//            the setTemp function.
//
ClosureExercise = function() {
  var temp = 100;

  var get = function() {
    return temp;
  };

  var set = function(newTemp) {
    // Protect `temp':
    if (newTemp > 0) {
      temp = newTemp;
    }
  };

  return {
    getTemp: get,
    setTemp: set,
  };
};
