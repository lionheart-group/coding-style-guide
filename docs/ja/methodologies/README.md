# CSS構成案

[FLOCSS](https://github.com/hiloki/flocss)をベースに、LHの案件に併せて変更を行ったルールを利用していきます。


## 変更箇所

本来`project`は`component`を組み合わせた要素に対して用いるモノですが、ページ独自のスタイルを定義するモノに変更します。

また、本来`component`はなるべく小さく分割する方が良いのですが、「Webサイト」としては再利用性の頻度は高くないため、**「複数ページにおいて同じレイアウトが使われている要素」**に対して適用するものとします。


## SCSSディレクトリ構成

FLOCSSの基本原則にのっとったディレクトリ構成を用意します。

```
- scss
  ├ foundation/
  ├ layout/
  └ object/
      ├ component/
      ├ project/
      └ utility/
```


## 注意事項

FLOCSSに加えて幾つか独自に制限しているルールがありますので、下記のリンクを確認してください。

* [ファイル名とクラス名の関係について](/ja/methodologies/important/name.md)
* [別Componentを含めないこと](/ja/methodologies/important/child.md)
* [タグセレクタは使用しないこと](/ja/methodologies/important/selector.md)
* [メディアクエリの記述位置](/ja/methodologies/important/media_query.md)


## 各レイヤーの説明

* [Foundation](/ja/methodologies/foundation/)
* [Layout](/ja/methodologies/layout/)
* Object
  * [Component](/ja/methodologies/object/component/)
  * [Project](/ja/methodologies/object/project/)
  * [Utility](/ja/methodologies/object/utility/)