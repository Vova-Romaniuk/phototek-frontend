import React, { useState, useEffect } from "react";
import ContainerImages from "../../ContainerImages";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import { Link } from "react-router-dom";

export function ActionImages() {
	const [images, setImages] = useState([]);
	const [load, setLoad] = useState(true);
	const [imageId, setImageId] = useState('');
	const [selectedFile, setSelectedFile] = useState(null);

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		setSelectedFile(file);
	};
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
		if (imageId !== '') {
			setImages(prevData => prevData.filter(item => item.id !== imageId));
		}
	}, [imageId])
	useEffect(() => {
		fetchData();
	}, [])

	const uploadImage = async (image, category) => {
		const formData = new FormData();
		formData.append('image', image);
		formData.append('category', category);

		try {
			const response = await axios({
				method: 'post',
				url: 'https://gallery-api.azurewebsites.net/images',
				data: formData,
			});
			setImages([...images, response.data])
			return response.data;
		} catch (error) {
			console.log('Щось пішло не так при завантаженні фото!');
		}
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		const image = document.getElementById('imageInput').files[0];
		const category = document.getElementById('categoryInput').value;
		uploadImage(image, category);
	}
	const stylesInputs = 'w-full border p-4 my-4 text-2xl rounded-3xl cursor-pointer';
	return (
		<div className="w-full h-full flex flex-col">
			<div className="h-16 w-full flex">
				<Link className="h-16 w-fit mt-2 border rounded-xl p-2 text-4xl font-bold cursor-pointer mx-auto text-center" to="/">На головну</Link>
			</div>
			<div className="flex h-[calc(100%-3.5rem)] max-md:flex-col">
				<div className="w-4/12 h-full flex max-md:w-full">
					<form id="uploadForm" className="flex w-10/12 flex-col m-auto" onSubmit={handleSubmit} action="">
						<label className={`${stylesInputs}`} for="imageInput">
							{selectedFile ? selectedFile.name : "Виберіть файл"}
						</label>
						<input className="hidden" type="file" id="imageInput" name="imageInput" onChange={handleFileChange} required />
						<input type="text" className={`${stylesInputs}`} id="categoryInput" placeholder="Категорія" required />
						<button className="border p-4 my-4 text-2xl rounded-3xl cursor-pointer hover:bg-slate-800 hover:text-white" type="submit" >Додати</button>
					</form>
				</div>
				<div className="w-8/12 max-md:w-full">
					{load ?
						<div className="h-[20vh] w-full grid place-items-center">
							<ClipLoader size={150} />
						</div>
						: <ContainerImages images={images} setId={setImageId} forAdmin={true} />
					}
				</div>
			</div>
		</div>
	)
}