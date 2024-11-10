import { Route } from "react-router-dom";
import {lazy} from 'react';

const Categories = lazy(()=>{
    return import('./Categories')
})
const CategoryDetails = lazy(()=>{
    return import('./categoryDetails/CategoryDetails')
})


export const CategoryRoutes = (
    <Route path = "category/*">
        <Route path = "" element={<Categories />}></Route>
        <Route path = ":id" element={<CategoryDetails />}></Route>
    </Route>
)
