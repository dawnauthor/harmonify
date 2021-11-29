import { signOut, useSession } from "next-auth/react";
import { ChevronDownIcon } from '@heroicons/react/outline';
import { useEffect, useState } from "react";
import { shuffle } from "lodash";
import { useRecoilState, useRecoilValue } from "recoil";
import { playlistIdState, playlistState } from "../atoms/playlistAtom";
import useSpotify from "../hooks/useSpotify";
import { Songs } from "./";

const colors = [
	"from-indigo-500",
	"from-blue-500",
	"from-green-500",
	"from-red-500",
	"from-yellow-500",
	"from-pink-500",
	"from-purple-500"
];

const Center = () => {
	const {data: session, status} = useSession();
	const [color, setColor] = useState(null);
	//Get read only value of state, no mutators like useState would require.
	const playlistId = useRecoilValue(playlistIdState);
	const [playlist, setPlaylist] = useRecoilState(playlistState);
	const spotifyApi = useSpotify();

	useEffect(() => {
		//using lodash
		setColor(shuffle(colors).pop());
		// setColor(colors[Math.floor(Math.random() * colors.length)]);
	}, [playlistId]);

	useEffect(() => {
		spotifyApi.getPlaylist(playlistId)
		.then((data) => {
			setPlaylist(data.body);
		})
		.catch((error) => {
			console.log('ERROR', error);
		});
	}, [playlistId, spotifyApi]);

	return (
		<div className="flex-grow h-screen overflow-y-scroll scrollbar-hide">
			<header className="absolute top-5 right-8">
				<div className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2" onClick={signOut}>
					<img
						className="w-10 h-10 rounded-full mr-4"
						src={session?.user?.image}
						alt=""
					/>
					<h2 className="text-white">{session?.user.name}</h2>
					<ChevronDownIcon className="w-5 h-5 text-white" />
				</div>
			</header>
			<section className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8`}>
				<img className="h-44 w-55 shadow-2xl" src={playlist?.images?.[0]?.url} alt="Playlist Art" />
				<div>
					<p>Playlist</p>
					<h1 className="text-2xl md:text-3xl xl:text-5xl font-bold">{playlist?.name}</h1>
				</div>
			</section>

			<div>
				<Songs />
			</div>
		</div>
	)
}

export default Center
