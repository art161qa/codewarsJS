/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""

https://www.codewars.com/kata/55c45be3b2079eccff00010f
*/

function order(words){
    let numbers = [1,2,3,4,5,6,7,8,9]
    let arrWords = words.split(' ')
    let resultArr = []
    for (let i = 0; i < numbers.length; i++){
        for(let j = 0; j < arrWords.length; j++){
            if (arrWords[j].includes(numbers[i])){
                resultArr.push(arrWords[j])
            }
        }
    }
    return console.log(resultArr.join(' '))
}
order("is2 Thi1s T4est 3a")