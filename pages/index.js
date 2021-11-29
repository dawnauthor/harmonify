import { getSession } from 'next-auth/react';
import Head from 'next/head';
import { Center, Player, Sidebar } from '../components';

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
			<div className="sticky bottom-0">
				<Player />
			</div>
		</div>
	);
}

export async function getServerSideProps(context) {
	const session = await getSession(context);
	return {
		props: {
			session
		},
	};
}
