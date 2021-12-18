/*
#Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"

https://www.codewars.com/kata/5839edaa6754d6fec10000a2/javascript
*/ 

let exmpleArray = ['a','b','c','d','f']
let arr2 = ['O','R','S']

function findMissingLetter(array)
{
    let result = ''
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let start = alphabet.indexOf(array[0])

    for (let i = 0; i < array.length; i++, start ++){
        if (array[i] !== alphabet[start]){
            result+= alphabet[start]
            i--
        }
    }
    return result
}
console.log(findMissingLetter(arr2))