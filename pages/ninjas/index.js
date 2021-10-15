import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await res.json();
	return {
		props: { data: data },
	};
};

const Ninjas = ({ data }) => {
	return (
		<div className="w-9/12 mx-auto">
			<Head>
				<title>Ninja</title>
			</Head>
			<h1>All Ninja</h1>
			<div className=" flex flex-col space-y-5 mt-10">
				{data.map((ninja) => (
					<Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
						<a className="p-5 bg-gray-300 rounded hover:shadow-lg hover:cursor-pointer relative">
							<div className="rounded absolute left-0 top-0 h-full w-1 bg-blue-600"></div>
							<h1>{ninja.name}</h1>
							<p>Email : {ninja.email}</p>
						</a>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Ninjas;
