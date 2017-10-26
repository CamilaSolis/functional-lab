'use strict';
// Broken: returns new array but mutates same object references.
    const applyDiscount = (cart,discount) => {
        return cart.map((x) =>{
        const obj = Object.assign({}, x, {
            price: x.price * (1 - discount),
        })
      return obj;
  });
}
module.exports = applyDiscount;