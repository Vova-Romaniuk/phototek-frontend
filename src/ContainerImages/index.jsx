import React, { useState, useEffect } from "react";
import ViewImage from "../components/ViewImage";
import { ViewImageAdmin } from "../components/ViewImageAdmin";
import { useMediaQuery } from 'react-responsive';
export default function ContainerImages({ images, forAdmin = false, setId }) {
	const [isScrolled, setIsScrolled] = useState(false);

	const media = useMediaQuery({ maxWidth: '769px' });

	useEffect(() => {


		const handleScroll = () => {
			if (!media && window.pageYOffset > 350) {
				setIsScrolled(true);
			} else if (media && window.pageYOffset > 200) {
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
			className="w-full min-h-[65vh] h-fit flex flex-col pb-5 relative"
		>
			<h6 className="text-5xl text-center font-bold mt-6 mb-10 max-sm:text-3xl">Наші роботи:</h6>
			<div className={`grid w-10/12 mx-auto max-md:grid-cols-2 grid-cols-3 gap-8 ${forAdmin && "h-[60vh] max-sm:h-[35vh] overflow-y-auto"}`}>
				{forAdmin ?
					images?.map((item, index) => (
						<ViewImageAdmin src={item.link} alt={item.category} setId={setId} id={item.id} key={index} />
					))
					:

					images?.map((item, index) => (
						<ViewImage src={item.link} alt={item.category} key={index} />
					))
				}
			</div>
			{isScrolled &&
				<a href="#welcome">
					<div className="fixed right-8 bottom-20 max-sm:right-6 max-sm:bottom-28 animate-pulse w-12 h-12 flex rounded-full bg-gray-900">
						<i className="fa-solid fa-angle-up text-4xl text-white  cursor-pointer m-auto"></i>
					</div>
				</a>
			}
		</div>
	)
}