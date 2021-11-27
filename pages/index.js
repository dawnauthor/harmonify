import Head from 'next/head';
import { Center, Sidebar } from '../components';

export default function Home() {
	return (
		<div className="bg-black h-screen overflow-hidden">
			<Head>
				<title>Harmonify</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main  className="flex">
				<Sidebar />
				<Center />
			</main>

			<div>
				{/* 	player comp */}
			</div>
		</div>
	);
}
