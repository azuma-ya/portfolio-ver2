import { Box, Grid } from "@mui/material";
import React from "react";
import Card from "./Card";
import "./Skills.css";
import { skillsData } from "../../data";

export default function Skills() {
	return (
		<section id="skills">
			<div className="container">
				<div className="section-title-area">
					<h4 className="section-logo">SKILLS</h4>
					<h3 className="section-title">My skills</h3>
				</div>
				<Box sx={{ flexGrow: 1, width: "100%" }}>
					<Grid container spacing={2}>
						{skillsData.map((item, index) => (
							<Grid item xs={11} sm={4} key={index} sx={{ mx: "auto" }}>
								<Card item={item} />
							</Grid>
						))}
					</Grid>
				</Box>
			</div>
		</section>
	);
}
