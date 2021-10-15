export const getStaticPaths = async () => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/`);
	const data = await res.json();
	const paths = data.map((ninja) => {
		return {
			params: { id: ninja.id.toString() },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const id = context.params.id;
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
	const data = await res.json();

	return {
		props: { person: data },
	};
};

const Details = ({ person }) => {
	return (
		<>
			<h1>Details</h1>
			<div>
				<div>
					<h1>{person.name}</h1>
					<h1>
						Address : {person.address.street}, {person.address.suite},{" "}
						{person.address.city}, {person.address.zipcode}
					</h1>
					<h1>Phone : {person.phone}</h1>
				</div>
			</div>
		</>
	);
};

export default Details;
