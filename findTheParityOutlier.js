let arr = [3,21,45,66,47]

function find (arr) {
    let oddArr = arr.filter(function(number) {
        return number%2 !== 0
    })
    let evenArr = arr.filter(function(number) {
        return number%2 == 0
    })
    if (oddArr.length == 1){
        return oddArr[0]
    }
    else {
        return evenArr[0]
    } 
}
console.log(find(arr))