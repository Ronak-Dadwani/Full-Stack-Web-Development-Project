class product {
    // properties -> function - member functions
    // name = abc;
    // price ;
    // rating ; 
    #rating
    constructor (n , p , r) {
        console.log("Calling the constructor");
        this.name = n ; 
        this.price = p ;
        this.#rating = r;
        //return 10; if you'r returning then it will be avlided in contrsutor 
        // return {x: 0 , y:20} // if you return non primitive then it will be returned

    }

    static custom () {
        console.log("calling a static method");
    }

    getRating () {
        console.log(this.#rating);
    }


    setRating (r) {
        if (r<9) return ;
        this.#rating = r;
    }
    // behaviours  -> Functions -> member functions
    display () {
        console.log("Displaying the current product");
    }
}

const p = new product("iphone" ,100000 , 5); // new creates an empty plain object
// in teh above of cod ewe are caling the constructor method
console.log(p);
p.name = "samsung s23" ;
console.log(p.name);
p.setRating(10)
p.getRating()
p.display();
product.custom();

//there will b only one constructor in javascript but there will be multiples logic ideas
//whenever we use new keyword it always shows and empty conainer






