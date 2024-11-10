import React, { useEffect, useState } from "react";
import request from "../../../utilities/request";
import { NavLink } from "react-router-dom";
import "./DashCatList.scss";
import EditIcon from "../../../assets/svg/EditIcon";
import DeleteIcon from "../../../assets/svg/deleteIcon";
import {API_URLS} from  '../../../constants/constant'

function DashCatList() {
	const [catList, setCatList] = useState([]);
	const getCategories = async () => {
		const data = await request.get({
			url: API_URLS.getcategories,
		});
		setCatList(data.data);
	};
	const delteCategory = async (catId) => {
		const data = await request.post({
			url: API_URLS.deleteCategory,
			data: { catId },
		});
		if (data.status == 200) {
			getCategories();
		}
	};
	useEffect(() => {
		getCategories();
	}, []);
	return (
		<div className="catList">
			<div>
				<table className="catList__table">
					<thead>
						<tr>
							<td>Category ID</td>
							<td>Category Name</td>
							<td>Is Featured</td>
							{/* <td>Last Updtated</td> */}
							<td>Action</td>
						</tr>
					</thead>
					<tbody>
						{catList.map((cat) => {
							return (
								<tr key={cat._id}>
									<td>{cat._id}</td>
									<td>{cat.name}</td>
									<td>{cat.isFeatured ? "Yes" : "No"}</td>
									<td>
										<NavLink to={`edit/${cat._id}`}>
											<EditIcon></EditIcon>
										</NavLink>
										<span
											className="catList__table--delete-icon"
											onClick={() => {
												delteCategory(cat._id);
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

export default DashCatList;
