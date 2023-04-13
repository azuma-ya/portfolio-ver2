import { Box, Link, Typography } from "@mui/material";
import React from "react";

export default function Work({ data }) {
	return (
		<Box
			sx={{
				width: "100%",
				height: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			{data.image ? (
				<Link href={data.url}>
					<Box sx={{ backgroundColor: "black", height: "100%" }}>
						<Box
							component="img"
							src={data.image}
							sx={{
								width: "700px",
								height: "100%",
								objectFit: "cover",
								opacity: 0.7,
							}}
						/>
					</Box>
				</Link>
			) : (
				<Box
					sx={{
						width: "700px",
						height: "380px",
						backgroundColor: "gray",
					}}
				/>
			)}
			<Typography
				className="desc"
				sx={{ position: "absolute", bottom: "10%", color: "white" }}
			>
				{data.desc}
			</Typography>
		</Box>
	);
}
