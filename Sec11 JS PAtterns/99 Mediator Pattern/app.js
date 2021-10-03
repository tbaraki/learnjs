const User = function(name){
    this.name = name;
    this.chatroom = null;
}

User.prototype = {
    send: function(message, to) {
        this.chatroom.send(message, this, to);
    },
    recieve: function(message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`)
    }
}

const Chatroom = function() {
    let users = {}; // empty list of users to be populated
    
    return {
        register: function(user) {
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function(message, from, to) {
            if(to) {
                // single user message
                to.recieve(message, from);
            } else {
                // broadcast to asll users
                for(key in users) {
                    if(users[key] != from) {
                        users[key].recieve(message, from);
                    }
                }
            }
        }
    }
}

const brad = new User('Brad');
const jeff = new User('Jeff');
const lucy = new User('Lucy');

const chatroom = new Chatroom();

chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(lucy);

brad.send('Hello Jeff', jeff);
lucy.send('Hey Brad, you rock!', brad);
jeff.send("Hey guys, What's up?");