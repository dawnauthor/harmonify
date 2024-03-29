import { useRecoilValue } from "recoil";
import { Song } from "./";
import { playlistState } from "../atoms/playlistAtom";

const Songs = () => {
	const playlist = useRecoilValue(playlistState);
	return (
		<div className="px-8 flex flex-col space-y-1 pb-28 text-white">
			{playlist?.tracks.items.map((track, i) => (
				<Song key={track.track.id} track={track} order={i} />
			))}
		</div>
	);
}

export default Songs;
