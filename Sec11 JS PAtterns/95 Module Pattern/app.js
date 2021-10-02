// basic structure

// (function(){
//     // declare private vars and functions

//     return {
//         // declare public var and functions
//     }
// })();

// STANDARD MODULE PATTERN
const UICtrl = (function(){
    let text = 'Hello World!'

    // PRIVATE: Cannot be called form outside this module
    const changeText = function() {
        const element = document.querySelector('h1');
        element.textContent = text;
    }

    return {
        // PUBLIC: CAN be called form outside this module
        callChangeText: function() {
            changeText();
            console.log(text);
        }
    }
})();

UICtrl.callChangeText(); //Calls the public function from the module.
// UICtrl.changeText(); //Calls the private function. Will error as it is not available.

// REVEALING MODULE PATTERN

const ItemCtrl = (function() {
    let data = [];

    function add(item) {
        data.push(item);
        console.log('Item added...');
    }

    function get(id) {
        return data.find(item => {
            return item.id === id;
        });
    }

    return {
        // reveals the methods that are in the private module. Can be used below, outside the module.
        add: add,
        get: get
    }
})();

ItemCtrl.add({id: 1, name: 'John'});
ItemCtrl.add({id: 2, name: 'Mark'});
console.log(ItemCtrl.get(1));
console.log(ItemCtrl.get(2));