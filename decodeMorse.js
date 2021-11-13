decodeMorse = function(morseCode){
    let decodeStr = ''
    let morseArray = morseCode.split(' ')
    for (let i = 0; i < morseArray.length; i++){
        decodeStr+= MORSE_CODE[morseArray[i]]
    }
    decodeStr.jo
    return decodeStr
  }
  console.log(decodeMorse('.... . -.--   .--- ..- -.. .'))