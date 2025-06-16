/** @type {import('next').NextConfig} */
const nextConfig = {
  // 画像最適化の設定
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1年間のキャッシュ
  },

  // HTTPヘッダーの設定
  async headers() {
    return [
      {
        // すべての静的アセットに対するキャッシュ設定
        source: '/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // フォントファイルのキャッシュ設定
        source: '/:all*(woff|woff2|ttf|otf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // JavaScriptとCSSファイルのキャッシュ設定
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // HTMLファイルのキャッシュ設定（短めに）
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate',
          },
        ],
      },
    ]
  },

  // 圧縮を有効化
  compress: true,

  // React Strict Modeを有効化
  reactStrictMode: true,

  // SWCによる高速化
  swcMinify: true,
}

module.exports = nextConfig