import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  register: true,
  disable: process.env.NODE_ENV === "development",
  reloadOnOnline: true,
  workboxOptions: {
    skipWaiting: true,
    clientsClaim: true,
  },
});

const nextConfig = {
  reactStrictMode: true,
};

export default withPWA(nextConfig);