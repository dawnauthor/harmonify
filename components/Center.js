import { useSession } from "next-auth/react";

const Center = () => {
	const {data: session, status} = useSession();
	console.log('session', session);
	return (
		<div className=" flex flex-grow text-white">
			<header>
				<div>
					<img
						className="w-10 h-10 rounded-full mr-4"
						src={session?.user?.image}
						alt=""
					/>
					<h2>{session?.user.name}</h2>
				</div>
			</header>
		</div>
	)
}

export default Center
