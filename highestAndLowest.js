numb = "8 3 -5 42 -1 0 0 -9 4 7 5 -4"

function highAndLow(numbers){
    let arrNum = numbers.split(' ')
    let min = arrNum[0]
    let max = arrNum[0]
    let result = ""
    for (let i = 0; i < arrNum.length; i++){
        if (+min > +arrNum[i]) min = arrNum[i];
        if (+max < +arrNum[i]) max = arrNum[i]
    }
    result += `${max} ${min}`
    return result
  }
  console.log(highAndLow(numb))