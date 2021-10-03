// OBSERVER PATTERN
// Can subscribe/unsunscribe to specific events
// Notify DOM of elements to be updated

class EventObserver {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`);
    }

    unsubscribe(fn) {
        // filter out from the list whatever matches te callback function.
        // If there is no match, the callback gets to stay on the list.
        // The filter returns a new list and reassigns the list of observers.
        this.observers = this.observers.filter(function(item){
            if(item != fn) {
                return item;
            } 
        });
        console.log(`You are now unsubscribed from ${fn.name}`);
    }

    fire(fn) {
        this.observers.forEach(function(item){
            item.call();
        });
    }
    
}

const click = new EventObserver();

// Event listeners
document.querySelector('.sub-ms').addEventListener('click', function(){
    click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function(){
    click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.fire').addEventListener('click', function(){
    click.fire();
});

document.querySelector('.sub-s').addEventListener('click', function(){
    click.subscribe(getCurSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function(){
    click.unsubscribe(getCurSeconds);
});



// click handler
const getCurMilliseconds = function(){
    console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}

const getCurSeconds = function(){
    console.log(`Current Seconds: ${new Date().getSeconds()}`);
}