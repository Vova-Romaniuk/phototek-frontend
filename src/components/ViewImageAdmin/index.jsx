import React from "react";
import ViewImage from "../ViewImage";
import axios from "axios";

export function ViewImageAdmin({ src, id, setId, alt = "" }) {
	const handleDelete = async () => {
		setId(id);
		try {
			await axios.delete(`https://gallery-api.azurewebsites.net/images/${id}`);
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<div className="w-full h-fit relative">
			<ViewImage src={src} />
			<button
				onClick={handleDelete}
				className="absolute top-3 right-3 bg-transparent px-4 py-2 text-2xl text-red-800 border-red-800 rounded-full hover:bg-white/70"
			>
				<i class="fa-solid fa-xmark"></i>
			</button>
		</div>
	)
}