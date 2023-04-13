import { Button, Modal, Rating, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import ModalPaper from "./ModalPaper";

export default function Skill({ skill }) {
	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	return (
		<div>
			<Button
				onClick={skill.modal && handleOpen}
				disabled={!skill.modal}
				sx={{
					width: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					p: 1.5,
					color: "black",
					textTransform: "none",
				}}
			>
				<Typography variant="subtitle2">{skill.skill}</Typography>
				<Rating name="read-only" value={skill.level} readOnly />
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<ModalPaper skill={skill} />
			</Modal>
		</div>
	);
}
