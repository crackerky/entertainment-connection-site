# Entertainment Connect Site

つながりをプロデュースし、エンタメで日本を動かす - Entertainment Connectの公式サイト

## 🎯 概要

このプロジェクトは、Entertainment Connectの理念・ビジョン・サービスを紹介する公式ウェブサイトです。

### 主な特徴

- **3Dヒーローセクション**: Three.jsとGSAPを使用した没入型の3D宇宙シーン
- **最新のアニメーション技術**: Framer Motionを使用したマイクロインタラクションとスクロールトリガーアニメーション
- **レスポンシブデザイン**: モバイルからデスクトップまで、すべてのデバイスに対応
- **高パフォーマンス**: Next.js 14による高速なページロード
- **モダンなUI/UX**: Tailwind CSSによる美しいデザイン

## 🚀 技術スタック

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js
- **Animation**: Framer Motion, GSAP
- **UI Components**: Radix UI
- **Icons**: Lucide React

## 📦 インストール

```bash
# リポジトリのクローン
git clone https://github.com/crackerky/entertainment-connection-site.git

# ディレクトリへ移動
cd entertainment-connection-site

# 依存関係のインストール
npm install
```

## 🏃‍♂️ 開発サーバーの起動

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) でアプリケーションが起動します。

## 🏗️ ビルド

```bash
npm run build
```

## 📁 プロジェクト構造

```
src/
├── app/              # Next.js App Router
├── components/       # Reactコンポーネント
│   ├── layout/      # レイアウトコンポーネント
│   ├── sections/    # ページセクション
│   └── ui/          # UIコンポーネント
└── lib/             # ユーティリティとアニメーション
```

## 🎨 主なセクション

1. **3D Hero**: Three.jsによる宇宙をテーマにした3Dヒーローセクション
2. **Mission**: 理念 - つながりをプロデュースし、エンタメで日本を動かす
3. **Vision**: ビジョン - エンタメの力で、日本を再び"世界一躍動する経済大国"へ
4. **Why Us**: なぜ私たちなのか - 強みと差別化要因
5. **Achievements**: 実績 - DealerStudio、埋め卓くんなどの成果

## 🎭 カラーパレット

- **プライマリ**: RGB(45, 86, 160) - 深い青色
- **セカンダリ**: RGB(105, 175, 98) - 鮮やかな緑色
- **アクセント**: RGB(188, 213, 48) - ビビッドな黄緑色

## 🎯 主要機能

- **DealerStudio**: 採用管理システム（150名超の応募獲得）
- **埋め卓くん**: 集客支援ツール（店舗の過去最高売上を更新）
- **データ分析**: エンタメ業界特化の分析ツール
- **イベント企画**: トータルサポート

## 📈 パフォーマンス最適化

- 画像の遅延読み込み
- コンポーネントの動的インポート
- Three.jsシーンの最適化
- アニメーションの最適化
- CSSの最小化

## 🚀 デプロイ

Netlifyでの自動デプロイが設定されています。mainブランチへのプッシュで自動的にデプロイされます。

## 📝 ライセンス

© 2025 Entertainment Connect. All rights reserved.