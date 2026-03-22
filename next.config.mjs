/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  allowedDevOrigins: ['192.168.1.248'],
  async redirects() {
    return [
      {
        source: '/',
        destination: '/movie/discover',
        permanent: true
      }
    ]
  }

};

export default nextConfig;
