function createpromise() {
  return new Promise(function exec(resolve, reject) {
    setTimeout(function f() {
      console.log("timer done");
      resolve("10");
      // reject("done");
    }, 3000);
  });
}
console.log("start");
let x = createpromise();

console.log("got a new promise");

x.then (function f(value)  {
    console.log("promise done", value);
}).catch (function g(value){
  console.log("handled" , value);
}) .finally (function fn() {
  console.log("finally");
})

console.log("end");


for (let i = 0 ; i < 10000000 ; i++) {

  // some code
}