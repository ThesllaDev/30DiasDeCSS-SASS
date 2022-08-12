import { FaCheck, FaCss3Alt } from "react-icons/fa";

import "../../styles/pages/Home.css";

import { ProjectCard } from "../shared/ProjectCard";

export const Home = ({ projectsDatas }) => {
	return (
		<main>
			<header id="about" className="about-section">
				<h1>
					#30 Dias de <abbr title="Cascading Style Sheets">CSS</abbr>
					<FaCss3Alt />
				</h1>
				<p className="about-section__description">
					30 dias de CSS(Cascading Style Sheets), é um desafio para ajudá-lo a
					melhorar suas habilidades de codificação fazendo mini projetos de
					animações diariamente durante 30 dias, utilizando <abbr>HTML</abbr>
					(HyperText Markup Language) e{" "}
					<abbr title="Cascading Style Sheets">CSS</abbr> (no momento que estou
					realizando esse projeto também estou aprendendo sobre o{" "}
					<abbr>SASS</abbr>(Syntactically Awesome Style Sheets) que é um
					pré-processador <abbr title="Cascading Style Sheets">CSS</abbr>, então
					também decidi adicioná-lo ao desafio)
				</p>
				<p>
					Para mais informações consulte o{" "}
					<a href="https://github.com/ThesllaDev/30DiasDeCSS-SASS#-30diasdecss-">
						README
					</a>{" "}
					do projeto
				</p>
			</header>
			<section id="projects" className="projects-section">
				<h2>Projetos</h2>
				<nav>
					<ol>
						{projectsDatas.map((item) => (
							<li key={item.id}>
								<a href={`#Dia-${item.id}`}>
									{`Dia ${item.id} - ${item.title}`}
								</a>
								<FaCheck />
								<hr />
							</li>
						))}
					</ol>
				</nav>
				<div className="projects-container">
					{projectsDatas.map((item) => (
						<ProjectCard
							key={item.id}
							id={item.id}
							banner={item.img}
							title={item.title}
							urlDeploy={item.deploy}
						/>
					))}
				</div>
			</section>
		</main>
	);
};
