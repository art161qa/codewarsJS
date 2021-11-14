/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

https://www.codewars.com/kata/526571aae218b8ee490006f4/javascript
*/
let number = 1

var countBits = function(n) {
    if (n < 2 && n > 0){
        return 0
    }
    let number2system = ''
    let count = 0
    while(n >= 2){
        number2system +=  n % 2
        n  = parseInt(n/2)
        if (n < 2){
            number2system+= n
        }
    }
    for (let i = 0; i < number2system.length; i++){
        if (number2system[i] == 1) count++
    }
    return count
  }
  console.log(countBits(number))

