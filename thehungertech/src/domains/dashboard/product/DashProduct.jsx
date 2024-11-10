import React from "react";
import DashboardLayout from "../DashboardLayout";
import DashProductList from "./DashProductList";
import { NavLink } from "react-router-dom";

function DashProduct() {
	return (
		<DashboardLayout>
			<div className="dash-prodPage">
				<NavLink to="create">
					<button>Create New Product</button>
				</NavLink>

				<div>All Products</div>
				<DashProductList></DashProductList>
			</div>
		</DashboardLayout>
	);
}

export default DashProduct;
