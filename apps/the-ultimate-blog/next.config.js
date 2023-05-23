const { withNx } = require('@nrwl/next/plugins/with-nx.js');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'ebhwmitkbhdwyccdkuzj.supabase.co',
      'avatars.githubusercontent.com',
      'images.unsplash.com',
      'lh3.googleusercontent.com',
      'thurrott.s3.amazonaws.com',
      'plus.unsplash.com',
      'tx.shadcn.com',
    ],
  },
  nx: {
    svgr: false,
  },
};

module.exports = withNx(nextConfig);
