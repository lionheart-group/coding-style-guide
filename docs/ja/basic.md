# 基本設定

* インデントスタイル : `スペース`
* インデントサイズ : `4スペース`


## 推奨設定

各プロジェクトには[EditorConfig](https://editorconfig.org/)の設定ファイル`.editorconfig`が含まれていますので、利用しているエディタで適用されるようにプラグインをインストールしてください。

* [VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
* [Atom](https://atom.io/packages/editorconfig)
* [Brackets](https://github.com/kidwm/brackets-editorconfig/)
* Dreamweaverは非対応です


## ディレクトリ構造

```
- htdocs/  # ドキュメントルート
  └ data/
      ├ scss/  # SCSSファイルの構造は後述
      │  ├ foundation/
      │  ├ layout/
      │  ├ object/
      │  │  ├ component/
      │  │  ├ project/
      │  │  └ utility/
      │  └ views/
      │      └ index.scss
      ├ css/  # コンパイルされたCSS（リポジトリには含めません）
      └ img/  # 画像ファイル
          ├ common/  # 共通画像
          └ views/   # 各ページの画像
              └ index/  # トップページの画像
```

> 画像/SCSS/JSファイルはURLによってフォルダを分けます

### 参考例

* http://example.com/
  * **画像** : htdocs/data/img/views/index/
  * **SCSS** : htdocs/data/scss/views/index.scss
  * **JS** : htdocs/data/js/views/index.js
  
* http://example.com/sample/
  * `sample` カテゴリ共通
    * **画像** : htdocs/data/img/views/sample/common/
    * **SCSS** : htdocs/data/scss/views/sample/common.scss
    * **JS** : htdocs/data/js/views/sample/common.js
  * **画像** : htdocs/data/img/views/sample/index/
  * **SCSS** : htdocs/data/scss/views/sample/index.scss
  * **JS** : htdocs/data/js/views/sample/index.js
  * `注意 : sample.css, sample.jsではありません`
  
* http://example.com/sample/test.html
  * `sample` カテゴリ共通
    * **画像** : htdocs/data/img/views/sample/common/
    * **SCSS** : htdocs/data/scss/views/sample/common.scss
    * **JS** : htdocs/data/js/views/sample/common.js
  * **画像** : htdocs/data/img/views/sample/test/
  * **SCSS** : htdocs/data/scss/views/sample/test.scss
  * **JS** : htdocs/data/js/views/sample/test.js
  
* http://example.com/sample/test/
  * `sample` カテゴリ共通
    * **画像** : htdocs/data/img/views/sample/common/
    * **SCSS** : htdocs/data/scss/views/sample/common.scss
    * **JS** : htdocs/data/js/views/sample/common.js
  * `sample/test` カテゴリ共通
    * **画像** : htdocs/data/img/views/sample/test/common/
    * **SCSS** : htdocs/data/scss/views/sample/test/common.scss
    * **JS** : htdocs/data/js/views/sample/test/common.js
  * **画像** : htdocs/data/img/views/sample/test/index/
  * **SCSS** : htdocs/data/scss/views/sample/test/index.scss
  * **JS** : htdocs/data/js/views/sample/test/index.js
  * `注意 : sample/test/, sample/test.scss, sample/test.jsではありません`
  