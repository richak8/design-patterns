/***
 * Keep particular pieces of code independent from each other modules as it allows 
 * to break up different parts of code. So it becomes easier to maintain and reason about.
 * It provides encapsulation which can protect properties and functions from being
 * accessed from other parts of code. 
 ***/

 class ShoppingList {
    constructor() {
        this.list = ['fruits', 'veggies']
    }

    getShoppingList() {
        return this.list.join(', ');
    }

    addItemsToShoppingList() {
        this.list.push('groceries');
    }

 }

 export default ShoppingList;