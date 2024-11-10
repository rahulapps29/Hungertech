import React from "react";
import Header from "./components/header/Header";
import CartContextProvider from "./context/CartContextProvider";
import UserContextProvider from "./context/UserContextProvider";

function Layout({ children }) {
	return (
		<UserContextProvider>
			<CartContextProvider>
				<div>
					<Header></Header>
					<div className="page-body">
						<div className="main-page-content">{children}</div>
					</div>

					{/* <Footer></Footer> */}
				</div>
			</CartContextProvider>
		</UserContextProvider>
	);
}

export default Layout;
