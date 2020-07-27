# 別コンポーネントを含めない

**コンポーネントの中に別のコンポーネントを含めない**ようにしてください。

> [!REASON]
> コンポーネントの組み合わせで意図しないレイアウトが発生しないように、コンポーネント内で完結するようにします。

## 事例

<!--panels:start-->

<!--div:left-panel-->

> [!BAD]
> `.c-foo`内の`.c-bar`のレイアウトを変更したい場合でも、`.c-foo`内に`.c-bar`を含めないようにしてください。
> 
> ```html
> <div class="c-foo">
>     <div class="c-bar"></div>
> </div>
> ```
> 
> ```scss
> // scss/object/component/_foo.scss
> .c-foo {
>     // something style
>     .c-bar {
>         // something style
>     }
> }
> ```

<!--div:right-panel-->

> [!GOOD]
> 上記例の解決作の一つとして、例えばc-barに並列でc-fooの子コンポーネントを追加します。 
>
> ```html
> <div class="c-foo">
>     <div class="c-foo__child c-bar"></div>
> </div>
> ```
> 
> ```scss
> // scss/object/component/_foo.scss
> .c-foo {
>     // something style
>     &__child {
>         // something style
>     }
> }
> ```

<!--panels:end-->