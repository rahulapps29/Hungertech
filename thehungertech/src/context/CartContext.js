import { createContext } from "react";

export const getInitCartData = () => {
	let initCartData = localStorage.getItem("cartData");
	console.log('cart context called')

	if (initCartData) {
		initCartData = JSON.parse(initCartData);
	} else {
		initCartData = [];
	}
	return initCartData;
};
const CartContext = createContext(getInitCartData());
export default CartContext;
