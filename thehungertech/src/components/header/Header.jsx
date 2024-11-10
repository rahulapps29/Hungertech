import React from "react";
import { NavLink } from "react-router-dom";
import { navItems } from "./navItem";
import Cart from "../../components/common/Cart/Cart";
import { BASE_ASSETS_URL } from "../../constants/constant";
import Login from "../common/Login/Login";
import "./Header.scss";

function Header() {
	return (
		<div className="header">
			<div className="header__container">
				<div className="header__brand-logo">
					<img
						className="header__brand-logo--image"
						src={`${BASE_ASSETS_URL}/images/logo.png`}
					></img>
				</div>
				<div className="header__nav-container">
					{navItems.map((navItem, index) => {
						return (
							<div className="header__nav-container--item" key={index}>
								{navItem.link && (
									<NavLink to={navItem.link}>{navItem.label}</NavLink>
								)}
							</div>
						);
					})}
					<div className="header__nav-container--item" key="login">
						<Login></Login>
					</div>
					<div className="header__nav-container--item" key="cart">
						<NavLink to="/checkout">
							<Cart></Cart>
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
