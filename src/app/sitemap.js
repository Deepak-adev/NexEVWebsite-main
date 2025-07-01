export default function sitemap() {
  const baseUrl = 'https://nexev.com';
  
  // Add your static routes
  const routes = [
    '',
    '/about',
    '/products',
    '/solutions',
    '/technology',
    '/partnerships',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
} 