import React from "react";

export function Footer() {
	const styleIcon = 'mx-auto text-5xl max-sm:text-3xl max-sm:mx-2'
	return (
		<div className="h-32 max-sm:h-28 w-full bg-gray-900 text-white flex flex-col ">
			<div className="w-8/12 max-sm:10/12 mx-auto flex justify-evenly mt-6">
				<a id="insta" href="https://www.instagram.com/" className={`${styleIcon}`} target="_blank" rel="noreferrer">
					<i className="fa-brands fa-instagram"></i>
				</a>
				<a id="messenger" href="https://www.messenger.com/" className={`${styleIcon}`} target="_blank" rel="noreferrer">
					<i className="fa-brands fa-facebook-messenger"></i>
				</a>
				<span className="bagel-font text-3xl max-sm:text-xl ml-5 max-sm:mx-5 ">CapturePRO</span>
				<a id="viber" href="https://viber.com/" className={`${styleIcon}`} target="_blank" rel="noreferrer">
					<i className="fa-brands fa-viber"></i>
				</a>
				<a id="telegram" href="https://web.telegram.org/a/" className={`${styleIcon}`} target="_blank" rel="noreferrer">
					<i className="fa-brands fa-telegram"></i>
				</a>
			</div>
			<p className="text-center text-lg italic mt-5 max-sm:mt-3">Усі права захищені © 2023</p>
		</div>
	)
}