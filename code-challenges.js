// ASSESSMENT 4: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in an array. Each time the function is run, remove the first item from the array and shuffle the remaining content. If the array is empty, return "The array is empty."

var collections = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example1 (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example2 (can be a different order): ["blue", "green", "pink"]
// Expected output example3 (can be a different order): ["pink", "green"]
filterArr = []
const shuffle = (array) => {
  let filterArr = array.map(value => {
      return array[0] += 1
  })
  return filterArr.shift()
}
console.log(shuffle(collections))


// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

 const cubed = (array)  => {
   var sum = array.reduce(function(a,b) {
       return a + b
   }, 0 )
   return sum ** 3
 }
console.log(cubed(cubeAndSum1))
console.log(cubed(cubeAndSum2))

// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]


const minAndMax = (array) => {
  var biggestNum = array[0]
  var smallestNum = array[0]
    for(let i = 0; i < array.length; i++) {
      if(biggestNum < array[i]) {
       biggestNum = array[i]
      }
      else if(smallestNum > array[i]) {
        smallestNum = array[i]
      }
    }let minAndMaxArr = biggestNum && smallestNum
    return minAndMaxArr
}
console.log(minAndMax(nums1))
console.log(minAndMax(nums2))

// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.

var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"

const capitalized = (string) => {
  var newString = ""
  for(let i = 0; i < string.length; i++) {
    if(i % 2 == 0){
      newString += string.charAt(i).toUpperCase()
    }else {
      newString += string.charAt(i)
    }
  }
  return newString
}

console.log(capitalized(testString1))
console.log(capitalized(testString2))


// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]


const noDuplicates = (arr1, arr2) => {
  let finalArr = []
  arr1.concat(arr2).filter((value, index) => {
    if(finalArr.indexOf(value) == -1) {
      finalArr.push(value)
    }
  })
  return finalArr
}
console.log(noDuplicates(arr1, arr2))
