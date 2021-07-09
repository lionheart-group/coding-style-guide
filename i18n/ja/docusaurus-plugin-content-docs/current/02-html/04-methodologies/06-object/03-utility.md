---
title: Utility
---

> ComponentとProjectレイヤーのObjectのモディファイアで解決することが難しい・適切では無い、わずかなスタイルの調整のための便利クラスなどを定義します。
> 
> Utilityは、Component、ProjectレイヤーのObjectを無尽蔵に増やしてしまうことを防いだり、またこれらのObject自体が持つべきではないmarginの代わりに.mbs { margin-bottom: 10px; }のようなUtility Objectを用いて、隣接するモジュールとの間隔をつくるといった役割を担います。
> 
> またclearfixテクニックのためのルールセットが定義されているヘルパークラスも、このレイヤーに含めます。

接頭辞は`.u-`を利用します。

## 代表的なUtilityクラス

:::note
案件独自に追加・編集されている可能性がありますので参考程度にしてください。
:::


### .u-sp-only / .u-pc-only

PCのみ、SPのみ表示させます。

:::note
以前は`.sp`、`.pc`というクラス名で利用していました。
:::


### .u-font-sans / .u-font-serif

ゴシック体、明朝体のフォント指定を行います。