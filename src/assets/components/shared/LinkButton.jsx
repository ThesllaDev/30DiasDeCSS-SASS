import "../../styles/components/LinkButton.css";

export const LinkButton = ({ url, toolTip, icon, text }) => {
	return (
		<a className="link-button" href={url} title={toolTip}>
			{icon} {text}
		</a>
	);
};
