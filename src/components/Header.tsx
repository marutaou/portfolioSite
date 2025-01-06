import { Link as ScrollLink } from "react-scroll";

export default function Header() {
	return (
		<header className="bg-green-400 w-full h-20 flex fixed justify-evenly items-center z-50">
			<ScrollLink
				to="top"
				smooth={true}
				duration={500}
				className="cursor-pointer text-4xl text-white"
			>
				ポートフォリオサイト
			</ScrollLink>
			<nav>
				<ul className="flex gap-8 text-4xl text-white">
					<li>
						<ScrollLink
							to="profile"
							smooth={true}
							duration={500}
							offset={-80} // ヘッダーの高さ分を調整
							className="cursor-pointer" // カーソルをポインターに
						>
							profile
						</ScrollLink>
					</li>
					<li>
						<ScrollLink
							to="portfolioApps"
							smooth={true}
							duration={500}
							offset={-80}
							className="cursor-pointer"
						>
							application
						</ScrollLink>
					</li>
					<li>
						<ScrollLink
							to="pet"
							smooth={true}
							duration={500}
							offset={-80}
							className="cursor-pointer"
						>
							pet
						</ScrollLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}
