import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
	return (
		<nav className="flex justify-between py-5 items-center">
			<div className="flex items-center space-x-5">
				<Image src="/vercel.svg" width={50} height={50} />
				<h1>Ninja List</h1>
			</div>
			<div className="flex space-x-5">
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/about">
					<a>About</a>
				</Link>
				<Link href="/ninjas">
					<a>Ninja Listing</a>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
