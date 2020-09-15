/***
 * The Mediator Design Pattern is a pattern that provides a central authority 
 * through which the different components of an application may communicate
 ***/

 const Participant = function(name) {
    this.name = name;
    this.chatroom = null;
}

Participant.prototype = {
    send: function(message, to) {
        this.chatroom.send(message, this, to);
    },
    receive: function(message, from) {
        console.log(from.name + "to" + this.name + ":" + message);
    }
}

