// middleware.ts
import { NextResponse } from 'next/server';

// These values should ideally be set as environment variables in Vercel
const AUTH_USER = process.env.AUTH_USER || 'admin';
const AUTH_PASS = process.env.AUTH_PASS || 'password';

export function middleware(request: Request) {
  // Only require authentication in production
  if (process.env.NODE_ENV !== 'production') {
    return NextResponse.next();
  }

  const authHeader = request.headers.get('authorization');
  if (authHeader) {
    // Expected format: "Basic base64encoded(username:password)"
    const base64Credentials = authHeader.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('utf8');
    const [username, password] = credentials.split(':');
    if (username === AUTH_USER && password === AUTH_PASS) {
      return NextResponse.next();
    }
  }

  // If no valid credentials, return a 401 response prompting for Basic Auth
  return new NextResponse('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}

export const config = {
  matcher: '/(.*)',
};
