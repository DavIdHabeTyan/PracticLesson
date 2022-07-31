// grel enq class vor@ uni child class

/*
class Human {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }
}

class Developer extends Human {
    writeCode() {
        console.log("Write code");
    }
}

const dev = new Developer("Developer");

dev.sayName();
dev.writeCode();


 */


class Notification {
    getTitle() {
        return null
    }
    getBody() {
        return null
    }
    send() {
        const body = this.getBody();
        const title = this.getTitle()

        if(!body){
            return
        }
        if(!title){
            console.log(`Hello, ${body}`)
        } else {
            console.log(`${title}, Hello ${body}`)
        }
    }
}
const notification = new Notification();


//--------- Email ------------

class Email extends Notification{
    constructor() {
        super();
    }
    getTitle() {
        return "Email Subject"
    }
    getBody() {
        return "Email Body"
    }
}

const email = new Email();
email.send()

// ------------- SMSNotification ---------------

class SMSNotification extends Notification{
    getBody() {
        return "email body";
    }
}
const sms = new SMSNotification();
sms.send()

/// ---------------- exercises  grel callback function vor@ kashxati promisi pes

function request(isOk, onSuccess, onError ){
    setTimeout( () => {
    if(isOk) {
        console.log("onError")
        onSuccess(isOk)
    }else {
        console.log("onSuccess")
        onError(isOk)
    }
    },2500)

}

request(false, (isOk) => {
    console.log(isOk);
    console.log("onSuccess");
},
    (isOk) => {
        console.log(isOk);
        console.log("onError")
    });




