import { createSlice } from "@reduxjs/toolkit";

// products: [
// 	{
// 		"id": 0,
// 		"owner_id": 1,
// 		"product_name": "Onions",
// 		"all_amount": 30.5,
// 		"available_amount": 30,
// 		"measurement_unit": "Kg",
// 		"price": 1,
// 		"currency": "USD"
// 	},
// 	{
// 		"id": 1,
// 		"owner_id": 1,
// 		"product_name": "French Bread",
// 		"all_amount": 20,
// 		"available_amount": 14,
// 		"measurement_unit": "Kg",
// 		"price": 0.5,
// 		"currency": "USD"
// 	},
// 	{
// 		"id": 2,
// 		"owner_id": 2,
// 		"product_name": "Pumpkins",
// 		"all_amount": 15,
// 		"available_amount": 12,
// 		"measurement_unit": "Kg",
// 		"price": 2,
// 		"currency": "USD"
// 	},
// ],

export const initialState = {
	status: "idle",
	error: "",
	cart: [],
	totalPrice: 0,
	product: [],
}

const buyerProductSlice = createSlice({
	name: "buyerProducts",
	initialState,
	reducers: {
		addToCart2: (state, action) => {
			state.cart.push(action.payload);
		},
		addToCart: {
			reducer: (state, action) => {
				const { id, product, quantity } = action.payload;
				const indexInCart = state.cart.findIndex(cp => { return (cp.id === product.id) });
				if (indexInCart > -1) {
					const prevItem = { ...state.cart[indexInCart] };
					prevItem.quantity += quantity;
					state.cart[indexInCart] = prevItem;
					state.totalPrice += (action.payload.quantity * action.payload.product.price);
				} else {
					state.cart.push(action.payload);
					state.totalPrice += (action.payload.quantity * action.payload.product.price);
				}
			},
			prepare: (product, quantity) => {
				return {
					payload: { id: product.id, product, quantity: Number(quantity) }
				};
			},
		},
		removeFromCart: (state, action) => {
			// const { id } = action.payload;
			// const indexInCart = state.cart.findIndex(cp => { return (cp.id === id) });
			state.cart = state.cart.filter(p => {
				return p.id !== action.payload;
			})
		},
		// removeFromCart: {
		// 	reducer: (state, action) => {
		// 		const { id } = action.payload;
		// 		const indexInCart = state.cart.findIndex(cp => { return (cp.id === product.id) })

		// 	},
		// 	prepare: (id) => {
		// 		return {
		// 			payload: {
		// 				id: id
		// 			}
		// 		}
		// 	},

		// },
	},
	extraReducers: {},
});

export const { addToCart, addToCart2, removeFromCart } = buyerProductSlice.actions;

export default buyerProductSlice.reducer;