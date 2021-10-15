import Head from "next/head";
import { useState } from "react";

export default function Home() {
	const [nama, setNama] = useState("faqih");
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<Head>
				<title>Next Ninja</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
				<h1 className="text-3xl  text-green-900 font-montserrat font-medium">
					Hello World!
				</h1>
				<h3 className="font-festive text-[100px] text-[#0178fe]">
					Senang Bertemu Denganmu
				</h3>
			</main>
		</div>
	);
}
