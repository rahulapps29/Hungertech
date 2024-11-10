import React, { useEffect, useContext, useState } from "react";
import request from "../../../../utilities/request";
import "./RecommendedProducts.scss";
import ProductCard from '../../../../components/common/ProductCard/ProductCard'
import {API_URLS} from '../../../../constants/constant'

function RecommendedProducts() {
	const [products, setProduct] = useState([]);
	
	useEffect(() => {
		request
			.get({ url: API_URLS.getrecommendedprods })
			.then((resp) => {
				console.log("resp product:", resp);
				setProduct(resp.data);
			});
	}, []);


	return (
		<div className="recommendedProducts section">
			<div className="recommendedProducts__heading">
				<h3>Recommended Dishes</h3>
			</div>

			<div className="recommendedProducts__list">
				{products.map((product) => {
					return (
						<ProductCard product={product} key={product._id}/>
					);
				})}
			</div>
		</div>
	);
}

export default RecommendedProducts;
