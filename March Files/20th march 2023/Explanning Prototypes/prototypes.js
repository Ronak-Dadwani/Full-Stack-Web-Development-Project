let myHeros = ["thor" , "spiderman"]
let dcHeros = ["batman" , "flash" , "superman"]


let heropower = {
    thor : "hammer",
    spiderman : "sling" ,

getSpidermanPower : function (){
    console.log(`spidy power is ${this.spiderman}`);
}

}

Object.prototype.ronak = function(){
    console.log(`Ronak is present in all objects`);
}


console.log(myHeros.ronak());
console.log(heropower.ronak());

Array.prototype.heyRonak = function (){
    console.log(`ronak says hii`);
}

console.log(myHeros.heyRonak());
// console.log(heropower.heyRonak());

//inheritance

const User = {
    name: "top name" ,
    email: "top@gmail.com"
}

const Teacher = {
    makeVideos : true
}
 
const TeachingSupport = {
    isAvailable : false
}

const TAAssistant = {
    makeAssignment : "JS Assignment",
    fulltime : true,
    __proto__: TeachingSupport
}

// Teacher.__proto__ = User

Object.setPrototypeOf(TeachingSupport , Teacher)

console.log(TAAssistant.isAvailable);



String.prototype.truelength = function(){
    console.log(`True length is ${this.trim().length}`);
}

"ronak.           ".truelength()
"anurag.          ".truelength()