import React from "react";

export function Button({ children, className, onClick }) {
	return (
		<button
			type='submit'
			onClick={onClick}
			className={`border cursor-pointer ${className}`}
		>
			{children}
		</button>
	)
}