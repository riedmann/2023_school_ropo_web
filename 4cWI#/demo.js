let person = {name:"hans", age:17};


function sayHello({name,age}, color){
    console.log(name + ": " + age + " " + color);
}

sayHello(person, "green");