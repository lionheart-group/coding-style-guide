# Visual Studio Code

## インストール

### 手動

[公式サイト](https://code.visualstudio.com/)からインストーラーがダウンロード出来ます。

### macOS

**Homebrew Cask**

```
brew cask install vscode
```

### Windows

**Scoop**

```
scoop install vscode
```

## editorconfig

コードの統一性を高めるために、インデントタイプ・インデントサイズ・行末のスペースの削除など、[EditorConfig](https://editorconfig.org/)を用いて、統一の設定情報を利用します。

### 必要プラグイン

* [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)


## stylelint

CSSの構文の揺れ、インデント崩れを防止するために、[stylelint](https://stylelint.io/)を用いて構文チェックを行っています。  
下のプラグインインストール・設定を行うと、CSS保存時に自動的に構文チェック→修正を行います。

### 必要プラグイン

* [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

### 自動修正設定

1. 設定を開く (`⌘ + ,`)
2. 画面右上のボタンから`settings.json`を開く
3. 下記の記述を追記  
   `editor.codeActionsOnSave`はeslintと同じなので、既に存在してるのであれば行を追加

```js
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
}
```

## eslint

CSS同様に、JavaScriptの構文揺れ、インデント崩れを防止するために、[eslint](https://eslint.org/)を用いて構文チェックを行っています。

### 必要プラグイン

* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### 自動修正設定

1. 設定を開く (`⌘ + ,`)
2. 画面右上のボタンから`settings.json`を開く
3. 下記の記述を追記  
   `editor.codeActionsOnSave`はstylelintと同じなので、既に存在してるのであれば行を追加

```js
"editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
}
```