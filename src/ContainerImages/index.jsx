import React, { useState, useEffect } from "react";
import ViewImage from "../ViewImage";

export default function ContainerImages({ images }) {
	const [isScrolled, setIsScrolled] = useState(false);


	useEffect(() => {


		const handleScroll = () => {
			if (window.pageYOffset > 350) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div
			id="container-images"
			className="w-full h-fit flex flex-col pb-5 relative"
		>
			<h6 className="text-5xl text-center font-bold mt-6 mb-10">Наші роботи:</h6>
			<div className="grid w-10/12 mx-auto grid-cols-3 gap-8">
				{
					images?.map((item, index) => (
						<ViewImage src={item.link} alt={item.category} key={index} />
					))
				}
			</div>
			{isScrolled &&
				<a href="#welcome">
					<div className="fixed right-8 bottom-20 animate-pulse w-12 h-12 flex rounded-full bg-gray-900">
						<i className="fa-solid fa-angle-up text-4xl text-white  cursor-pointer m-auto"></i>
					</div>
				</a>
			}
		</div>
	)
}