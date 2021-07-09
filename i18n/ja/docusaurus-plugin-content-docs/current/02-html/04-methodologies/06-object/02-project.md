---
title: Project
---

> ~~プロジェクト固有のパターンであり、いくつかのComponentと、それに該当しない要素によって構成されるものを定義します。~~
> 
> ~~例えば、記事一覧や、ユーザープロフィール、画像ギャラリーなどコンテンツを構成する要素などが該当します。~~

本来のProjectの定義は上記の通りですが、Webサイト制作においてはComponentとProjectの分類が困難な事、ページごとに独自のレイアウトが頻出することから、LHのコーディングスタイルでは**ページ固有のパターンの要素**と定義します。

接頭辞は`.p-`を利用します。

## ファイル命名規則

ページごとに生成されるため、ProjectのファイルはURLに連動した名前で用意し、トップページ以外は原則**「スラッシュ（/）」を「ハイフン（-）」に置き換えた名前**を指定します。

トップページは「_index.scss」とします。

* http://example.com/
  * _index.scss
  * `.p-index`
* http://example.com/about/
  * _about.scss
  * `.p-about`
* http://example.com/product/
  * _product.scss
  * `.p-product`
* http://example.com/product/foo/
  * _product-foo.scss
  * `.p-product-foo`
  
## 例

```html
<div class="p-index">
    <section class="p-index__section">
        <h2 class="p-index__section__head">SECTION TITLE</h2>
        
        <ul class="p-index__section__nav">
            <li class="p-index__section__nav__item">
                <a href="#" class="c-button p-index__section__nav__anchor">BUTTON</a>
            </li>
        </ul>
    </section>
</div>
```

```scss
// scss/object/project/_index.scss
.p-index {
    &__section {
        // something style
        
        &__head {
            // something style
        }
        
        &__nav {
            // something style
            
            &__item {
                // something style
            }
            
            &__anchor {
                // something style
            }
        }
    }
}
```

:::tip TIPS
Component（`.c-button`）を含んでいますが、Project内でスタイルを上書きするのではなく、`.p-index__section__nav__anchor`を用意して、このProject内でスタイルを定義します。

参考 : [別Componentを含めない](/docs/html/methodologies/important/child)
:::