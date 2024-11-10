import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";

import Layout from '../../../Layout'
import ProductCard from '../../../components/common/ProductCard/ProductCard'
import request from '../../../utilities/request'
import './CategoryDetails.scss'
import {API_URLS} from '../../../constants/constant'


function CategoryDetails() {
  const [products, setProduct] = useState([]);
  const params = useParams();
  const catId = params.id
  useEffect(() => {
		request
			.get({ url: `${API_URLS.getAllProducts}/${catId}` })
			.then((resp) => {
				setProduct(resp.data);
			});
	}, []);
  return (
    <Layout>
      <h3 className='section'>Best in this Category</h3>
      <div className="productslist">
				{products.map((product) => {
					return (
						<ProductCard product={product} key={product.pid}/>
					);
				})}
			</div>
    </Layout>
    
  )
}

export default CategoryDetails