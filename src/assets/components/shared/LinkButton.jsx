import "../../styles/components/LinkButton.css";

export const LinkButton = ({ url, text, icon }) => {
	return (
		<a className="link-button" href={url}>
			{icon} {text}
		</a>
	);
};
