import React from "react";

type applicationProps = {
	name: string;
	imgURL: string;
	introduction: string;
};

export const PortfolioApps = (props: applicationProps) => {
	return (
		<div className="bg-green-50 w-80 h-96 rounded-3xl mx-8 my-16 flex flex-col items-center justify-center shadow-2xl p-6">
			<h1 className="text-3xl mb-4">{props.name}</h1>
			<p className="text-lg mb-4">{props.introduction}</p>
			<a href="https://VALO-LAB.vercel.app">
				<img
					src={props.imgURL}
					alt={props.name}
					className="w-36 h-36 mb-4 rounded-2xl"
				/>
			</a>
		</div>
	);
};
