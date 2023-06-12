import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MENU_ITEM } from "../../utils/constants";

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const transparentHeader = 'bg-transparent text-white';
	const colorHeader = 'bg-white text-black shadow-md';
	const hoverItemTransparent = 'hover:bg-white/10';
	const hoverItemColor = 'hover:bg-black/10';
	useEffect(() => {
		const handleScroll = () => {
			if (window.pageYOffset > 0) {
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
		<div className={`fixed w-full top-0 h-20 ${isScrolled ? colorHeader : transparentHeader} flex items-center z-50`}>
			<span className="bagel-font text-3xl ml-5">CapturePRO</span>
			<div className="ml-auto w-fit mr-5 h-fit flex">
				{
					MENU_ITEM.map((item, index) => (
						<NavLink
							to={item.link}
							key={index}
							className={`mx-5 px-6 py-3 text-xl font-bold tracking-widest hover:rounded-tl-3xl hover:rounded-tr-xl hover:rounded-br-3xl hover:rounded-bl-xl ${isScrolled ? hoverItemColor : hoverItemTransparent}`}
						>
							<span>
								{item.name}
							</span>
						</NavLink>
					))
				}
			</div>
		</div>
	)
}