import Nav from "./compo/Navbar";
import Side from "./compo/Sidebar";
import Content from "./compo/Content";
import "./page1.scss";

export default function Page1() {
	return (
		<main>
			<Nav></Nav>
			<Side></Side>
			<Content></Content>
		</main>
	);
}
