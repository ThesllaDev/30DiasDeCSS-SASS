import { FaQuestion, FaList } from "react-icons/fa";

import "../../styles/layout/NavBar.css";

import { LinkButton } from "../shared/LinkButton";

export const NavBar = () => {
	return (
		<nav className="navbar">
			<ul className="navbar__list">
				<li className="navbar__item">
					<LinkButton url="#about" text="Sobre" icon={<FaQuestion />} />
				</li>
				<li className="navbar__item">
					<LinkButton url="#projects" text="Projetos" icon={<FaList />} />
				</li>
			</ul>
		</nav>
	);
};
