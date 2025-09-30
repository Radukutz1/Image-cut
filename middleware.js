export function middleware(request) {
  const url = request.nextUrl;
  const host = request.headers.get('host');
  
  // Handle convert.image-cut.com
  if (host === 'convert.image-cut.com') {
    // For root path, serve converter.html
    if (url.pathname === '/') {
      return Response.rewrite(new URL('/converter.html', request.url));
    }
    // For all other paths on subdomain, also serve converter.html
    return Response.rewrite(new URL('/converter.html', request.url));
  }
  
  // Handle main domain
  if (host === 'image-cut.com') {
    // Specific path for PDF conversion
    if (url.pathname === '/PDFconvert') {
      return Response.rewrite(new URL('/pdfconv.html', request.url));
    }
    // All other paths on main domain serve index.html
    return Response.rewrite(new URL('/index.html', request.url));
  }
  
  // For all other cases, continue normally
  return Response.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|assets|favicon.ico).*)',
  ],
};
