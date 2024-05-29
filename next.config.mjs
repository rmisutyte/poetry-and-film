/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "hello", value: "there" }],
      },
    ];
  },
};

export default nextConfig;
