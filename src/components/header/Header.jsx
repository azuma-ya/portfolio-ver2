import React from "react";
import NavigationDrawer from "./NavigationDrawer";
import { Box, List, ListItemButton } from "@mui/material";

export default function Header() {
	const listItem = ["Home", "Profile", "Skills", "Works", "Contact"];
	return (
		<Box
			component="header"
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-around",
				backgroundColor: "#21252f",
				color: "#fff",
				position: "fixed",
				width: "100%",
				zIndex: 100,
			}}
		>
			<h3>Aoyama Kazuki's Portfolio</h3>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Box
					sx={{ display: "flex", alignItems: "center", marginRight: "10px" }}
				></Box>
				<List sx={{ display: { xs: "none", sm: "flex" } }}>
					{listItem.map((item) => (
						<ListItemButton href={"#" + item.toLowerCase()} key={item}>
							{item}
						</ListItemButton>
					))}
				</List>
			</Box>
			<NavigationDrawer listItem={listItem} />
		</Box>
	);
}
