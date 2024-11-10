export const BASE_SERVER_URL= 'http://localhost:8000';
export const BASE_API_URL = `${BASE_SERVER_URL}/api`;
export const BASE_ASSETS_URL = `${BASE_SERVER_URL}/files/assets`
export const API_URLS = {
    getAllProducts:`${BASE_API_URL}/product/getAllproducts`,
    getrecommendedprods:`${BASE_API_URL}/product/getrecommendedprods`,
    deleteProduct:`${BASE_API_URL}/product/deleteProduct`,
    getproductdetail:`${BASE_API_URL}/product/getproductdetail`,
    updateproduct:`${BASE_API_URL}/product/updateproduct`,
    createproduct:`${BASE_API_URL}/product/createproduct`,
    getcategories:`${BASE_API_URL}/category/getcategories`,
    deleteCategory:`${BASE_API_URL}/category/deleteCat`,
    getcategorydetail:`${BASE_API_URL}/category/getcategorydetail`,
    updatecategory:`${BASE_API_URL}/category/updatecategory`,
    createcategory:`${BASE_API_URL}/category/createcategory`,
    uploadFile:`${BASE_API_URL}/upload`,
    doLogin:`${BASE_API_URL}/user/login`,
    signup:`${BASE_API_URL}/user/signup`,
    userProfile:`${BASE_API_URL}/user/userprofile`

    
}