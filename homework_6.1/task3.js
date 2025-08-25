const checkOrder = (available, ordered) => {
    
    return ordered > available ? "Your order is too large, we don’t have enough goods." : 
    ordered === 0 ? "Your order is empty" : "Your order is accepted";

}

console.log(checkOrder(10, 5));
console.log(checkOrder(10, 0));
console.log(checkOrder(10, 12));