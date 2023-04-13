import React, { useRef } from "react";
import "./Contact.css";
import { Button } from "@mui/material";
import { init, send } from "emailjs-com";

export default function Contact() {
	const contactName = useRef("");
	const email = useRef("");
	const subject = useRef("");
	const content = useRef("");

	const sendMail = () => {
		const userID = process.env.REACT_APP_USER_ID;
		const serviceID = process.env.REACT_APP_SERVICE_ID;
		const templateID = process.env.REACT_APP_TEMPLATE_ID;

		init(userID);
		const template_param = {
			from_name: contactName.current.value,
			email: email.current.value,
			title: subject.current.value,
			message: content.current.value,
		};
		send(serviceID, templateID, template_param).then(() => {
			window.alert("お問い合わせを送信致しました。");
		});
	};

	const handleClick = (e) => {
		e.preventDefault();
		if (
			!(
				contactName.current.value === "" ||
				email.current.value === "" ||
				subject.current.value === "" ||
				content.current.value === ""
			)
		) {
			sendMail();
			contactName.current.value = "";
			email.current.value = "";
			subject.current.value = "";
			content.current.value = "";
		}
	};

	return (
		<section id="contact">
			<div className="container">
				<div className="section-title-area">
					<h4 className="section-logo">CONTACT</h4>
					<h3 className="section-title">Get in Touch</h3>
				</div>
				<form className="contact-form" onSubmit={(e) => handleClick(e)}>
					<input type="text" placeholder="Full Name" ref={contactName} />
					<input type="email" placeholder="Enter E-mail" ref={email} />
					<input type="text" placeholder="Enter Subject" ref={subject} />
					<textarea
						name=""
						id=""
						cols="30"
						rows="10"
						placeholder="Enter Message"
						ref={content}
					/>
					<Button
						type="submit"
						variant="contained"
						sx={{
							width: "50%",
							mx: "auto",
						}}
					>
						Contact
					</Button>
				</form>
			</div>
		</section>
	);
}
