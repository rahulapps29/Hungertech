import React from "react";
import Header from "../../components/header/Header";
import "./PageNotFound.scss";
import Layout from "../../Layout";

function ErrorPage() {
	return (
		<Layout>
			<div className="errorpage">
				<h2>Sorry could not find anything</h2>
			</div>
		</Layout>
	);
}

export default ErrorPage;
