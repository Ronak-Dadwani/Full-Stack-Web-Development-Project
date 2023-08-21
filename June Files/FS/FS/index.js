const fs = require('fs');
const { buffer } = require('stream/consumers');
const { isBuffer } = require('util');

// console.log('READ  START');
// // Asynchronous way to read file

// fs.readFile('input.txt' , function(err , data) {
//     if(err){
//         console.log('Error:' , err);
//         return err;
//     }

//     console.log('Data:' , data.toString() )
//     console.log('READ  END');
//     return data;
// })  


// console.log('OTHER STUFF');


// synchronous 

// var data = fs.readFileSync('input.txt')

// console.log('Data :' , data.toString())
// console.log('READ END')
// console.log('OTHER STUFF')



// read  = open + read

const buf = new Buffer (1024)

fs.open('input.txt' ,'r+' , function(err , fd) {
    if(err) {
        console.log('Error while opening files' , err);
    }

    console.log("File Open SuccessFully");

    fs.read(fd, buf , 0 , buf , buf.length , 0 , function(er , data) { 
        if(er){
            console.log('Error in reading file');
        }
        console.log('Data:' , bytes);
        console.log('Data: ' , buf.slice(0 , bytes) ,   data.toString());

    })
} )