import {
	Box,
	Breadcrumbs,
	CardMedia,
	Link,
	Paper,
	Typography,
} from "@mui/material";
import React, { forwardRef } from "react";

const ModalPaper = forwardRef(({ skill }, ref) => {
	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 400,
	};

	const overlay = {
		backgroundColor: "rgba(0,0,0,0.2)",
		backgroundBlendMode: "multiply",
		height: "200px",
	};

	return (
		<div>
			<Paper sx={style}>
				<Box
					sx={{
						p: 4,
					}}
				>
					<Breadcrumbs separator="›" aria-label="breadcrumb">
						{skill.breadcrumbs.map((item, index) => (
							<Link underline="hover" key={index} color="inherit">
								{item}
							</Link>
						))}
					</Breadcrumbs>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						{skill.modal.text}
					</Typography>
				</Box>

				<CardMedia image={skill.modal.image} sx={overlay} />
			</Paper>
		</div>
	);
});

export default ModalPaper;
