# Kaoriアドバイザー デプロイ手順ガイド

無料でサーバーにデプロイする手順です。**Vercel**（無料）を使う方法を案内します。

---

## 前提

- Bolt.new で香り相談アプリのUIが完成していること
- Dify のエンドポイントURLとAPIキーを取得済みであること

---

## ステップ1：Bolt.new からプロジェクトをエクスポート

1. **Bolt.new** であなたのアプリを開く
2. 画面**左上**のプロジェクト名をクリック
3. **「Export」** → **「Download」** を選択
4. ZIPファイルがダウンロードされる
5. ZIPを解凍し、中のフォルダをこの Kaori フォルダに置く（または任意の場所に置く）

**別の方法：GitHub に直接エクスポート**
- 右上の **GitHub アイコン** をクリック
- リポジトリ名を入力してエクスポート
- 自分のGitHubアカウントにリポジトリが作成される

---

## ステップ2：Vercel アカウント作成（無料）

1. [https://vercel.com](https://vercel.com) にアクセス
2. **「Sign Up」** をクリック
3. **GitHub** でログイン（推奨：デプロイが楽になる）
4. 無料プラン（Hobby）で利用開始

---

## ステップ3：Vercel にデプロイする（2つの方法）

### 方法A：GitHub からデプロイ（推奨）

1. Bolt.new で **GitHub にエクスポート** 済みの場合
2. Vercel のダッシュボードで **「Add New」** → **「Project」**
3. **Import Git Repository** で GitHub のリポジトリを選択
4. **Deploy** をクリック
5. 一度デプロイが完了したら、**ステップ4** で環境変数を設定
6. 再度デプロイ（Settings → Deployments → 最新の右の「⋯」→ Redeploy）

### 方法B：ローカルから Vercel CLI でデプロイ

1. エクスポートしたプロジェクトフォルダを開く
2. ターミナルで以下を実行：

```bash
# Node.js がインストールされていること
npm install
npm install -g vercel
vercel login
vercel
```

3. プロンプトに従い、プロジェクト名や設定を入力
4. デプロイが完了するとURLが表示される
5. **ステップ4** で環境変数を設定後、`vercel --prod` で本番再デプロイ

---

## ステップ4：環境変数を設定する

1. Vercel ダッシュボードで **あなたのプロジェクト** を開く
2. 上部メニューから **「Settings」** を選択
3. 左サイドバーから **「Environment Variables」** をクリック
4. 次の2つを追加：

| 名前 | 値 | 環境 |
|------|-----|------|
| `VITE_DIFY_API_URL` | あなたのDifyエンドポイントURL | Production, Preview, Development |
| `VITE_DIFY_API_KEY` | あなたのDify APIキー | Production, Preview, Development |

5. **Save** をクリック
6. **Deployments** タブに戻り、最新のデプロイを **Redeploy**（再デプロイ）する  
   ※環境変数は再デプロイしないと反映されません

---

## ステップ5：動作確認

1. デプロイ後に表示されるURL（例：`https://kaori-advisor.vercel.app`）にアクセス
2. 「アロマで探す」などでフローを進める
3. 結果画面でDifyの提案が表示されればOK

---

## トラブルシューティング

### 「Dify APIの設定が必要です」と表示される
- 環境変数 `VITE_DIFY_API_URL` と `VITE_DIFY_API_KEY` が正しく設定されているか確認
- 再デプロイしたか確認

### デプロイが失敗する
- プロジェクトのルートに `package.json` があるか確認
- ビルドコマンドが `npm run build` または `vite build` になっているか確認

### CORS エラーが出る
- Dify の設定で、Vercel のドメイン（`*.vercel.app`）を許可する必要がある場合があります。Dify の CORS 設定を確認してください。

---

## 無料プランの目安（Vercel）

- 帯域幅：100GB/月
- デプロイ回数：100回/日
- 個人・小規模用途なら十分

---

## まとめチェックリスト

- [ ] Bolt.new からエクスポート
- [ ] Vercel アカウント作成
- [ ] Vercel にデプロイ
- [ ] 環境変数（VITE_DIFY_API_URL, VITE_DIFY_API_KEY）を設定
- [ ] 再デプロイ
- [ ] URL で動作確認
