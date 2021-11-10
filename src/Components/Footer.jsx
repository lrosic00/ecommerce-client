import {
	Facebook,
	Instagram,
	MailOutline,
	Phone,
	Pinterest,
	Room,
	Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>ABOUT ME</Logo>
				<Desc>
					There are many varioations of passages of Lorem Ipsum available, but
					the majority have suffered alteration in some form, by injected
					humour, or randomised words which don't look even slightly believable.
				</Desc>
				<SocialContainer>
					<SocialIcon color="3b5999">
						<Facebook />
					</SocialIcon>
					<SocialIcon color="e4405f">
						<Instagram />
					</SocialIcon>
					<SocialIcon color="55acee">
						<Twitter />
					</SocialIcon>
					<SocialIcon color="e60023">
						<Pinterest />
					</SocialIcon>
				</SocialContainer>
			</Left>
			<Center>
				<Title>Useful Links</Title>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>Man Fashion</ListItem>
					<ListItem>Woman Fashion</ListItem>
					<ListItem>Accessories</ListItem>
					<ListItem>My Account</ListItem>
					<ListItem>Order Tracking</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Terms of Conditions</ListItem>
				</List>
			</Center>
			<Right>
				<Title>Contact</Title>
				<ContactItem>
					<Room />
					Ulica Djure Djurica, 10000 Zagreb
				</ContactItem>
				<ContactItem>
					<Phone />
					385 99 00 11 2233
				</ContactItem>
				<ContactItem>
					<MailOutline />
					Djuro@djuric.com
				</ContactItem>
				<Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
			</Right>
		</Container>
	);
};

export default Footer;

const Container = styled.div`
	display: flex;
	${mobile({
		flexDirection: "column",
	})}
`;
const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;

	padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
	margin: 20px 0px;
`;
const SocialContainer = styled.div`
	display: flex;
`;

const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	color: white;
	background-color: #${(props) => props.color};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
`;
const Center = styled.div`
	flex: 1;
	padding: 20px;
	${mobile({
		display: "none",
	})}
`;
const Title = styled.h3`
	margin-bottom: 30px;
`;
const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
`;
const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;
`;

const Right = styled.div`
	flex: 1;
	padding: 20px;
	${mobile({
		backgroundColor: "#ececec",
	})}
`;

const ContactItem = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-items: center;

	svg {
		margin-right: 10px;
	}
`;
const Payment = styled.img`
	width: 50%;
`;
