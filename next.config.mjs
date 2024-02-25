/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                hostname: 'i.ibb.co'
            },
            {
                hostname: 'img.freepik.com'
            }
        ]
    }
};

export default nextConfig;
