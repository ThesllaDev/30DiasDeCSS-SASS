import "./App.css";

import { NavBar } from "./assets/components/layout/NavBar";

import { Home } from "./assets/components/pages/Home";

const PROJECTDATAS = [
	{
		id: 1,
		title: "Ícones de mídias sociais em camada",
	},
	{
		id: 2,
		title: "Loaders animados",
	},
	{
		id: 3,
		title: "Letreiro com mudança de cor de texto",
	},
	{
		id: 4,
		title: "Botões com efeito de borda, hover e click",
	},
	{
		id: 5,
		title: "Joias do infinito com efeito de pulsar",
	},
	{
		id: 6,
		title: "Efeito de animação do texto brilhando",
	},
	{
		id: 7,
		title: "Preloader com efeito de ondulação",
	},
	{
		id: 8,
		title: "Radar animado",
	},
	{
		id: 9,
		title: "O pêndulo de Newton",
	},
	{
		id: 10,
		title: "Animação de troca de emojis",
	},
	{
		id: 11,
		title: "Botões de ícone com efeito hover",
	},
	{
		id: 12,
		title: "Animação de preenchimento ao passar o mouse",
	},
	{
		id: 13,
		title: "Placeholders loadings",
	},
	{
		id: 14,
		title: "Fundo de texto animado com efeito parallax",
	},
	{
		id: 15,
		title: "Animação de texto esfumaçado",
	},
	{
		id: 16,
		title: "Botão com efeito de pressionamento de tecla",
	},
	{
		id: 17,
		title: "Animação de bateria carregando",
	},
	{
		id: 18,
		title: "Texto flutuante e imersivo",
	},
	{
		id: 19,
		title: "Animação partículas de fundo",
	},
	{
		id: 20,
		title: "Botão com efeito hover de arco-íris",
	},
];

function App() {
	return (
		<div className="App">
			<NavBar />
			<Home projectsDatas={PROJECTDATAS} />
		</div>
	);
}

export default App;
