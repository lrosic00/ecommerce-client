import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import Products from "../Components/Products";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router";

const ProductList = () => {
	const location = useLocation();
	const cat = location.pathname.split("/")[2];
	const [filter, setFilter] = useState({});
	const [sort, setSort] = useState("newest");

	const handleFilters = (e) => {
		setFilter({ ...filter, [e.target.name]: e.target.value });
	};

	console.log(filter);
	return (
		<Container>
			<Announcement />
			<Navbar />
			<Title>{cat.toUpperCase()}</Title>
			<FilterContainer>
				<Filter>
					<FilterText selected>Filter products: </FilterText>
					<Select name="color" onChange={handleFilters}>
						<Option>Color</Option>
						<Option>white</Option>
						<Option>black</Option>
						<Option>red</Option>
						<Option>blue</Option>
						<Option>yellow</Option>
						<Option>green</Option>
					</Select>
					<Select name="size" onChange={handleFilters}>
						<Option selected>Size</Option>
						<Option>XS</Option>
						<Option>S</Option>
						<Option>M</Option>
						<Option>L</Option>
						<Option>XL</Option>
					</Select>
				</Filter>
				<Filter>
					<FilterText>Sort products: </FilterText>
					<Select onChange={(e) => setSort(e.target.value)}>
						<Option value="newest" selected>
							Newest
						</Option>
						<Option value="asc">Price (asc)</Option>
						<Option value="desc">Price (desc)</Option>
					</Select>
				</Filter>
			</FilterContainer>
			<Products cat={cat} filters={filter} sort={sort} />
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default ProductList;

const Container = styled.div``;

const Title = styled.h1`
	margin: 20px;
`;

const FilterContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Filter = styled.div`
	margin: 20px;
	${mobile({
		margin: "0 20px",
		display: "flex",
		flexDirection: "column",
	})}
`;
const FilterText = styled.span`
	font-size: 20px;
	font-weight: 600;
	margin-right: 20px;
	${mobile({
		marginRight: "0",
	})}
`;

const Select = styled.select`
	padding: 10px;
	margin-right: 20px;
	${mobile({
		margin: "10px 0",
	})}
`;
const Option = styled.option``;
