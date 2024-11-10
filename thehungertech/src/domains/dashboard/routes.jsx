import { Route, Navigate } from "react-router-dom";
import { lazy } from "react";

const DashProduct = lazy(() => {
	return import("./product/DashProduct");
});

const CreateEditProduct = lazy(() => {
	return import("./product/CreateEditProduct");
});
const DashHome = lazy(() => {
	return import("./home/DashHome");
});

const DashCategory = lazy(() => {
	return import("./category/DashCategory");
});
const CreateEditCategory = lazy(() => {
	return import("./category/CreateEditCategory");
});


export const DashboardRoutes = (
	<Route path="dashboard/*">
		<Route path="" element={<DashHome />}></Route>
		<Route path="product">
			<Route path="" element={<DashProduct />}></Route>
			<Route path="create" element={<CreateEditProduct />}></Route>
			<Route path="edit/:id" element={<CreateEditProduct />}></Route>
		</Route>
		<Route path="category">
			<Route path="" element={<DashCategory />}></Route>
			<Route path="create" element={<CreateEditCategory />}></Route>
			<Route path="edit/:id" element={<CreateEditCategory />}></Route>
		</Route>
		<Route path="*" element={<Navigate to=""></Navigate>}></Route>
	</Route>
);
