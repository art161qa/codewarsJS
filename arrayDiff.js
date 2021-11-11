let a = []
let b = [4,5]

function arrayDiff(a, b) {
  let resArr = []
  for (let i = 0; i < a.length; i++){
    if (b.indexOf(a[i]) == -1){
        resArr.push(a[i])
    }
  }
  for (let i = 0; i < b.length; i++){
    if (a.indexOf(b[i]) == -1){
        resArr.push(b[i])
    }
  }
  
  return resArr
}

console.log(arrayDiff(a,b))