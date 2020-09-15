/***
 * if an object is modified it broadcasts to dependent objects that 
 * a change has occurred.
 * e.g -> addEventListener
***/

const Subject = function() {
    const observers = [];
    return {
        subscribeObserver: function(observer) {
            observers.push(observer);
        },
        unsubscribeObserver: function(observer) {
            let index = observers.indexOf(observer);
            if(index > -1) {
                observers.splice(index, 1);
            }
        },
        notifyObserver: function(observer) {
            let index = observers.indexOf(observer);
            if(index > -1) {
                observers[index].notify(index);
            }
        },
        notifyAllObserver: function() {
            for(let i = 0; i < observers.length; i++) {
                observers[i].notify(i);
            }
        }
    }
}

const Observer = function(number) {
    return {
        notify: function() {
            console.log("Observer "+number+" is notified");
        }
    }
}

let subject = new Subject();

let observer1 = new Observer(1);
let observer2 = new Observer(2);
let observer3 = new Observer(3);
let observer4 = new Observer(4);

subject.subscribeObserver(observer1);
subject.subscribeObserver(observer2);
subject.subscribeObserver(observer3);
subject.subscribeObserver(observer4);

subject.notifyAllObserver();
// Observer 1 is notified
// Observer 2 is notified
// Observer 3 is notified
// Observer 4 is notified

subject.notifyObserver(observer2)
//Observer 2 is notified
