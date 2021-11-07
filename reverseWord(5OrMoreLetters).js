let someString  = 'Hello'
let resultString = ''
let arrayWords = someString.split(' ')
for (let i = 0; i < arrayWords.length; i++){
    if (arrayWords[i].length >= 5){
        resultString += arrayWords[i].split('').reverse().join('')
        if (i != arrayWords.length -1) {
            resultString += ' '
        }  
    }
    else{
        resultString += arrayWords[i]
        if (i != arrayWords.length -1) {
            resultString += ' '
        }
    }
}
console.log(resultString)