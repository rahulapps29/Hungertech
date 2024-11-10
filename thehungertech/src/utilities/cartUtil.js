export const getUpdatedCartDataAdd = (item, cart = []) => {
	let data;
	if (cart.length == 0) {
		const itemCopy = { ...item, qty: 1 };
		data = [itemCopy];
	} else {
		data = [...cart];
		const itemIndex = data.findIndex((cartItem) => {
			return cartItem._id == item._id;
		});
		if (itemIndex >= 0) {
			data[itemIndex].qty = data[itemIndex].qty + 1;
		} else {
			const itemCopy = { ...item, qty: 1 };
			data.push(itemCopy);
		}
	}
	localStorage.setItem("cartData", JSON.stringify(data));
	return data;
};

export const getUpdatedCartDataRemove = (item, cart = []) => {
	let data;
	data = [...cart];
	const itemIndex = data.findIndex((cartItem) => {
		return cartItem._id == item._id;
	});
	if (data[itemIndex].qty > 1) {
		data[itemIndex].qty = data[itemIndex].qty - 1;
	} else {
		data = data.filter((cartItem)=>{
            return cartItem._id !== item._id
        })
	}
	localStorage.setItem("cartData", JSON.stringify(data));
	return data;
};

export const getCartQuantity = (cart) => {
	let count = 0;
	cart.forEach((item) => {
		count = count + item.qty;
	});
	return count;
}
