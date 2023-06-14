import React, { useState, useEffect } from "react";
import Welcome from "../../components/Welcome";
import ContainerImages from "../../ContainerImages";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
export default function Main() {
	const [images, setImages] = useState([]);
	const [searchData, setSearchData] = useState([]);
	const [searchText, setSearchText] = useState('');
	const [load, setLoad] = useState(true);
	const fetchData = async () => {
		try {
			const response = await axios.get('https://gallery-api.azurewebsites.net/images');
			setImages([...response.data]);
			setLoad(false)
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		setLoad(true);
		fetchData();
	}, [])
	useEffect(() => {
		setSearchData([...images])
	}, [images])
	const handleSearch = (value) => {
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
		<div className="flex flex-col ">
			<Welcome handleSearch={handleSearch} searchText={searchText} />
			{load ? <div className="h-[65vh] w-full grid place-items-center"><ClipLoader size={150} /></div> : <ContainerImages images={searchData} />}

		</div>
	);
}