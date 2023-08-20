// function h (x , fn) {
    //h -> is a hof
    //fn -> call back
//     console.log(x*x);
//     fn();
// }

// h(10 , function (){
//     console.log("done with callback");
// })


// h(10 , exec)
// function exec(n) {
//     console.log("squared value is" , n);
// }
console.log("start");
setTimeout(function f() {
    console.log("timer done");
    
}, 3000);

console.log("end");