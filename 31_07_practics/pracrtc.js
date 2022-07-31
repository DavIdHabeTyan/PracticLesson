const human = {
    name: "John",

    sayName: function () {
        console.log(this.name);
    }
};


const developer = Object.create(human);
developer.name = "Developer";

developer.writeCode = () => {
    console.log("writing code");
}


developer.writeCode();
developer.sayName();

