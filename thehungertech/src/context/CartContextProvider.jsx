import { useState } from "react";
import CartContext, {getInitCartData} from "./CartContext";

const CartContextProvider = ({ children }) => {
    const [cartData, setCartData] = useState(getInitCartData())
    return (
        <CartContext.Provider value={{cartData,setCartData}}>
            {children}
        </CartContext.Provider>
    )
};

export default CartContextProvider;
