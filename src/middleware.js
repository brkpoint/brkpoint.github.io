import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 
export function middleware(request) {
    return NextResponse.json("dh=ea623dee937e4faa2e2d2b31a8b5fbbe1ad73a6f");
}
 
export const config = {
  matcher: '/.well-known/discord',
}