"use client";
import Auth from "./Components/userauth/Userauth";
import Logo from "./Logo";

export default function Home() {
	return (
		<main>
			<div id="main-container">
				<Logo />
				<Auth></Auth>
			</div>
		</main>
	);
}
