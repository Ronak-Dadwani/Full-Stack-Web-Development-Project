function product (n , p , r){
    this.name = n ; 
    this.price = p ;
    this.rating = r ;
    return this ;
}

const p = new product("macbook" , 1500000 , 5);
console.log(p);

let x = {
    p: product
};

x.p("airpods" , 200000 , 5)
console.log(x);


/**
 * 1. this keyword in js is diff than other language
 * 2. this keyword refer to the context for where as called 
 * in the function constructor also
 *4. if youreturn primitive it is ignored we return th object referred by this  
 * if you retured a custom object ,  then the cusom obj is returned
 * if you don't return anything  , then object by this is returned
 */