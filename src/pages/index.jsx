import Layout from "../components/Layout";
import Main from "./Main";
export const routes = [
	{
		path: '/',
		element: <Layout component={<Main />} />,
	},
];	