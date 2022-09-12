import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>

	<h1 style={{ color: "white",
				textAlign: "center",
				marginTop: "-50px", 
                position:"absolute",
                left:'4%',
                top:'32%',}}>
		Rand Hotel
	</h1>

	<Container>
		<Row>
		<Column>
			<Heading>Our Hotel</Heading>
			<FooterLink href="#">Booking</FooterLink>
			<FooterLink href="#">About Us</FooterLink>
			<FooterLink href="#">My Account</FooterLink>
            <FooterLink href="#">Admin</FooterLink>
		</Column>
		<Column>
			<Heading>Support</Heading>
			<FooterLink href="#">Help Center</FooterLink>
			<FooterLink href="#">Safety information</FooterLink>
			<FooterLink href="#">Cacellation options</FooterLink>
			<FooterLink href="#">FAQs</FooterLink>
		</Column>
		<Column>
			<Heading>CONTACT INFO</Heading>
			<FooterLink href="#">Phone:011 289 4739</FooterLink>
			<FooterLink href="#">Email: book@randhotel.com</FooterLink>
			<FooterLink href="#">Location: 100 Rissik Street,JHB SA</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
