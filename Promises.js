
// const cart = ["headphones","shoes","pants","shirts"]

// //earlier=>Issue with call back function is "Inversion of Control".
// createOrder(cart,function(orderId){ //we were passing the callback function to another function
//     proceedToPayment(orderId);
// });  

// Callback hell=>
createOrder(cart,function(orderId){
    proceedToPayment(orderId,function(paymentInfo){
        showOrderSummary(paymentInfo,function(){
            updateWalletBalance();
        });
    });
});
/* =>it gives rise to ugliness of the code and make it too complicated , this problem is solved by the promise when one 
API is dependent on other API.*/



// // ----------------------------------------
// const promise = createOrder(cart);
// //{data: undefined } 
// //after some async time=>
// //{data:orderDetails }

// promise.then(function(orderId){                               //Attaching the callback function to the promises
//     proceedToPayment(orderId);
// });

// Promise Chaining=> It will solve the problem of callbackhell.
createOder(cart)
.then(function (orderId){
    return proceedToPayment(orderId);
})
.then(function(orderId){
    return showOrderSummary(paymentInfo);
}).then(function (paymentInfo){
    return updateWalletBalance(paymentInfo);
})


// --------------------------Example-----------------------------//
const GITHUB_API = "https://api.github.com/users/kartikeypushkarna"

const user = fetch(GITHUB_API);//it returns us the promises
console.log(user);
user.then(function(data){
    console.log(data);
})
//----------------------------Questions---------------------------//
// 1.What is Promise?
/* Promise object is a placeholder which will be filled later with the value or a container for the future value gave by the 
async function."A promise is an object representing the eventual completion or failure of an asynchronous operation."
