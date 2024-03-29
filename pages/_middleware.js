import { getToken } from "next-auth/jwt";
import { NextResponse } from 'next/server';

export async function middleware(req, ev) {
	//User is logged in if token exists
	const token = await getToken({req, secret: process.env.JWT_SECRET });

	const { pathname } = req.nextUrl;
	//allow the request if the following is true...
	// 1. its a request for next-auth session & provider fetching
	// 2. if token exists

	if(pathname.includes('/api/auth') || token) {
		return NextResponse.next();
	}
	//Redirect them to login if they dont have token AND are requesting a protected route
	if(!token && pathname !== '/login') {
		return NextResponse.redirect('/login');
	}
}
