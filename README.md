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

## ライセンス

MIT
