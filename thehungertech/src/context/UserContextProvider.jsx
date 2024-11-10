import { useEffect, useState } from "react";
import UserContext, { getUserProfile } from "./UserContext";

const UserContextProvider = ({ children }) => {
	console.log('user context called')
	const [user, setUser] = useState();
	useEffect(() => {
		const fetchUserData = async () => {
			const userProfile = await getUserProfile();
			debugger;
			setUser(userProfile);
		};
		
		if(localStorage.getItem("isLoggedIn") && localStorage.getItem("user_token") && !user){
			fetchUserData();
		}
	}, []);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
