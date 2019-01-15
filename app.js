// Budget Controller
var budgetController = (function() {
    


    return {
        
    }
})();

// UI Controller
var UIController = (function() {

    // Some code

    return {

    }
})();

// Global APP Controller
var controller = (function(budgetCtrl, UICtrl) {
    var ctrlAddItem = function() {
        // 1. Get the field input data

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI

        console.log("Test");
    }
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
    document.addEventListener('keyup', function(e) {
        if(e.keyCode === 13 || e.which === 13) {
            ctrlAddItem();
        }
    });
})(budgetController, UIController);

