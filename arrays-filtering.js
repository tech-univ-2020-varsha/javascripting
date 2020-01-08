var numbers=  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var num_filter= numbers.filter(function evenNumbers (number) {
       return number % 2 === 0
     })
console.log(num_filter)
