import React from "react";
import DashboardLayout from "../DashboardLayout";
import DashCatList from "./DashCatList";
import { NavLink } from "react-router-dom";

function DashCategory() {
	return (
		<DashboardLayout>
			<div className="dash-catPage">
				<NavLink to="create">
					<button>Create New Category</button>
				</NavLink>

				<div>All Categories</div>
				{/* <CreateCat></CreateCat> */}
				<DashCatList></DashCatList>
			</div>
		</DashboardLayout>
	);
}

export default DashCategory;
