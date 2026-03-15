module.exports = {
  siteUrl: 'https://escuelaproa.edu.ar',
  generateRobotsTxt: true,
  generateSitemap: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/_next/'],
      },
    ],
    additionalSitemaps: [
      'https://escuelaproa.edu.ar/sitemap.xml',
    ],
  },
};
