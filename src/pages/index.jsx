import Layout from "../components/Layout";
import Main from "./Main";
import { AboutPhotographers } from "./AboutPhotographers";
import { Admin } from "./Admin";
export const routes = [
	{
		path: '/',
		element: <Layout component={<Main />} />,
	},
	{
		path: '/admin',
		element: <Admin />,
	},
	{
		path: '/about-photographers',
		element: <Layout component={<AboutPhotographers />} />,
	},
];	