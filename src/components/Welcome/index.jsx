import React from "react";

export default function Welcome({ handleSearch, searchText }) {
	const selectInputColor = 'text-white/80 hover:text-white font-medium cursor-pointer'
	return (
		<div
			id="welcome"
			className="h-96 w-full bg-gray-900 flex flex-col justify-center italic font-bold tracking-wide relative"
		>
			<div className="w-8/12 max-sm:w-10/12 mx-auto">
				<h4 className="text-white text-3xl max-sm:text-xl w-full text-center">"Розкрийте силу моментів - Ваша історія, Наш об'єктив"</h4>
				<div className="bg-white/90 rounded-2xl w-full p-3 mt-5 text-gray font-normal text-xl max-sm:my-6">
					<i className="fa-regular fa-magnifying-glass mr-5"></i>
					<input
						type="text"
						placeholder="Знайдіть фото які вас цікавлять"
						onChange={(event) => handleSearch(event.target.value)}
						value={searchText}
						className="border-none outline-none bg-transparent w-10/12 max-sm:text-lg max-sm:placeholder:text-lg"
					/>
				</div>
				<div className="mt-2 ">
					<span className="text-white font-medium">Трендові запити: </span>
					<span
						className={`${selectInputColor}`}
						onClick={(event) => handleSearch(event.target.innerText)}
					>
						природа
					</span>
					<span className={`${selectInputColor} mr-1`}>,</span>
					<span
						className={`${selectInputColor}`}
						onClick={(event) => handleSearch(event.target.innerText)}
					>
						офіс
					</span>
					<span className={`${selectInputColor} mr-1`}>,</span>
					<span
						className={`${selectInputColor}`}
						onClick={(event) => handleSearch(event.target.innerText)}
					>
						весілля
					</span>
				</div>
			</div>
			<a href="#container-images" >
				<i
					className="fa-solid fa-angle-down cursor animate-bounce pointer absolute left-1/2 bottom-3 -translate-x-2/4 -translate-y-2/4 text-4xl text-white">
				</i>
			</a>
		</div>
	)
}