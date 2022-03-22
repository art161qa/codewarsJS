//wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave (word) {
    let res = []
    let currentWord = ''

    for (let i = 0; i < word.length; i++){
        if (word[i] === " "){
          continue
        }
        for (j = 0; j < word.length; j++){
            if (i === j){
                currentWord += word[j].toUpperCase()
            }
            else {
                currentWord += word[j]
            }
        }
        res.push(currentWord)
        currentWord = ''
    }
    return res
}

let result = wave("two words")
console.log(result)
