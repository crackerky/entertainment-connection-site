# エンタメ×つながり企業サイト

stores.funを参考にした、エンターテインメントとつながりをテーマにした企業サイトです。

## 技術スタック

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **shadcn/ui**
- **Framer Motion**

## プロジェクト構成

```
src/
├── app/                  # Next.js App Router
├── components/          # コンポーネント
│   ├── ui/             # shadcn/ui コンポーネント
│   ├── layout/         # レイアウトコンポーネント
│   └── sections/       # セクションコンポーネント
├── lib/                # ユーティリティ関数
└── types/              # TypeScript型定義
```

## 特徴
- **アニメーション**: Framer Motionによる滑らかなアニメーション
- **レスポンシブ**: モバイルからデスクトップまで完全対応
- **コンポーネント設計**: 再利用可能なコンポーネント構造
- **型安全**: TypeScriptによる型安全性

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# 本番サーバーの起動
npm start
```

## Netlify デプロイメント設定

### 環境変数

1. `.env.local.example` をコピーして `.env.local` を作成
   ```bash
   cp .env.local.example .env.local
   ```

2. Netlify の Personal Access Token を設定
   - [Netlify User Settings](https://app.netlify.com/user/applications#personal-access-tokens) でトークンを生成
   - `.env.local` に `NETLIFY_ACCESS_TOKEN` を設定

### Netlify サイトでの環境変数設定

Netlify のサイト設定で以下の環境変数を設定してください：

1. Netlify ダッシュボードでサイトを選択
2. Site settings → Environment variables に移動
3. `NETLIFY_ACCESS_TOKEN` を追加（値は生成したトークン）

### MCP (Model Context Protocol) サーバー連携

このプロジェクトは Netlify MCP サーバーと連携して、Claude Code からの直接デプロイメントが可能です。

## ライセンス

MIT
