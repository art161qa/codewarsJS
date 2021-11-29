let num = 153
function narcissistic(value) {
    value = String(value)
    let pow = value.length
    let result = 0
    for (let i = 0; i < value.length; i++){
        result += Math.pow (+value[i], pow)
    }
    return +value === result
}
console.log(narcissistic(num))
  