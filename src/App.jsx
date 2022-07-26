import "./App.css";

import { NavBar } from "./assets/components/layout/NavBar";
import { FooterBar } from "./assets/components/layout/FooterBar";

import { Home } from "./assets/components/pages/Home";

const PROJECTDATAS = [
	{
		id: "01",
		title: "Ícones de mídias sociais em camada",
		deploy: "https://codepen.io/theslladev/full/NWYgoNy",
	},
	{
		id: "02",
		title: "Loaders animados",
		deploy: "https://codepen.io/theslladev/full/zYWdvaw",
	},
	{
		id: "03",
		title: "Letreiro com mudança de cor de texto",
		deploy: "https://codepen.io/theslladev/full/ZExJXoZ",
	},
	{
		id: "04",
		title: "Botões com efeito de borda, hover e click",
		deploy: "https://codepen.io/theslladev/full/MWVEaQw",
	},
	{
		id: "05",
		title: "Joias do infinito com efeito de pulsar",
		deploy: "https://codepen.io/theslladev/full/WNzZLob",
	},
	{
		id: "06",
		title: "Efeito de animação do texto brilhando",
		deploy: "https://codepen.io/theslladev/full/WNzXRmW",
	},
	{
		id: "07",
		title: "Preloader com efeito de ondulação",
		deploy: "https://codepen.io/theslladev/full/VwXrRjj",
	},
	{
		id: "08",
		title: "Radar animado",
		deploy: "https://codepen.io/theslladev/full/VwXyevr",
	},
	{
		id: "09",
		title: "O pêndulo de Newton",
		deploy: "https://codepen.io/theslladev/full/yLKpvKz",
	},
	{
		id: "10",
		title: "Animação de troca de emojis",
		deploy: "https://codepen.io/theslladev/full/ZExvdLq",
	},
	{
		id: "11",
		title: "Botões de ícone com efeito hover",
		deploy: "https://codepen.io/theslladev/full/LYdQQpd",
	},
	{
		id: "12",
		title: "Animação de preenchimento ao passar o mouse",
		deploy: "https://codepen.io/theslladev/full/vYRRLym",
	},
	{
		id: "13",
		title: "Placeholders loadings",
		deploy: "https://codepen.io/theslladev/full/ExEEOdr",
	},
	{
		id: "14",
		title: "Fundo de texto animado com efeito parallax",
		deploy: "https://codepen.io/theslladev/full/bGvMgdV",
	},
	{
		id: "15",
		title: "Animação de texto esfumaçado",
		deploy: "https://codepen.io/theslladev/full/OJvZBBq",
	},
	{
		id: "16",
		title: "Botão com efeito de pressionamento de tecla",
		deploy: "https://codepen.io/theslladev/full/abYKzKo",
	},
	{
		id: "17",
		title: "Animação de bateria carregando",
		deploy: "https://codepen.io/theslladev/full/xxWzWPj",
	},
	{
		id: "18",
		title: "Texto flutuante e imersivo",
		deploy: "https://codepen.io/theslladev/full/XWEBppM",
	},
	{
		id: "19",
		title: "Animação partículas de fundo",
		deploy: "https://codepen.io/theslladev/full/Yzajgye",
	},
	{
		id: "20",
		title: "Botão com efeito hover de arco-íris",
		deploy: "https://codepen.io/theslladev/full/WNzgOvm",
	},
	{
		id: "21",
		title: "Gotejamento líquido em slow motion",
		deploy: "https://codepen.io/theslladev/full/LYdJKRW",
	},
	{
		id: "22",
		title: "Ícones de notificação e alertas saltitante",
		deploy: "https://codepen.io/theslladev/full/OJvBbOg",
	},
	{
		id: "23",
		title: "Botão de download com efeito hover e active",
		deploy: "https://codepen.io/theslladev/full/xxWyjyJ",
	},
	{
		id: "24",
		title: "Infinite Loading",
		deploy: "https://codepen.io/theslladev/full/jOzejpo",
	},
	{
		id: "25",
		title: "Checkbox com efeitos de selecionados",
		deploy: "https://codepen.io/theslladev/full/RwMqMex",
	},
	{
		id: "26",
		title: "Esfera 3D de partículas",
		deploy: "https://codepen.io/theslladev/full/QWmzpQW",
	},
	{
		id: "27",
		title: "Explosão de confetes de festa",
		deploy: "https://codepen.io/theslladev/full/gOeZqJr",
	},
	{
		id: "28",
		title: "Efeito de bolhas submersas, subindo",
		deploy: "https://codepen.io/theslladev/full/yLKZPzq",
	},
	{
		id: "29",
		title: "Efeito de impressão de texto",
		deploy: "https://codepen.io/theslladev/full/oNqmPBB",
	},
	{
		id: "30",
		title: "Fogos de artifícios e cumprimento de finalização",
		deploy: "https://codepen.io/theslladev/full/poLYgOM",
	},
];

function App() {
	return (
		<div className="App">
			<NavBar />
			<Home projectsDatas={PROJECTDATAS} />
			<FooterBar />
		</div>
	);
}

export default App;
