//create an object
const obj = {
    fullname: 'Asef Khan', 
    greet: function() {
        //this keyword will point to the object itself. 
        console.log(`Hello, ${this.fullname }`);
    }
}
obj.greet();
/* use call() function & pass it a object to this greet funciton via call(), so 
    this.fullname now point to the call() object fullname property. */
obj.greet.call( { fullname: 'Masud Khan'});

/*So apply work same but if funciton greet has some parameters then not using the comma
but apply simply pass an array of parameters. So call and apply let change what the this
keyword points to. For essentially borrowing methods.*/
obj.greet.apply( { fullname: 'Masud Khan'});