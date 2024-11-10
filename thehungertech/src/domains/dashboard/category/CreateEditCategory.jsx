import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DashboardLayout from "../DashboardLayout";
import request from "../../../utilities/request";
import './EditCategory.scss'
import FileUpload from '../common/components/FileUpload'
import {API_URLS,BASE_SERVER_URL} from '../../../constants/constant'


function CreateEditCategory() {
	const navigate = useNavigate();
	const initCatVal = {
		name:'',
		desc:'',
		isFeatured:true,
		image:''
	}
	const [category, setCategory] = useState(initCatVal);
	const params = useParams();
	
	const catId = params.id;
	const isEdit = !!catId;
	const getCategoryDetail = async () => {
		const data = await request.get({
			url: API_URLS.getcategorydetail,
			data: {
				catId: catId,
			},
		});
		console.log("cat detail::", data.data);
		setCategory(data.data);
	};
	const handleCancel = ()=> {
		navigate("/dashboard/category");
	}
	const handleSave = async () => {
		if(isEdit) {
			const data = await request.post({
				url: API_URLS.updatecategory,
				data: category
			});
			if(data.status == 200){
				navigate("/dashboard/category");
			}
			//update
		}
		else{
			//create
			
			const resp = await request.post({url: API_URLS.createcategory,
				data: category})
				console.log(resp)
				navigate("/dashboard/category");

		}
	}
	const handeChange = (e) => {
		setCategory({...category,[e.target.name]:e.target.value})
	}
	const handeToggleIsFeature = (e) => {
		setCategory({...category,isFeatured:e.target.checked})
	}
	const updateFileName = (filename) => {
		setCategory({...category,image:filename})
	}
	useEffect(() => {
		if(isEdit){
			getCategoryDetail();
		}
		
	}, []);
	return (
		<DashboardLayout>
			<div className="editcat">
        
        <h2 className="editcat__title">{isEdit ? 'Edit Category' : 'Create Category'}</h2>
				<div className="editcat__container">
					<div className="editcat__container--name editcat__container--item">
						<label>Category Name:</label>
						<input  name="name" type="text" value={category.name} onChange={handeChange}/>
					</div>
					<div className="editcat__container--desc editcat__container--item">
						<label>Category Desc:</label>
						<textarea name="desc" rows="4" cols="50" value={category.desc} onChange={handeChange}/>
					</div>
					<div className="editcat__container--feat editcat__container--item">
						<label>Is Featured:</label>
						<input name="isFeatured" type="checkbox" checked={category.isFeatured} onChange={handeToggleIsFeature}/>
					</div>
					<div className="editcat__container--image editcat__container--item">
						<label>Image:</label>
						{category.image && <img src={`${BASE_SERVER_URL}/${category.image}`}></img>}
						<FileUpload onUpload={updateFileName}></FileUpload>
					</div>
				</div>
        <div className="editcat__buttons">
          <button onClick={handleSave}>
            Save Changes
          </button>
          <button onClick={handleCancel}>
            Cancel
          </button>

        </div>
			</div>
			
		</DashboardLayout>
	);
}

export default CreateEditCategory;
