# Atom

## インストール

### 手動

[公式サイト](https://atom.io/)からインストーラーがダウンロード出来ます。

### macOS

**Homebrew Cask**

```
brew cask install atom
```

### Windows

**Scoop**

```
scoop install atom
```

## editorconfig

コードの統一性を高めるために、インデントタイプ・インデントサイズ・行末のスペースの削除など、[EditorConfig](https://editorconfig.org/)を用いて、統一の設定情報を利用します。

### 必要プラグイン

* [editorconfig](https://atom.io/packages/editorconfig)

### 初期設定

初期設定では、`insert_final_newline`・`trim_trailing_whitespace`が標準プラグインと衝突して有効にならないので、標準プラグインの`whitespace`を無効化します。

1. 設定を開く (`⌘ + ,`)
2. "Packages"をクリック
3. "whitespace"の"Disable"をクリック


## stylelint

CSSの構文の揺れ、インデント崩れを防止するために、[stylelint](https://stylelint.io/)を用いて構文チェックを行っています。  
下のプラグインインストール・設定を行うと、CSS保存時に自動的に構文チェック→修正を行います。

### 必要プラグイン

* [linter](https://atom.io/packages/linter)
* [linter-stylelint](https://atom.io/packages/linter-stylelint)
* [linter-ui-default](https://atom.io/packages/linter-ui-default)
* [intentions](https://atom.io/packages/intentions)
* [busy-signal](https://atom.io/packages/busy-signal)

### 自動修正設定

1. 設定を開く (`⌘ + ,`)
2. "Packages"をクリック
3. "linter-stylelint"の"Settings"をクリック
4. "Attempt to fix styles on save"にチェック


## eslint

CSS同様に、JavaScriptの構文揺れ、インデント崩れを防止するために、[eslint](https://eslint.org/)を用いて構文チェックを行っています。

### 必要プラグイン

* [linter](https://atom.io/packages/linter)
* [linter-eslint](https://atom.io/packages/linter-eslint)
* [linter-ui-default](https://atom.io/packages/linter-ui-default)
* [intentions](https://atom.io/packages/intentions)
* [busy-signal](https://atom.io/packages/busy-signal)

### 自動修正設定

1. 設定を開く (`⌘ + ,`)
2. "Packages"をクリック
3. "linter-eslint"の"Settings"をクリック
4. "Automatic Fixes" > "Fix errors on save"にチェック
