# 旧バージョンとの違い

## タグセレクタは使用しないこと

以前のバージョンでは子セレクタに限りタグセレクタを許可していました。しかし、タグの構造を変更した場合（例えば`<span>`を`<a>`にした場合）等に、スタイルが適用されなくなることがあるため、タグセレクタは禁止することにしました。

詳細: [タグセレクタは使用しないこと](/ja/methodologies/important/selector.md)

## Viewsレイヤーの廃止

ページごとのスタイルで`Views`レイヤーを用意していましたが、`Project`に役割を移して廃止しました。

ページごとにCSSを読み込んでいる処理も不要になりました。

詳細: [Project](/ja/methodologies/object/project/)

## Utilityクラス名の変更

* SP/PCレイアウトのみの表示クラス
  * `.sp`, `.pc` -> `.u-sp-only`, `.u-pc-only`
* SPのみ有効化される電話番号リンク
  * `.u-tel-anchor` -> `.u-anchor-tel`
  * また、`<a href>`に直接指定することが可能になりました（以前は`<span data-href>`に指定してJSで処理していました）
