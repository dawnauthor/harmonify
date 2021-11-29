import { useSession, signIn } from "next-auth/react"
import { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import spotifyApi from "../lib/spotify";

const useSpotify = () => {
	// const currentTrackId = useRecoilValue(currentTrackIdState);
	// const playlistId = useRecoilValue(playlistIdState);
	// const spotifyApi = new SpotifyWebApi({
	// 	clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
	// 	clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
	// });
	const {data:session} = useSession();

	useEffect(() => {
		if (session) {
			//If refresh token is broken somehow, force to login page
			if(session.error === 'RefreshAccessTokenError') {
				signIn();
			}
			spotifyApi.setAccessToken(session.user.accessToken);
		}
	}, [session]);

	return spotifyApi;
}

export default useSpotify;
