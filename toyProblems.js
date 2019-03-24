//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
  reverseIt: (str) => {
    return str.split('').reverse().join('')
  },

  //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
  //reverse it

  removeDups: (arr) => {
    return arr.filter((item, pos) => {
      return arr.indexOf(item) == pos
    })
  },


  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates

  titleIt: (str) => {
    const temp = str.split(' ')
    const cap = temp.map(i => {
      return i.charAt(0).toUpperCase() + i.slice(1)
    })
    return cap.join(' ')
  },

  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word

  vowelCounter: (str) => {
    let count = 0
    const temp = str.toLowerCase().split('')
    temp.forEach(i => {
      if (i === 'a' | i === 'e' | i === 'i' | i === 'o' | i === 'u')
        count++
    })
    return count
  },

  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string

  isPrime: (number) => {
    if (number < 2) {
      return false
    }
    if (number === 2){
      return true
    }
     else {
      for (let i = 2; i < number; i++) {
        if (number % i === 0) {
          return false
        }
        return true
      }
    }
  },

  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not

  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  foo: '1020',

  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

  log1: 'Hello World',
  log2: undefined
}
