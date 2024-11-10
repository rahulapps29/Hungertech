import React, { useEffect, useState } from "react";
import request from "../../../utilities/request";
import { NavLink } from "react-router-dom";
import EditIcon from "../../../assets/svg/EditIcon";
import DeleteIcon from "../../../assets/svg/deleteIcon";
import "./DashProductList.scss";
import {API_URLS} from '../../../constants/constant';

function DashProductList() {
	const [products, setProducts] = useState([]);
	const getProducts = async () => {
		const data = await request.get({
			url: API_URLS.getAllProducts,
		});
		setProducts(data.data);
	};
	const getCatNames = (catList) => {
		const catNames = catList.map((cat) => {
			return cat.name;
		});
		if (catNames.length) {
			return catNames.join(", ");
		} else {
			return "No Category Assigned";
		}
	};

    const delteProduct = async (pId) => {
		const data = await request.post({
			url: API_URLS.deleteProduct,
			data: { pId },
		});
		if (data.status == 200) {
			getProducts();
		}
	};

	useEffect(() => {
		getProducts();
	}, []);
	return (
		<div className="productList">
			<div>
				<table className="productList__table">
					<thead>
						<tr>
							<td>Product ID</td>
							<td>Product Name</td>
							<td>Category</td>
							<td>Out of Stock</td>
							<td>Recommended</td>
							{/* <td>Last Updtated</td> */}
							<td>Action</td>
						</tr>
					</thead>
					<tbody>
						{products.map((prod) => {
							return (
								<tr key={prod._id}>
									<td>{prod._id}</td>
									<td>{prod.name}</td>
									<td>{getCatNames(prod.cat)}</td>
									<td>{prod.inStock ? "No" : "Yes"}</td>
									<td>{prod.isRecommended ? "yes" : "No"}</td>
									<td>
										<NavLink to={`edit/${prod._id}`}>
											<EditIcon></EditIcon>
										</NavLink>
										<span
											className="productList__table--delete-icon"
											onClick={() => {
												delteProduct(prod._id);
											}}
										>
											<DeleteIcon></DeleteIcon>
										</span>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default DashProductList;
