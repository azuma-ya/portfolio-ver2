import React from "react";
import Header from "../components/header/Header";
import "./Home.css";
import Profile from "../components/profile/Profile";
import Hero from "../components/hero/Hero";
import Skills from "../components/skills/Skills";
import Works from "../components/works/Works";
import Contact from "../components/contact/Contact";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function Home() {
	return (
		<div id="home">
			<Header />
			<Hero />
			<Profile />
			<Skills />
			<Works />
			<Contact />
			<Box
				component="footer"
				sx={{
					backgroundColor: "#21252f",
					height: "100px",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Typography variant="body1" color="white">
					©2023 Aoyama Kazuki
				</Typography>
			</Box>
		</div>
	);
}
