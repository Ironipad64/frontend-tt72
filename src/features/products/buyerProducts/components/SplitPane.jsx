import React from "react";
import styled from "styled-components";

const Parent = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	height: 80vh;
`;

const Left = styled.div`
	width: 20%;
	height: 100%;
`;

const Right = styled.div`
	width: 80%;
	height: 100%;
`;

const SplitPane = props => {
	return (
		<Parent>
			<Left>
				{props.left}
			</Left>
			<Right>
				{props.right}
			</Right>
		</Parent>
	);
};

export default SplitPane;