import { atom } from "recoil";

export const currentTrackIdState = atom({
	key: 'currentTrackIdState', //unique Id (with respect to other atoms/selectors)
	default: null, //default value
});

export const isPlayingState = atom({
	key: 'isPlayingState', //unique Id (with respect to other atoms/selectors)
	default: false, //default value
});
