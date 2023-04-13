import { Paper, Typography } from "@mui/material";
import React from "react";
import Skill from "./Skill";

export default function Card({ item }) {
	return (
		<Paper elevation={5} sx={{ minHeight: "300px" }}>
			<Typography variant="h6" sx={{ textAlign: "center" }} pt={2}>
				{item.title}
			</Typography>
			{item.skills.map((skill, index) => (
				<Skill skill={skill} key={index} />
			))}
		</Paper>
	);
}
