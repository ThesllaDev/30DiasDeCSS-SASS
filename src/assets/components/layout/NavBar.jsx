import { FaQuestion, FaList } from "react-icons/fa";

import "../../styles/layout/NavBar.css";

import { LinkButton } from "../shared/LinkButton";

export const NavBar = () => {
	return (
		<nav className="navbar">
			<ul className="navbar__list">
				<li className="navbar__item">
					<LinkButton
						url="#about"
						toolTip="Navegue até a seção sobre o projeto"
						icon={<FaQuestion />}
						text="Sobre"
					/>
				</li>
				<li className="navbar__item">
					<LinkButton
						url="#projects"
						toolTip="Navegue até a seção dos projeto"
						icon={<FaList />}
						text="Projetos"
					/>
				</li>
			</ul>
		</nav>
	);
};
