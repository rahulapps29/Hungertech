import React, { useEffect, useState } from "react";
import request from "../../../../utilities/request";
import { NavLink } from "react-router-dom";
import {API_URLS} from '../../../../constants/constant'
import {BASE_SERVER_URL} from '../../../../constants/constant'
import "./CategoryWidget.scss";


function CategoryWidget() {
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		request
			.get({ url: API_URLS.getcategories })
			.then((resp) => {
				console.log("resp category:", resp);
				setCategories(resp.data);
			});
	}, []);

	return (
		<div className="categoryWidget section">
			<div className="categoryWidget__heading">
				<h3>What can end your craving ...?</h3>
			</div>

			<div className="categoryWidget__catList">
				{categories.map((category) => {
					return (
						
							<div className="categoryWidget__catList--item" key={category.id}>
								<NavLink to={`category/${category._id}`}>
								<img
									className="categoryWidget__catList--item-image"
									src={`${BASE_SERVER_URL}/${category.image}`}
								></img>
								<div className="categoryWidget__catList--item-content">
									<p>{category.name}</p>
									<p className="categoryWidget__catList--item-desc content-desc">
										{category.desc}
									</p>
								</div>
								</NavLink>
							</div>
						
					);
				})}
			</div>
		</div>
	);
}

export default CategoryWidget;
