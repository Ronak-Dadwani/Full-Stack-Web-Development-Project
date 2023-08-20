// const product = function (n , p , r ) {
//     this.name = n
//     this.price = p
//     this.rating = r
// }

// const p = new product("Iphone5" , 100000 , 5)
// console.log(p);

const product = (n , p , r ) => {
    this.name = n
    this.price = p
    this.rating = r
}
const p = new product("iphone5" , 100000 , 5)
console.log(p);

//The theory of this keyword pointing to calling context is not applicable ith arrow function
