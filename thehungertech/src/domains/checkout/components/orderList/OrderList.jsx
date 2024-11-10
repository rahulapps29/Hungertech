import React, { useContext } from "react";
import CartCounter from '../../../../components/common/CartCounter/CartCounter.jsx'
import CartContext from "../../../../context/CartContext";

import "./OrderList.scss";

export default function OrderList() {
	const { cartData, setCartData } = useContext(CartContext);

    const getOrderTotal = ()=>{
        let total = 0;
        cartData.forEach((item)=>{
            total = total + (item.price * item.qty)
        })
        return total
    }
	console.log("cartData in carts:", cartData);
	return (
		<div className="order">
			{cartData && cartData.length > 0 && (
				<div class="section">
					<p>Here is your order summary</p>
					<div>
						<div className="order__list section">
							<div className="order__list--item">Product Name</div>
							<div className="order__list--item">Price</div>
						</div>

						{cartData.map((orderItem,index) => {
							return (
								<div className="order__list" key={index}>
									<div className="order__list--item">
										<span className="order__list--prodname">{orderItem.name}</span>
                                        <span className="order__list--cartcounter">
                                        <CartCounter product={orderItem}></CartCounter>
                                        </span>
                                        
										
									</div>
									<div className="order__list--item">
										{orderItem.qty * orderItem.price}
									</div>
								</div>
							);
						})}
                        <div className="order__list">
                            <div className="order__list--item">Bill Total</div>
                            <div className="order__list--item">{getOrderTotal()}</div>
                        </div>
					</div>
				</div>
			)}
		</div>
	);
}
