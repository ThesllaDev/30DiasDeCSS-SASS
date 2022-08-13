import { FaWindowMaximize, FaCode } from "react-icons/fa";

import "../../styles/components/ProjectCard.css";

import { LinkButton } from "./LinkButton";

export const ProjectCard = ({ id, title, urlDeploy }) => {
	return (
		<div className="project-card" id={`Dia-${id}`}>
			<figure>
				<img
					src={`https://github.com/ThesllaDev/30DiasDeCSS-SASS/blob/main/assets/img/demo-challenge-${id}.gif?raw=true`}
					alt={`gif ${title}`}
				/>
				<figcaption>{`Dia ${id} - ${title}`}</figcaption>
			</figure>
			<div className="project-card__links">
				<LinkButton
					url={urlDeploy}
					toolTip={`Veja uma demonstração do desafio ${title}`}
					text="Demo"
					icon={<FaWindowMaximize />}
				/>
				<LinkButton
					url={`https://github.com/ThesllaDev/30DiasDeCSS-SASS/tree/main/Desafios/Dia%20${id}`}
					toolTip={`Veja o código utilizado no desafio ${title}`}
					text="Code"
					icon={<FaCode />}
				/>
			</div>
		</div>
	);
};
