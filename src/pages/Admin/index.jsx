import React, { useState, useEffect } from "react";
import { TextField } from "../../components/TextField";
import { Button } from "../../components/Button";
import { ActionImages } from "../ActionImages";
export function Admin() {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [isAdmin, setIsAdmin] = useState(false);
	const changePassword = (event) => {
		setPassword(event.target.value)
	}

	const changeLogin = (event) => {
		setLogin(event.target.value)
	}

	const checkIsAdmin = (event) => {
		event.preventDefault();
		console.log(process.env.REACT_APP_LOGIN, process.env.REACT_APP_PASSWORD)
		console.log(login, password)
		if (login === process.env.REACT_APP_LOGIN && password === process.env.REACT_APP_PASSWORD) {
			console.log(process.env.REACT_APP_LOGIN, process.env.REACT_APP_LOGIN)
			console.log(login, password)
			setIsAdmin(true);
		}

	}
	return (
		<div className="w-full h-screen flex">
			{
				isAdmin ?
					<ActionImages />
					:
					<form action="" className="flex w-5/12 max-sm:w-6/12 h-3/6 max-md:h-2/6 rounded-3xl shadow-md justify-evenly roun flex-col m-auto">
						<TextField
							onChange={changeLogin}
							placeholder="Логін"
							className="w-full h-14 text-2xl placeholder:text-2xl p-4"
						/>
						<TextField
							onChange={changePassword}
							type="password"
							placeholder="Пароль"
							className="w-full h-14 text-2xl placeholder:text-2xl p-4"
						/>
						<Button
							onClick={checkIsAdmin}
							className="border p-4 my-4 text-3xl max-sm:text-2xl rounded-3xl cursor-pointer border-slate-800 hover:bg-slate-800 hover:text-white"
						>
							Ввійти
						</Button>
					</form>
			}

		</div>
	)
}