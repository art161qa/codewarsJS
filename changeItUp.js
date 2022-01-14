/*
Create a function that takes a string as a parameter and does the following, in this order:

Replaces every letter with the letter following it in the alphabet (see note below)
Makes any vowels capital
Makes any consonants lower case
Note: the alphabet should wrap around, so Z becomes A

So, for example the string "Cat30" would return "dbU30" (Cat30 --> Dbu30 --> dbU30)
*/

const alphabet = "abcdefghijklmnopqrstuvwxyz".split('')
const vowels = "aeiou"

function changer(str){
    let result = ""
    for(let i = 0; i < str.length; i++){
        if (!alphabet.includes(str[i].toLowerCase())){
            result+= str[i]
        }
        else {
            let index = alphabet.indexOf(str[i].toLowerCase()) + 1
            if(str[i].toLowerCase() === 'z'){
                result+= 'A'
                continue
            }
            result += vowels.includes(alphabet[index])
                ?alphabet[index].toUpperCase()
                :alphabet[index]
        }
        
    }
    console.log(result)
    return result
}
changer('tests324Zsd')