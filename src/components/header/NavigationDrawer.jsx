import { Box, Drawer, IconButton, List, ListItemButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { useState } from "react";

export default function NavigationDrawer({ listItem }) {
	const [open, setOpen] = useState(false);

	const toggleDrawer = () => {
		setOpen(!open);
	};

	return (
		<div>
			<IconButton
				color="inherit"
				aria-label="open drawer"
				edge="start"
				onClick={toggleDrawer}
				sx={{ mr: 2, display: { sm: "none" } }}
			>
				<MenuIcon />
			</IconButton>
			<Drawer anchor={"top"} open={open} onClose={toggleDrawer}>
				<Box sx={{ backgroundColor: "#060623", color: "#fff" }}>
					<List>
						{listItem.map((item) => (
							<ListItemButton href={"#" + item.toLowerCase()} key={item}>
								{item}
							</ListItemButton>
						))}
					</List>
				</Box>
			</Drawer>
		</div>
	);
}
