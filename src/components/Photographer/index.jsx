import React from "react";

export function Photographer({ link, name, age, numberPhone }) {
	const styleTitle = 'text-3xl  max-sm:text-2xl font-bold';
	const beforeTitle = "text-2xl max-sm:text-xl font-medium italic text-slate-500";
	const styleIcon = 'mx-auto text-5xl max-sm:text-4xl'
	return (
		<div className="h-80 max-md:h-72 max-sm:h-96 w-9/12 max-sm:w-10/12 mx-auto rounded-xl overflow-hidden flex max-sm:flex-col justify-between shadow-md mb-10">
			<div className="w-4/12 h-full max-sm:w-full max-sm:h-3/6">
				<img
					src={link}
					alt=""
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="w-7/12 h-full flex max-sm:w-full  max-sm:justify-between  max-sm:h-3/6">
				<div className="w-8/12 flex flex-col justify-evenly ml-4">
					<p className={`${beforeTitle}`}>Iм'я:</p>
					<p className={`${styleTitle}`}>{name}</p>
					<p className={`${beforeTitle}`}>Вік:</p>
					<p className={`${styleTitle}`}>{age}</p>
					<p className={`${beforeTitle}`}>Номер телефону</p>
					<p className={`${styleTitle}`}>{numberPhone}</p>
				</div>
				<div className="w-3/12 flex flex-col  justify-evenly ">
					<a id="insta" href="https://www.instagram.com/" className={`${styleIcon}`} target="_blank" rel="noreferrer">
						<i className="fa-brands fa-instagram"></i>
					</a>
					<a id="messenger" href="https://www.messenger.com/" className={`${styleIcon}`} target="_blank" rel="noreferrer">
						<i className="fa-brands fa-facebook-messenger"></i>
					</a>
					<a id="viber" href="https://viber.com/" className={`${styleIcon}`} target="_blank" rel="noreferrer">
						<i className="fa-brands fa-viber"></i>
					</a>
					<a id="telegram" href="https://web.telegram.org/a/" className={`${styleIcon}`} target="_blank" rel="noreferrer">
						<i className="fa-brands fa-telegram"></i>
					</a>
				</div>
			</div>
		</div>
	)
}