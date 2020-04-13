// Information is stored by using "key : value"

var me = {
    firstName: "David",
    lastName: "Garcia",
    sayHi: function () {
        return ("Hi my name is " + this.firstName + " " + this.lastName);
    }
}

console.log(me.firstName + " " + me.lastName);
console.log(me.sayHi);