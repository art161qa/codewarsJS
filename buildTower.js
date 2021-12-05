/*
Build Tower
Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

for example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
]

https://www.codewars.com/kata/576757b1df89ecf5bd00073b/javascript
*/

function towerBuilder(nFloors) {
    let count = 0
    let countSpace = 0
    let resArr = []
    let symb = '*'
    let space = ' '

    for (let i = 1; i <= nFloors; i++){
        resArr.push(symb.repeat((i + count)))
        count++
    }
    for (let i=resArr.length-1; i>=0; i--){
        resArr[i] = space.repeat(countSpace) + resArr[i] + space.repeat(countSpace)
        countSpace ++
    }
    return resArr
  }
