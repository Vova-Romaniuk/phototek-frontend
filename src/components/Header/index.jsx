import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MENU_ITEM } from "../../utils/constants";
import { useMediaQuery } from 'react-responsive';
import Hamburger from 'hamburger-react'

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const media = useMediaQuery({ maxWidth: '769px' });
	const [isOpen, setOpen] = useState(false)
	const transparentHeader = 'bg-transparent text-white';
	const colorHeader = `bg-white text-black shadow-md ${media && 'shadow-none'}`;
	const hoverItemMenuTransparent = 'hover:bg-white/10 ';
	const hoverItemMenuColor = 'hover:bg-black/10';
	const stylesMenu = `mx-5 px-6 py-3 text-xl font-bold tracking-widest hover:rounded-tl-3xl rounded-tl-3xl rounded-tr-xl max-md:w-fit hover:rounded-tr-xl rounded-br-3xl  hover:rounded-br-3xl rounded-bl-xl hover:rounded-bl-xl  ${isScrolled ? hoverItemMenuColor : hoverItemMenuTransparent}`

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
		<div className={`fixed w-full top-0 h-20 ${isScrolled ? colorHeader : transparentHeader} flex items-center max-md:justify-between z-50`}>
			<span className="bagel-font text-3xl ml-5">CapturePRO</span>

			{media &&
				<div className="mr-10">
					<Hamburger toggled={isOpen} toggle={setOpen} size={30} />
				</div>
			}
			{
				media && isOpen && <div className={`ml-auto w-full mr-5 flex flex-col absolute top-20 left-0 pt-15 z-50 h-[calc(100vh-5rem)] ${isScrolled ? colorHeader : 'bg-gray-900'}`}>
					{
						MENU_ITEM.map((item, index) => (
							<NavLink
								to={item.link}
								key={index}
								onClick={() => setOpen(!isOpen)}
								className={({ isActive }) => isActive ?
									`${stylesMenu} ${isScrolled ? "border border-black" : "border border-white"} my-5 text-4xl`
									: `${stylesMenu} my-10 text-4xl`
								}
							>
								<span>
									{item.name}
								</span>
							</NavLink>
						))
					}
				</div>
			}

			{!media && <div className="ml-auto w-fit mr-5 h-fit flex">
				{
					MENU_ITEM.map((item, index) => (
						<NavLink
							to={item.link}
							key={index}
							className={({ isActive }) => isActive ?
								`${stylesMenu} ${isScrolled ? "border border-black" : "border border-white"}`
								: `${stylesMenu}`
							}
						>
							<span>
								{item.name}
							</span>
						</NavLink>
					))
				}
			</div>}
		</div>
	)
}