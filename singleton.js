/***
 * The singleton pattern only allows a class or object to have a single instance.
 * It uses a global variable to store that instance.
 * It will only create the class when you need it.
 * That prevents multiple instances from being 
   active at the same time which could cause weird bugs.
***/

var mySingleton = (function(){
  let instance; // stores reference to this singleton
  function init() {
    //private methods and variables
    function privateMethod(){
      console.log('I am private');
    }
    let privateVariable = 'I am also private';
    let randomNumber = Math.random();
     //private methods and variables
    return {
      publicMethod: function() {
        console.log('I am public')
      },
      publicVariable: 'I am public variable',
      getRandomNo: function() {
        return randomNumber;
      }
    }
  };
  return {
    // Get singleton instance if one exits or create one if it doesn't
    getInstance: function() {
      if(!instance) {
        instance = init();
      }
      return instance;
    }
  }
})();

let singleA = mySingleton.getInstance();
