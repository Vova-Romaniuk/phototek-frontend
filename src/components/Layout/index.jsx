import React from "react";
import Header from "../Header";
import { Footer } from "../Footer";
export default function Layout({ component }) {
	return (
		<div className="w-full flex flex-col">
			<Header />
			{component}
			<Footer />
		</div>
	)
}