import "../../styles/layout/NavBar.css";

import { LinkButton } from "../LinkButton";

export const NavBar = () => {
	return (
		<nav className="navbar">
			<ul className="navbar__list">
				<li className="navbar__item">
					<LinkButton url="#about" text="Sobre" />
				</li>
				<li className="navbar__item">
					<LinkButton url="#projects" text="Projetos" />
				</li>
			</ul>
		</nav>
	);
};
