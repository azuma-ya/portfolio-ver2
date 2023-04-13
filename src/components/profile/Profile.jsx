import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React from "react";
import "./Profile.css";

export default function Profile() {
	const containerStyle = {
		width: "min(90%,400px)",
		height: "300px",
	};

	const center = {
		lat: 36.43076471329304,
		lng: 139.0450358010228,
	};

	const positionGunmaU = {
		lat: 36.43076471329304,
		lng: 139.0450358010228,
	};

	return (
		<section id="profile">
			<div className="container">
				<div className="section-title-area">
					<h4 className="section-logo">PROFILE</h4>
					<h3 className="section-title">My profile</h3>
				</div>
				<div className="profile-text">
					<p>初めまして。平成15年生まれの19歳、大学生の青山和樹と申します。</p>
					<p>
						プログラミングを始めたきっかけとしましては、高校生の時、ゲームを作りたい！という思いから、Javascriptでのブラウザゲーム開発を始めたことです。また、自作ゲームをみんなにプレイしてほしいという思いからバックエンド開発にも興味が湧きました。現在ではNode.js、express、React、mongoDBを使ったフルスタックWebアプリケーション開発、勉強を行っています。
					</p>
				</div>
				<LoadScript googleMapsApiKey={process.env.REACT_APP_MAP_API}>
					<GoogleMap
						mapContainerStyle={containerStyle}
						center={center}
						zoom={15}
					>
						<Marker position={positionGunmaU} />
					</GoogleMap>
				</LoadScript>
			</div>
		</section>
	);
}
