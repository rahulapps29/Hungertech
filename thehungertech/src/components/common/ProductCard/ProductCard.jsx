import React, { useContext } from "react";
import CartContext from "../../../context/CartContext";
import CartCounter from '../../common/CartCounter/CartCounter.jsx'
import {getUpdatedCartDataAdd} from '../../../utilities/cartUtil.js'
import {BASE_SERVER_URL} from '../../../constants/constant.js'


import "./ProductCard.scss";

function ProductCard({ product }) {
	const { cartData, setCartData } = useContext(CartContext);
	const itemIndexInCart = cartData.findIndex((item) => {
		return item._id === product._id;
	});
	const existInCart = itemIndexInCart >= 0 ? true : false;

	const addtoCart = () => {
		const updatedCartData = getUpdatedCartDataAdd(product, cartData);
		setCartData(updatedCartData);
	};

	return (
		<div className="productCard">
			<div className="productCard__image-container">
				<img className="productCard__image" src={`${BASE_SERVER_URL}/${product.image}`}></img>
				<div className="productCard__gradient-container"></div>
			</div>
			<div className="productCard__content-container">
				<div className="productCard__content">
					<p>{product.name}</p>
					<p className="productCard__content-desc content-desc">
						{product.desc}
					</p>
					<p className="productCard__content-price">₹{product.price}</p>
				</div>
				<div className="productCard__cart-button">
					{existInCart && (
						<CartCounter product={product}></CartCounter>
						
					)}
					{!existInCart && product.inStock && <button onClick={addtoCart}>ADD</button>}
					{!product.inStock && <span>Out Of Stock</span>}
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
