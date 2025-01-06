import { motion, useInView } from "framer-motion";
import "./App.css";
import { useRef } from "react";
import SocialButton from "./components/SocialButton";
import {
	faXTwitter,
	faYoutube,
	faInstagram,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { PortfolioApps } from "./components/PortfolioApps";

function App() {
	const profileRef = useRef(null);
	const portfolioAppsRef = useRef(null);
	const petRef = useRef(null);
	const profileContentsRef = useRef(null);

	const isProfileInView = useInView(profileRef, { once: true });
	const isportfolioAppsInView = useInView(portfolioAppsRef, { once: true });
	const isPetInView = useInView(petRef, { once: true });
	const isProfileContentsInView = useInView(profileContentsRef, { once: true });

	return (
		<>
			<div className="min-h-screen bg-[url('../public/img/programing_bg1.png')] bg-cover bg-center bg-no-repeat bg-fixed">
				<div id="top" className="h-screen flex items-center justify-center">
					<motion.h1 className="text-white text-8xl textShadow">
						<motion.span
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 1, delay: 0.3 }}
						>
							Done
						</motion.span>{" "}
						<motion.span
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 1, delay: 0.4 }}
						>
							is
						</motion.span>{" "}
						<motion.span
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 1, delay: 0.5 }}
						>
							better
						</motion.span>{" "}
						<motion.span
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 1, delay: 0.6 }}
						>
							than
						</motion.span>{" "}
						<motion.span
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 1, delay: 0.7 }}
						>
							perfect.
						</motion.span>
					</motion.h1>
				</div>
				<main className="bg-slate-200 w-full min-h-screen rounded-3xl pt-40">
					<section
						ref={profileRef}
						className="container w-full h-screen mx-auto pt-14"
					>
						<motion.div
							initial={{ x: 100, opacity: 0 }}
							animate={
								isProfileInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }
							}
							transition={{ duration: 1, delay: 0.3 }}
							id="profile"
							className="text-4xl bg-white w-44 h-16 p-3 flex items-center border-l-4 border-l-green-400 font-bold shadow-2xl"
						>
							<motion.p
								initial={{ x: 20, opacity: 0 }}
								animate={
									isProfileInView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }
								}
								transition={{ duration: 1, delay: 1 }}
							>
								profile
							</motion.p>
						</motion.div>
						<motion.div
							ref={profileContentsRef}
							initial={{ opacity: 0 }}
							animate={
								isProfileContentsInView ? { opacity: 1 } : { opacity: 0 }
							}
							transition={{ duration: 1, delay: 1 }}
							className="flex m-8 bg-green-50 rounded-lg shadow-2xl"
						>
							<div className="w-2/3 flex py-8">
								<motion.div
									initial={{ y: 50, opacity: 0 }}
									animate={
										isProfileContentsInView
											? { y: 0, opacity: 1 }
											: { y: 50, opacity: 0 }
									}
									transition={{ duration: 0.5, delay: 1.2 }}
									className="flex flex-col items-center w-1/2"
								>
									<img
										src="../public/img/my_photo.jpg"
										className="rounded-full max-w-80 max-h-80 border-2 border-green-400 shadow-xl"
									/>
									<h2 className="mt-16  text-3xl border-b-2 border-black font-bold">
										Name: 野村颯太
									</h2>
									<h2 className="mt-4 text-3xl border-b-2 border-black font-bold">
										age: 26
									</h2>
									<h2 className="mt-4 text-3xl border-b-2 border-black font-bold">
										gender: 男
									</h2>
								</motion.div>
								<motion.div
									initial={{ y: 50, opacity: 0 }}
									animate={
										isProfileContentsInView
											? { y: 0, opacity: 1 }
											: { y: 50, opacity: 0 }
									}
									transition={{ duration: 0.5, delay: 1.4 }}
									className="flex flex-col items-center w-1/2"
								>
									<h2 className="mt-4 text-3xl border-b-2 border-black font-bold">
										趣味・特技
									</h2>
									<ul className="text-3xl font-bold flex flex-col gap-4 mt-8">
										<li>・筋トレ💪</li>
										<li>・魚捌き🐟🔪</li>
										<li>・読書📚</li>
										<li>・温泉旅行♨</li>
										<li>・個人開発👨🏻‍💻</li>
									</ul>
								</motion.div>
							</div>
							<motion.aside
								initial={{ y: 50, opacity: 0 }}
								animate={
									isProfileContentsInView
										? { y: 0, opacity: 1 }
										: { y: 50, opacity: 0 }
								}
								transition={{ duration: 0.5, delay: 1.6 }}
								className="w-1/3 text-3xl flex flex-col items-center justify-center"
							>
								<SocialButton icon={faXTwitter} label="X" color="#000" />
								<SocialButton
									icon={faYoutube}
									label="YouTube"
									color="#e1002d"
								/>
								<SocialButton
									icon={faInstagram}
									label="Instagram"
									color="#f35369"
								/>
								<SocialButton icon={faGithub} label="GitHub" color="#24292f" />
							</motion.aside>
						</motion.div>
					</section>
					<section
						ref={portfolioAppsRef}
						className="container w-full h-screen mx-auto"
					>
						<motion.div
							initial={{ x: 100, opacity: 0 }}
							animate={
								isportfolioAppsInView
									? { x: 0, opacity: 1 }
									: { x: 100, opacity: 0 }
							}
							transition={{ duration: 1, delay: 0.3 }}
							id="portfolioApps"
							className="text-4xl bg-white w-52 h-16 p-3 flex items-center border-l-4 border-l-green-400 font-bold shadow-2xl"
						>
							<motion.p
								initial={{ x: 20, opacity: 0 }}
								animate={
									isportfolioAppsInView
										? { x: 0, opacity: 1 }
										: { x: 20, opacity: 0 }
								}
								transition={{ duration: 1, delay: 1 }}
							>
								application
							</motion.p>
						</motion.div>
						<div>
							<PortfolioApps
								name="VALO-LAB"
								imgURL="../public/img/VALO-LAB_logo.png"
								introduction="VALORANTの空爆などの小技をシェアできるサービスです。いいね機能もあるので使えそうな投稿をいいねして実戦で使ってみよう！"
							/>
						</div>
					</section>
					<section ref={petRef} className="container w-full h-screen mx-auto">
						<motion.div
							initial={{ x: 100, opacity: 0 }}
							animate={
								isPetInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }
							}
							transition={{ duration: 1, delay: 0.3 }}
							id="pet"
							className="text-4xl bg-white w-44 h-16 p-3 flex items-center border-l-4 border-l-green-400 font-bold shadow-2xl"
						>
							<motion.p
								initial={{ x: 20, opacity: 0 }}
								animate={
									isPetInView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }
								}
								transition={{ duration: 1, delay: 1 }}
							>
								pet
							</motion.p>
						</motion.div>
						<div></div>
					</section>
				</main>
			</div>
		</>
	);
}

export default App;
