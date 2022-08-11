import "../../styles/pages/Home.css";

export const Home = () => {
	return (
		<main>
			<header id="about" className="about-section">
				<h1>#30 Dias de CSS</h1>
				<p className="about-section__description">
					30 dias de CSS3, é um desafio para ajudá-lo a melhorar suas
					habilidades de codificação fazendo mini projetos de animações
					diariamente durante 30 dias, utilizando HTML e CSS (no momento que
					estou realizando esse projeto também estou aprendendo sobre o SASS que
					é um pré-processador CSS, então também decidi adiciona-lo ao desafio)
				</p>
				<p>
					Para mais informações consulte o{" "}
					<a href="https://github.com/ThesllaDev/30DiasDeCSS-SASS#-30diasdecss-">
						README
					</a>{" "}
					do projeto
				</p>
			</header>
		</main>
	);
};
