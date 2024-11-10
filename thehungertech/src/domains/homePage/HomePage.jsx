import React from "react";
import Layout from "../../Layout";
import CategoryWidget from "./components/categoryWidget/CategoryWidget";
import RecommendedProducts from "./components/recommendedProducts/RecommendedProducts.jsx";

function HomePage() {
	return (
		<Layout>
			<CategoryWidget></CategoryWidget>
			<RecommendedProducts></RecommendedProducts>
			{/* offers section */}
		</Layout>
	);
}

export default HomePage;
