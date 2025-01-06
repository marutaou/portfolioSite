import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type SocialButtonProps = {
	icon: IconDefinition;
	label: string;
	color: string;
};

const SocialButton = ({ icon, label, color }: SocialButtonProps) => {
	return (
		<div className="relative my-4">
			<div className="bg-white rounded-full flex items-center w-14 hover:w-48 h-14 transition-all duration-300 overflow-hidden group shadow-xl">
				<div
					className="rounded-full w-14 h-14 flex items-center justify-center shrink-0"
					style={{
						backgroundColor: color,
					}}
				>
					<FontAwesomeIcon icon={icon} className="text-white h-8 w-8" />
				</div>
				<span
					className="text-xl px-4 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold"
					style={{ color: color }}
				>
					{label}
				</span>
			</div>
		</div>
	);
};

export default SocialButton;
