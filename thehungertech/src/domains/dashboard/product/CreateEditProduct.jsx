import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DashboardLayout from "../DashboardLayout";
import request from "../../../utilities/request";
import FileUpload from "../common/components/FileUpload";
import Multiselect from "multiselect-react-dropdown";
import { API_URLS } from "../../../constants/constant";

import "./EditProduct.scss";

function CreateEditProduct() {
	const initProdVal = {
		name: "",
		price: "",
		desc: "",
		image: "",
		inStock: true,
		cat: [],
	};
	const [product, setProduct] = useState(initProdVal);
	const [catList, setCatList] = useState([]);
	const params = useParams();
	const navigate = useNavigate();
	const productId = params.id;
	const isEdit = !!productId;

	const getProductDetail = async () => {
		const data = await request.get({
			url: API_URLS.getproductdetail,
			data: {
				pId: productId,
			},
		});
		console.log("prod detail::", data.data);
		setProduct(data.data);
	};
	const getAllCat = () => {
		request.get({ url: API_URLS.getcategories }).then((resp) => {
			console.log("resp category:", resp.data);
			setCatList(resp.data);
		});
	};
	const handeChange = (e) => {
		setProduct({ ...product, [e.target.name]: e.target.value });
	};
	const handeToggleInStock = (e) => {
		setProduct({ ...product, inStock: !e.target.checked });
	};
	const handeToggleIsRecommended = (e) => {
		setProduct({ ...product, isRecommended: e.target.checked });
	};
	
	const updateFileName = (filename) => {
		setProduct({ ...product, image: filename });
	};
	const navigateToProdPage = () => {
		navigate("/dashboard/product");
	};
	const handleCancel = () => {
		navigateToProdPage();
	};
	const handleSave = async () => {
		if (isEdit) {
			const data = await request.post({
				url: API_URLS.updateproduct,
				data: product,
			});
			if (data.status == 200) {
				navigateToProdPage();
			}
		} else {
			const resp = await request.post({
				url: API_URLS.createproduct,
				data: product,
			});
			console.log(resp);
			navigateToProdPage();
		}
	};
	const handleCatSelection = (selectedList, selectedItem) => {
		setProduct({ ...product, cat: selectedList });
	};
	const handleCatRemove = (selectedList, removedItem) => {
		setProduct({ ...product, cat: selectedList });
	};
	useEffect(() => {
		if (isEdit) {
			getProductDetail();
		}
		getAllCat();
	}, []);
	return (
		<DashboardLayout>
			<div className="editproduct">
				<h2 className="editproduct__title">
					{isEdit ? "Edit Product" : "Create Product"}
				</h2>
				<div className="editproduct__container">
					<div className="editproduct__container--name editproduct__container--item">
						<label>Product Name:</label>
						<textarea
							rows="3"
							cols="50"
							value={product.name}
							name="name"
							onChange={handeChange}
						/>
					</div>
					<div className="editproduct__container--name editproduct__container--item">
						<label>Product Price:</label>
						<input
							type="number"
							value={product.price}
							name="price"
							onChange={handeChange}
						/>
					</div>
					<div className="editproduct__container--desc editproduct__container--item">
						<label>Product Desc:</label>
						<textarea
							rows="4"
							cols="50"
							value={product.desc}
							name="desc"
							onChange={handeChange}
						/>
					</div>
					<div className="editproduct__container--cat editproduct__container--item">
						<label>Product Category:</label>
						<div className="editproduct__container--cat-list">
							<Multiselect
								options={catList}
								selectedValues={product.cat}
								onSelect={handleCatSelection}
								onRemove={handleCatRemove}
								displayValue="name"
							></Multiselect>
						</div>
					</div>

					<div className="editproduct__container--feat editproduct__container--item">
						<label>Out Of Stock:</label>
						<input
							type="checkbox"
							checked={!product.inStock}
							name="inStock"
							onChange={handeToggleInStock}
						/>
					</div>
					<div className="editproduct__container--feat editproduct__container--item">
						<label>Add to Recommendations</label>
						<input
							type="checkbox"
							checked={product.isRecommended}
							name="isRecommended"
							onChange={handeToggleIsRecommended}
						/>
					</div>
					<div className="editproduct__container--image editproduct__container--item">
						<label>Image:</label>
						{product.image && <img src={product.image}></img>}
						<FileUpload onUpload={updateFileName}></FileUpload>
					</div>
				</div>
				<div className="editproduct__buttons">
					<button onClick={handleSave}>Save</button>
					<button onClick={handleCancel}>Cancel</button>
				</div>
			</div>
		</DashboardLayout>
	);
}

export default CreateEditProduct;

// export default EditProduct
