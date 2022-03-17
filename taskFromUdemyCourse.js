/*
Задача из курса https://www.udemy.com/course/fundamental-javascript/
Раздел 4: Про функции подробно.
Упражнение по написанию кода 22: Проект. Практика
https://www.udemy.com/course/fundamental-javascript/learn/quiz/5232918
*/

function censor() {
    let args = []
    function internal (){
        if (arguments.length === 1) {
            let phrase = arguments[0]
            let resultPhrase
            for (let i =0 ; i < args.length; i= i + 2) {
                resultPhrase = phrase.replace(args[i], args[i+1])
                phrase = resultPhrase
            }
             
            console.log (resultPhrase)
        }
        else if (arguments.length === 2){
            for (let i= 0; i < arguments.length; i++){
                args.push(arguments[i])
            }
            //console.log(args)
        }
    }
    return internal
}

const changeScene = censor()

changeScene ('PHP', 'JS')

changeScene('backend', 'frontend')

changeScene ('PHP is the backend')

