//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'ebhwmitkbhdwyccdkuzj.supabase.co',
      'avatars.githubusercontent.com',
      'images.unsplash.com',
      'lh3.googleusercontent.com',
      'thurrott.s3.amazonaws.com',
    ],
  },
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

module.exports = withNx(nextConfig);
