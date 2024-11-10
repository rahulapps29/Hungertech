import React , {useContext} from "react";
import CartContext from '../../../context/CartContext'

import {
	getUpdatedCartDataRemove,
	getUpdatedCartDataAdd,
} from "../../../utilities/cartUtil";

import "./CartCounter.scss";


function CartCounter({product}) {
    const { cartData, setCartData } = useContext(CartContext);
	const itemIndexInCart = cartData.findIndex((item) => {
		return item._id === product._id;
	});
    const addtoCart = () => {
		const updatedCartData = getUpdatedCartDataAdd(product, cartData);
		setCartData(updatedCartData);
	};
	const removeFromCart = () => {
		const updatedCartData = getUpdatedCartDataRemove(product, cartData);
		setCartData(updatedCartData);
	};
	const getCartQuantity = () => {
		return cartData[itemIndexInCart].qty;
	};
	return (
		<div className="cartcounter">
			<span className="cartcounter__item" onClick={removeFromCart}>
				-
			</span>
			<span className="cartcounter__item">
				{getCartQuantity()}
			</span>
			<span className="cartcounter__item" onClick={addtoCart}>
				+
			</span>
		</div>
	);
}

export default CartCounter;
