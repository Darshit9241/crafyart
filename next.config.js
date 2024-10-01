const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: false,
});

module.exports = withBundleAnalyzer({
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_ENV: "PRODUCTION",
  },
  compilerOptions: {
    baseUrl: "src",
  },
});
