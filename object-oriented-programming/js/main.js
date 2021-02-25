console.log("Hello World!")

//Objects

//Object Literals
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function() {
//         console.log('draw')
//     }
// }
// circle.draw()

//OR The code below is better than the code above

//Factory Function
// function createCircle(radius) {
//     return {
//         radius,
//         draw: function() {
//             console.log('draw')
//         }
//     }
// }
// const circle = createCircle(1)
// circle.draw()

//Constructor Function
function Circle(radius) {
    console.log('this', this)
    this.radius = radius
    this.draw = function() {
        console.log('draw')
    }
}
const another = new Circle(1)

//Constructor Property
//Every object has a constructor property
new String(); // '', "", ``
new Boolean(); // true, false
new Number(); // 1,2,3, ...

//Functions are Objects
const Circel1 = new Function('radius', `
this.radius = radius
this.draw = function() {
    console.log('draw')
}
`)
const circle = new Circle(1)

//OR
Circle.call({window}, 1)
Circle.apply({}, [1, 2, 3]);
//In javascript, functions are objects

//Prototypes and Primitives

//primitives:
let x = 10
let y = x
x.value = 20

let obj = {value: 10}
function increase(obj) {
    obj.value++
}
increase(obj)
console.log(obj)