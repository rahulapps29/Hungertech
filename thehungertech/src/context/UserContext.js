import { createContext } from "react";
import request from "../utilities/request";
import { API_URLS } from "../constants/constant";

const getUserToken = () => {
	return JSON.parse(localStorage.getItem("user_token"));
};
export const getUserProfile = () => {
	const userPromise = new Promise(async (resolve, reject) => {
		const response = await request.get({
			url: API_URLS.userProfile,
			headers: {
				Authorization: "Bearer " + getUserToken(),
			},
		});
		if (response.data.user) {
			resolve(response.data.user);
		} else {
			resolve(undefined);
		}
	});
	return userPromise;
};
const UserContext = createContext();
export default UserContext;
