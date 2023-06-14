import React from "react";
import { Photographer } from "../../components/Photographer";
import { PHOTOGRAPHERS } from "../../utils/constants";
export function AboutPhotographers() {
	return (
		<div className="w-full min-h-screen h-fit flex flex-col">
			<div
				id="welcome"
				className="h-72 max-sm:h-52 w-full bg-gray-900 flex flex-col justify-center max-sm:justify-end italic font-bold tracking-wide relative"
			>
				<div className="w-10/12 max-sm:w-11/12 mx-auto">
					<h4 className="text-white text-3xl w-full max-sm:mb-3 text-center animate-border p-4 max-sm:text-xl">"Фотограф - митець, який заморожує час і створює вічність."</h4>
				</div>
			</div>
			<h6 className="text-5xl text-center font-bold mt-6 mb-10 max-sm:text-3xl">Наші фотографи:</h6>
			{
				PHOTOGRAPHERS.map((item) => (
					<Photographer
						link={item.link}
						name={item.name}
						age={item.age}
						numberPhone={item.numberPhone}
					/>
				))
			}

		</div>
	)
}