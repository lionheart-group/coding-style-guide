# メディアクエリの記述位置

*以前のルールでは、PCまたはSPの記述をファイル上部、もう一方のレイアウトをファイル下部にまとめて記述していました。*

各要素ごとに各レイアウトのスタイルをまとめて記述します。

> [!REASON]
> 各レイアウトの記述を近くに記述することで、スタイルの重複記述や、上書き漏れを防止します。


## 事例

> [!BAD]
> ファイル下部にまとめて別レイアウトのスタイルを記述しないようにしてください。
> ```scss
> // scss/object/component/_foo.scss
> .c-foo {
>     // something PC layout style
>     &__foo {
>         // something PC layout style
>     }
> }
> 
> @include mq_sp {
>     .c-foo {
>         // something SP layout style
>         &__foo {
>             // something SP layout style
>         }
>     }
> }
> ```

> [!GOOD]
> `.c-foo`、`.c-foo__bar`それぞれの直下にメディアクエリのスタイルを記述します。
> ```scss
> // scss/object/component/_foo.scss
> .c-foo {
>     // something PC layout style
>     @include mq_sp {
>         // something SP layout style
>     }
>     
>     &__foo {
>         // something PC layout style
>         @include mq_sp {
>             // something SP layout style
>         }
>     }
> }
> ```