import React from "react";
import { NavLink } from "react-router-dom";
import { navItems } from "./navItems";

function DashboardSideNav() {
	return (
		<div className="sidenav">
			{navItems.map((navItem, index) => {
				return (
					<div className="sidenav--item" key={index}>
						<NavLink to={navItem.link}>{navItem.label}</NavLink>
					</div>
				);
			})}
		</div>
	);
}

export default DashboardSideNav;
