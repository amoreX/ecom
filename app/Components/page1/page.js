"use client";
import Nav from "./compo/Navbar";
import Side from "./compo/Sidebar";
import Content from "./compo/Content";
import { useState, useEffect } from "react";
import "./page1.scss";

export default function Page1() {
	const [value, setValue] = useState();
	useEffect(() => {
		setValue(sessionStorage.getItem("myVariable"));
		console.log(value);
	}, []);
	return value != null && value != undefined ? (
		<main>
			<Nav></Nav>
			<Side></Side>
			<Content></Content>
		</main>
	) : (
		<div></div>
	);
}
