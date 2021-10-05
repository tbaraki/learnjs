// Storage Controller

// Item Controller
const ItemCtrl = (function(){
    // item constructor
    const Item = function(id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }
   
   // data structure/state
   const data = {
       items: [
        //    {id: 0, name: 'Steak Dinner', calories: 1200},
        //    {id: 1, name: 'Cookie', calories: 400},
        //    {id: 2, name: 'Eggs', calories: 300}
       ],
       currentItem: null,
       totalCalories: 0
    }

    // Public methods
   return {
        getItems: function() {
            return data.items;
        },
        addItem: function(name, calories) {
            let ID;
            // create ID
            if(data.items.length > 0) {
                ID = data.items[data.items.length - 1].id + 1
            } else {
                ID = 0;
            }

            // parse calories as number
            calories = parseInt(calories);
            // create new item
            newItem = new Item(ID, name, calories);
            // add to items array
            data.items.push(newItem);
            return newItem;
        },
        logData: function() {
           return data;
        }
    }

})();

// UI Controller
    const UICtrl = (function(){
        const UISelectors = {
            itemList: '#item-list',
            addBtn: '.add-btn',
            itemNameInput: '#item-name',
            itemCaloriesInput: '#item-calories'
        }

        // Public methods
        return {
            populateItemList: function(items) {
                let html = '';

                items.forEach(function(item){
                    html += `<li class="collection-item" id="item-${item.id}:">
                            <b>${item.name}: </b> <em>${item.calories}</em>
                            <a href="#" class="secondary-content">
                                <i class="edit-item fa fa-pencil"></i>
                            </a>
                            </li>`;
                });

                // insert list items
                document.querySelector(UISelectors.itemList).innerHTML = html;
            },
            getItemInput: function() {
                return {
                    name:document.querySelector(UISelectors.itemNameInput).value,
                    calories:document.querySelector(UISelectors.itemCaloriesInput).value
                }
            },
            addListItem: function(item) {
                // show the ul that was hidden in the init
                document.querySelector(UISelectors.itemList).style.display = 'block';
                // create li element
                const li = document.createElement('li');
                //add class
                li.className = 'collection-item';
                //add I
                li.id = `item-${item.id}`;
                // add HTML
                li.innerHTML = `<b>${item.name}: </b> <em>${item.calories}</em>
                                <a href="#" class="secondary-content">
                                <i class="edit-item fa fa-pencil"></i>
                                </a>`;
                // insert item
                document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
            },
            clearInput: function() {
                document.querySelector(UISelectors.itemNameInput).value = '';
                document.querySelector(UISelectors.itemCaloriesInput).value = '';
            },
            hideList: function() {
                document.querySelector(UISelectors.itemList).style.display = 'none';
            },
            getSelectors: function() {
                return UISelectors;
            }
        }
})();

// App Controller
const App = (function(ItemCtrl, UICtrl){
    // load event listeners
    const loadEventListeners = function() {
        // get UI selectors from UICtrl
        const UISelectors = UICtrl.getSelectors();
        // add item event
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
    }

    // add item submit
    const itemAddSubmit = function(e) {
        // get form input from UICtrl
        const input = UICtrl.getItemInput();

        // check for name and calories
        if(input.name != '' && input.calories != '') {
            // add item to data structure
            const newItem = ItemCtrl.addItem(input.name, input.calories);
            // add item to UI list
            UICtrl.addListItem(newItem);
            // clear form input fields
            UICtrl.clearInput();
        }

        e.preventDefault();
    }

    // Public methods
    return {
        init: function() {
            // fetch items data structure
            const items = ItemCtrl.getItems();
            // check if any items
            if (items.length === 0) {
                // hides ul if no items
                UICtrl.hideList();
            } else {
                // Populate list with fetched items
            UICtrl.populateItemList(items);
            }

            // load event listeners
            loadEventListeners();
    }

}})(ItemCtrl, UICtrl);


// initialize app
App.init();