import React, { useEffect, useState } from 'react';

function ShoppingCart({ items }) {
  const [totalPrice, setTotalPrice] = useState(0);
  // totalPrice is not a derived value 
  // Calculate totalPrice whenever items prop changes
  useEffect(() => {
    const newTotalPrice = items.reduce((total, item) => total + item.price, 0);
    setTotalPrice(newTotalPrice);
  }, [items]);

  return <div>Total Price: ${totalPrice}</div>;
}


// function ShoppingCart({ items }) {
//     // totalPrice is a derived value calculated from the items prop
//     const totalPrice = items.reduce((total, item) => total + item.price, 0);
  
//     return <div>Total Price: ${totalPrice}</div>;
//   }
  