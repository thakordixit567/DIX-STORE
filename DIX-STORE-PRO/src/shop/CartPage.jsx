import React, { useEffect, useState } from 'react'

const CartPage = () => {
const [CartItems, setCartItems] = useState([]);
useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cart") || []);
    setCartItems(storedCartItems);
},[])

const calculateTotalprice = (item) => {
    return item.price * item.quantity
}

const handleIncrese = (item) => {
    item.quantity += 1;
    setCartItems([...CartItems]);

    localStorage.setItem("cart", JSON.stringify(CartItems));
}
  return (
    <div>
      CartPage
    </div>
  )
}

export default CartPage
