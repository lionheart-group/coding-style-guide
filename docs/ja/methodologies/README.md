# CSS構成案

## 概要

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