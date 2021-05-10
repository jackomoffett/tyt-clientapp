module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:8080/:path*", // Proxy to Backend
      },
    ];
  },
  env: {
    AV_API_KEY: "3SBECYWFZ052WOPE",
  },
};
