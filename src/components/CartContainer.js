import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { openModal } from "../features/modal/modalSlice";

const CartContainer = () => {
  const { cartItems, amount, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (amount < 1)
    return (
      <section className="cart">
        <header>
          <h2>Your Shopping Bag</h2>
          <h4 className="empty-cart"> your current cart is empty</h4>
        </header>
      </section>
    );
  return (
    <section className="cart">
      <header>
        <h2> Your Shopping Bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total : <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => {
            dispatch(openModal());
            // dispatch(clearCart());
          }}
        >
          Clear Cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
