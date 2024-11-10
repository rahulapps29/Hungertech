import React, { useContext, useState } from "react";
import UserContext from "../../../context/UserContext";
import Wave from "../../../assets/svg/wave";
import request from "../../../utilities/request";
import { API_URLS } from "../../../constants/constant";
import "./Login.scss";

function Login() {
	console.log('login comp')
	const { user, setUser } = useContext(UserContext);
	const [showSignInModal, setShowSignInModal] = useState(false);
	const [showSignUpModal, setShowSignUpModal] = useState(false);
	const [signInData, setSignInData] = useState({ email: "", password: "" });
	const [signUpData, setSignUpData] = useState({ email: "", password: "", phone:'', lName:'', fName:''});
	console.log("user in login comp", user);

	const initiateLogin = () => {
		setShowSignInModal(true);
	};
	const handleSignInChange = (e) => {
		setSignInData({ ...signInData, [e.target.name]: e.target.value });
	};
	const handleSignUpChange = (e) => {
		setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
	};
	const doLogout = () => {
		setUser(undefined);
		localStorage.removeItem("isLoggedIn");
		localStorage.removeItem("user_token");
	}
	const doSignup = async () => {
		console.log("do login");
		console.log("data", signUpData);
		const resp = await request.post({
			url: API_URLS.signup,
			data: signUpData,
		});
		if (resp.token && resp.user) {
			setUser(resp.user);
			setShowSignUpModal(false);
			localStorage.setItem("isLoggedIn", true);
			localStorage.setItem("user_token", JSON.stringify(resp.token));
		}
	}
	const doLogin = async () => {
		console.log("do login");
		console.log("data", signInData);
		const resp = await request.post({
			url: API_URLS.doLogin,
			data: signInData,
		});
		if (resp.token && resp.user) {
			setUser(resp.user);
			setShowSignInModal(false);
			localStorage.setItem("isLoggedIn", true);
			localStorage.setItem("user_token", JSON.stringify(resp.token));
		}
	};
	return (
		<div className="login">
			{!user && (
				<span className="login__text" onClick={initiateLogin}>
					Login
				</span>
			)}
			{user && <span onClick={doLogout} className="login__text">Logout</span>}

			<>
				{(showSignInModal || showSignUpModal) && (
					<>
						<div className="login__overlay"></div>

						<div className="login__loginmodal">
							<div className="login__loginmodal--wave">
								<Wave></Wave>
								<span
									onClick={() => {
										setShowSignInModal(false);
										setShowSignUpModal(false);
									}}
									className="login__close"
								></span>
							</div>
							{showSignInModal && (
								<div className="login__signinform">
									<h3>Welcome!</h3>
									<div className="login__signinform--item">
										<input
											onChange={handleSignInChange}
											name="email"
											type="text"
											placeholder="Username"
										/>
									</div>
									<div className="login__signinform--item">
										<input
											name="password"
											type="Password"
											placeholder="Password"
											onChange={handleSignInChange}
										/>
									</div>
									<button className="login__button" onClick={doLogin}>
										Login
									</button>
									<p>
										Don't have an account yet..{" "}
										<b
											className="login__signin-signup-text"
											onClick={() => {
												setShowSignInModal(false);
												setShowSignUpModal(true);
											}}
										>
											Sign Up
										</b>
									</p>
								</div>
							)}

							{showSignUpModal && (
								<div className="login__signupform">
									<h3>SignUp!</h3>
									<div className="login__signupform--item">
										<input onChange={handleSignUpChange} name="fName" type="text" placeholder="First Name" />
									</div>
									<div className="login__signupform--item">
										<input onChange={handleSignUpChange} name="lName" type="text" placeholder="Last Name" />
									</div>
									<div className="login__signupform--item">
										<input onChange={handleSignUpChange} name="email" type="text" placeholder="Email" />
									</div>
									<div className="login__signupform--item">
										<input onChange={handleSignUpChange} name="phone" type="text" placeholder="Phone Number" />
									</div>

									<div className="login__signupform--item">
										<input
											name="password"
											type="Password"
											placeholder="Set Password"
											onChange={handleSignUpChange}
										/>
									</div>
									<button className="login__button" onClick={doSignup}>SignUp</button>
									<p>
										Already have an account ..{" "}
										<b
											className="login__signin-signup-text"
											onClick={() => {
												setShowSignInModal(true);
												setShowSignUpModal(false);
											}}
										>
											Sign In
										</b>
									</p>
								</div>
							)}
						</div>
					</>
				)}
			</>
		</div>
	);
}

export default Login;
