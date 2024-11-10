import { Routes, Route, Navigate } from "react-router-dom";
import {CategoryRoutes} from './domains/categories/routes.jsx'
import {DashboardRoutes} from './domains/dashboard/routes.jsx'
import { Suspense, lazy } from "react";
// import Checkout from './domains/checkout/Checkout.jsx'

const HomePage = lazy(()=>{
    return import('./domains/homePage/HomePage.jsx')
}) 
const About = lazy(()=>{
    return import('./domains/about/About.jsx')
})
const Checkout = lazy(()=>{
    return import('./domains/checkout')
})
const PageNotFound = lazy(()=>{
    return import('./domains/notfound/PageNotFound.jsx')
}) 


const PageRoutes = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route path="" element = {<HomePage />}></Route>
				<Route path="about" element={<About />}></Route>
				<Route path="checkout" element={<Checkout />}></Route>
				{CategoryRoutes}
				{DashboardRoutes}
				<Route path="/404" element = {<PageNotFound />}></Route>
				<Route path="*" element={<Navigate to= "404"></Navigate>}></Route>
			</Routes>
		</Suspense>
	)
}
export default PageRoutes;

