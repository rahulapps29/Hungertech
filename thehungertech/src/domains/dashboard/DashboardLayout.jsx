import React from "react";
import DashboardSideNav from "./navigation/DashboardSideNav";
import './dashLayout.scss'

function DashboardLayout({ children }) {
	return (
		<div>
			<DashboardSideNav></DashboardSideNav>
			<div className="page-body">
				<div className="main-page-content">{children}</div>
			</div>

			{/* <Footer></Footer> */}
		</div>
	);
}

export default DashboardLayout;
