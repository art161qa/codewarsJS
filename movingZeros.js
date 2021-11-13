let withZeros = [false,1,0,1,2,0,1,3,"a"]
var moveZeros = function (arr) {
    let zeros = arr.filter(value => value === 0)
    let withoutZeros = arr.filter(value => value !== 0)
    return withoutZeros.concat(zeros)
  }

  console.log(moveZeros(withZeros))