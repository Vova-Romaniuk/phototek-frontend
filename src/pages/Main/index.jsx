import React, { useState, useEffect } from "react";
import Welcome from "../../components/Welcome";
import ContainerImages from "../../ContainerImages";
import { IMAGES } from "../../utils/constants";

export default function Main() {
	const [images, setImages] = useState(IMAGES); // початковий стан - пустий масив
	const [searchData, setSearchData] = useState([...images]);
	const [searchText, setSearchText] = useState('');
	const handleSearch = (value) => {
		console.log(value)
		setSearchText(value);
		if (value.trim() === '') {
			setSearchData([...images]);
			return;
		}
		setSearchData(
			images.filter((item) => {
				return item.category.toLowerCase().includes(value.toLowerCase());
			})
		);
	};

	return (
		<div className="flex flex-col">
			<Welcome handleSearch={handleSearch} searchText={searchText} />
			<ContainerImages images={searchData} />
		</div>
	);
}