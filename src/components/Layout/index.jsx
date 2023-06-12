import React from "react";
import Header from "../Header";

export default function Layout({ component }) {
	return (
		<div className="w-full flex flex-col">
			<Header />
			{component}
		</div>
	)
}