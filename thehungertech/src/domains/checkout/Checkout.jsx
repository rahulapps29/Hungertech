import React , { useContext } from "react";
import OrderList from "./components/orderList/OrderList";
// import Login from '../../components/common/Login'
import UserContext from "../../context/UserContext"

function Checkout() {
	const { user, setUser } = useContext(UserContext);
	debugger;
	return (
		<>
			<h3 className="section">Checkout Page</h3>
            <OrderList></OrderList>
			<div>
				<button>Confirm Order</button>
				{/* {!user && <><Login></Login><p> to place your order</p></>} */}
			</div>
		</>
	);
}

export default Checkout;
