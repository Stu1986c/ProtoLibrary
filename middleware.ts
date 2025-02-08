// middleware.ts
import { NextResponse } from 'next/server';

// These values should ideally be stored in environment variables
const AUTH_USER = process.env.AUTH_USER || 'admin';
const AUTH_PASS = process.env.AUTH_PASS || 'password';

export function middleware(request: Request) {
  // Get the Authorization header
  const authHeader = request.headers.get('authorization');

  // If the header exists, verify credentials
  if (authHeader) {
    // Expected format: "Basic base64encoded(username:password)"
    const base64Credentials = authHeader.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('utf8');
    const [username, password] = credentials.split(':');

    if (username === AUTH_USER && password === AUTH_PASS) {
      return NextResponse.next();
    }
  }

  // If no header or wrong credentials, respond with 401 and prompt for Basic Auth
  return new NextResponse('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}

// Apply this middleware to all routes. You can adjust the matcher as needed.
export const config = {
  matcher: '/(.*)',
};
