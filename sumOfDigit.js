/*
Given n, take the sum of the digits of n.
 If that value has more than one digit, continue reducing in this way until a single-digit number is produced. 
 The input will be a non-negative integer.
*/

let someNumber = 493193

function returnSum (number){
    number = String(number)
    let sum = 0
    let resultSum = 0
    for (let i = 0; i < number.length; i++){
        sum += +number[i]
    }
    sum = String(sum)
    if (sum.length > 1){
        for (let i = 0; i < sum.length; i++){
                resultSum += +sum[i]
            }
            return resultSum
        }
    else {
            resultSum = +sum
            return resultSum
        }
    }


console.log(returnSum(someNumber))