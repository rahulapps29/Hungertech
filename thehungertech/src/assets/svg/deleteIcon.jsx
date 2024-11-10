import React from "react";

function DeleteIcon({className}) {
	return (
		<>
			<span className={`icon ${className}`}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width="24px"
					height="24px"
				>
					<path d="M 10 2 L 9 3 L 3 3 L 3 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 4.3652344 7 L 6.0683594 22 L 17.931641 22 L 19.634766 7 L 4.3652344 7 z" />
				</svg>
			</span>
		</>
	);
}

export default DeleteIcon;
