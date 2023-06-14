import React from "react";

export function TextField({ placeholder, onChange, required, type = "text", className = "" }) {
	return (
		<input
			type={type}
			className={`w-full static my-3 outline-none h-12 px-3 py-1 font-normal rounded-2xl border-solid border-2 placeholder:decoration-[#A0A9AB] text-xl border-[#D1D7D4] ${className}`}
			placeholder={placeholder}
			onChange={onChange}
			required={required}
		/>
	)
}