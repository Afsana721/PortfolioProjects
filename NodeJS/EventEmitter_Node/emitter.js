// create a function constructor to create an object as an instance of the function.
function Emitter() {
//add one empty object to the object instance.
    this.events = {};
}

/*add method to the Emitter prototype, so newly created object can access by its 
prototype chain. */
Emitter.prototype.on = function(type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

//Event happens add to Emitter prototype
Emitter.prototype.emit = function(type) {
    if (this.events[type]) {
        this.events[type].forEach(function(listener) {
            listener();
        })
    }
}

//make this available from other file
module.exports = Emitter; 