import "../styles/components/LinkButton.css";

export const LinkButton = ({ url, text }) => {
	return (
		<a className="link-button" href={url}>
			{text}
		</a>
	);
};
