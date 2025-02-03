class Greets {
    constructor() {
       this.greeting = 'Hello world!4';       
    }
    greet() {
        console.log(this.greeting);
    }
}

module.exports = new Greets();