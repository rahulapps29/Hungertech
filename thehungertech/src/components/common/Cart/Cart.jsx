import React, {useContext} from "react";
import CartContext from "../../../context/CartContext";
import {getCartQuantity} from "../../../utilities/cartUtil"
import './Cart.scss'


function Cart() {
    const { cartData, setCartData } = useContext(CartContext);
    const cartQuantity = getCartQuantity(cartData);
	return (
        <div className="cart">
            <span className="cart__icon">
			<svg viewBox="-1 0 37 32" height="20" width="20" fill="#686b78">
				<path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
			</svg>
			<span className="cart__quantity">{cartQuantity}</span>
            
		</span>
        <span className="cart__text">Cart</span>
        </div>
		
	);
}

export default Cart;
