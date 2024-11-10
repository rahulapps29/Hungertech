import React from "react";
import Layout from "../../Layout";
import { NavLink } from "react-router-dom";

function Categories() {
	return (
		<Layout>
			<h3>Categories Page</h3>
			<NavLink to="/category/de">category Details page</NavLink>
		</Layout>
	);
}

export default Categories;
