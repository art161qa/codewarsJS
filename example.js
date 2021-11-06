//let arrayOfNumbers =  [-3,1,2,3,4,5,6,7,8,9]

function selectRequiredNumbersAndMultiplyThem (number){
  if (number < 0) return 0
  let arr = []
  let resultArray = []
  for (let i= 0; i < number; i++){
    arr.push(i)
  }
  for (let i = 0; i < arr.length; i++){
    
    if (arr[i]% 3 == 0 || arr[i]%5 == 0){
      resultArray.push(arr[i])
    }
  }
  let res =  resultArray.reduce(function (summ, item) {
    return summ + item
  }, 0)
  return res
}

console.log(selectRequiredNumbersAndMultiplyThem(10))