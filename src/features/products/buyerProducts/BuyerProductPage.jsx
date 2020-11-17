import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Header from "../../shared/Header";
import BProductCard from "./components/BProductCard";

const Page = styled.div`
	display: flex;
	flex-flow: column nowrap;
`;

const Banner = styled.div`
	margin: 3rem 0;
	width: 100vw;
	background-color: var(--pDark);
	height: 10rem;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-evenly;
	align-items: center;
	h1 {
		display: block;
		color: var(--pText);
		font-size: 2rem;
		text-decoration: none;
	}
`;
const BuyerProductPage = props => {
	const products = useSelector(state => state.buyerProduct.products);
	return (
		<Page>
			<Header />
			<Banner>
				<h1>Buyer Products Page</h1>
			</Banner>
			{
				products.map(product => {
					return <BProductCard product={product} />
				})
			}
		</Page>
	);
}

export default BuyerProductPage;