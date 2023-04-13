import React from "react";
import Carousel from "react-material-ui-carousel";
import { worksData } from "../../data";
import Work from "./Work";
import { Grid } from "@mui/material";

export default function Works() {
	return (
		<section id="works">
			<div className="container">
				<div className="section-title-area">
					<h4 className="section-logo">WORKS</h4>
					<h3 className="section-title">Recent Works</h3>
				</div>
				<Grid container>
					<Grid item xs={12}>
						<Carousel
							navButtonsAlwaysVisible={true}
							indicatorIconButtonProps={{
								//アクティブでない下の丸いアイコンの設定
								style: {
									padding: "10px", //位置調整
								},
							}}
							navButtonsWrapperProps={{
								//矢印ボタン周りの設定
								style: {
									margin: "0 auto 0", //位置調整
								},
							}}
							navButtonsProps={{
								//矢印ボタンの設定
								style: {
									borderRadius: 100, //0にすると四角になる．
								},
							}}
							autoPlay={true}
							sx={{
								width: "100%",
								height: "100%",
							}}
						>
							{worksData.map((data, index) => (
								<Work data={data} key={index} />
							))}
						</Carousel>
					</Grid>
				</Grid>
			</div>
		</section>
	);
}
