import { FaHeart } from "react-icons/fa";

import "../../styles/layout/FooterBar.css";

export const FooterBar = () => {
	return (
		<footer>
			<p>
				2022 - Desenvolvido com <FaHeart /> por{" "}
				<a
					href="https://github.com/ThesllaDev"
					title="Link do portfolio do author do projeto"
					target="_blank"
					rel="author noreferrer"
				>
					ThesllaDev
				</a>
				.
			</p>
		</footer>
	);
};
