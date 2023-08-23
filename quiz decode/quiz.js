// function compare() {
//     var a = 1;
//     var b = 1;
//     if (a.toString() === b)
//         return true;
//     else
//         return false;
// }

// var x = 5;
// var y = 5;
// console.log(x+y);
// var x = 2;
// var y = 2;
// console.log(x==y);

// var x=25;
// console.log(x);
// x = 25;

// for (var i= 0 ; i < 3 ; i++){
//     setTimeout(()=> console.log(i) , 1);
// }

// const pi = 3.14;
// var Pi = 4;
// console.log(pi);

// var string1 = "PWSkills"
// var value = 20
// alert(string1 + value);

// var a=1;
// if(a!=null) 
//     console.log(1)
// else
//     console.log(0)


// var js = (function(x) {return x*x;}(10));


// function compare()
// {
//     let a=2;
//     const b=2;
//     if(a==b)
//         return true;
//     else
//         return false;
// }           



// 

// function example (javascript)
// {
//     return (javascript ? "yes" : "No");
// }
// bool ans = true;
// console.log(example(ans));


// function height()
// { 
//     var  height = 120;
//     var type = (height>=190) ? "tall" : "short";
//     return type;
// }


// var a=5 , b=1
// var obj = { a : 10 }
 

// console.log(obj.a)

// for(var num=10;num>=1;num--)
// {
//           document.writeln(num);
// }

// var num=10;
// while(num>=1)
// {
//       document.writeln(num);
//       num++;
// }

// var js = 0;
// while (js < 10) 
// {
//     console.log(js);
//     js++;
// }

// var quiz=[1,2,3];  
// var js=[6,7,8];  
// var result=quiz.concat(js);  
// document.writeln(result);



// var a=0;
// for(a;a<5;a++);
// console.log(a);


// console.log(p);

// function compare()
// {
//     var a=1;
//     var b=1;
//     if(a.toString()===b)
//         return true;
//     else 
//         return false;
// }


let password = prompt("Enter password:"); // Get password from user
let confirmPassword = prompt("Confirm password:"); // Get confirmation password from user

if (password === confirmPassword) {
  console.log("Password Matched. Password validation Successful.");
} else {
  console.log("Password didn't match. Password validation unsuccessful");
}
