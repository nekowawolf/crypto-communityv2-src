import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'pbs.twimg.com',
      'www.nekowawolf.xyz',
      'nekowawolf.xyz',
      's3.coinmarketcap.com',
      'nekowawolf.github.io',
      'cdn.discordapp.com',
      'avatars.githubusercontent.com',
    ],
  },
};

export default nextConfig;
