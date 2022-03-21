/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

https://www.codewars.com/kata/585d7d5adb20cf33cb000235/javascript
*/
function findUniq (arr) {
    let countOfReapat = 0
    external: for (let i = 0; i < arr.length; i++){
        for (let j=0; j<arr.length; j++){ 
            if (arr[j] === arr[i]) {
                countOfReapat++
            }
            if (countOfReapat > 1){
                countOfReapat = 0
                continue external
            }
        }
        return arr[i]
    }
    
}



let res = findUniq ([ 1, 1, 1, 2, 1, 1 ])

console.log(res);