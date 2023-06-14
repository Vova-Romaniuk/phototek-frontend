import React from "react";

export default function ViewImage({ src, alt = "" }) {

	return (
		<div
			className="w-full max-sm:h-40 h-72 rounded-2xl overflow-hidden shadow-md cursor-pointer relative"
		>
			<img
				src={src}
				alt={alt}
				className="object-cover w-full h-full"
			/>
		</div>
	)
}