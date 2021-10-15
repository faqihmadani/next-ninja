import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const NotFound = () => {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			//router.go(-1);
			router.push("/");
		}, 3000);
	}, []);

	return (
		<>
			<Head>
				<title>404 Not Found</title>
			</Head>
			<div className="flex justify-center items-center flex-col min-h-screen">
				<h1>Oooops...</h1>
				<h1>Not Found</h1>
				<div>
					<p className="inline">Go back to </p>
					<Link href="/">
						<a className="text-blue-500 underline">Home Page</a>
					</Link>
				</div>
			</div>
		</>
	);
};

export default NotFound;
