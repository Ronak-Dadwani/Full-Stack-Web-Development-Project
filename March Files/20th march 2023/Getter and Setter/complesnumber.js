class complexNumber {
    #real
    #imag

    constructor(r , i ) {
        this.#real = r;
        this.#imag = i;
    }

    display() {
        console.log(this.#real, " + i", this.#imag);
    }

    get real() {
        return this.#real;
    }
    get imag() {
        return this.#imag;
    }

    adddcommplexNumber (c) {
        this.#real+= c.real;
        this.#imag+= c.imag;

    }
}

const c1 = new complexNumber( 2 , 3 )
c1.display();   
const c2 = new complexNumber(4 , 5 )
c1.adddcommplexNumber(c2)
c1.display()