let calculator = {
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },

    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }
};

calculator.read(); //prompts for 2 values and saves them as the object
alert(calculator.sum()); //returns the sum of the 2 values
alert(calculator.mul()); //returns the product of the 2 values