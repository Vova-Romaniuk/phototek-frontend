import React, { useState } from "react";

export default function ViewImage({ src, alt = "" }) {
	const [isHovering, setIsHovering] = useState(false);
	const handleMouseOver = () => {
		setIsHovering(true);
	};
	const handleMouseOut = () => {
		setIsHovering(false);
	};

	return (
		<div
			className="w-full h-72 rounded-2xl overflow-hidden shadow-md cursor-pointer relative"
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
		>
			<img
				src={src}
				alt={alt}
				className="object-cover w-full h-full"
			/>
			{/* {
				isHovering &&
				<div
					className="w-14 h-14 absolute top-3 right-3 rounded-2xl flex shadow-md"
					onClick={downloadPhoto}
				>
					<i className="fa-regular fa-cloud-arrow-down text-2xl m-auto text-gray-500"></i>
				</div>
			} */}
		</div>
	)
}