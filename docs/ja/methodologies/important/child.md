# 別Componentを含めない

**Componentの中に別のComponentを含めない**ようにしてください。  
また、**子Componentを単独で利用しない**ようにしてください。

> [!REASON]
> Componentの組み合わせで意図しないレイアウトが発生しないように、Component内で完結するようにします。

## 事例 (1)

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

> [!GOOD]
> 上記例の解決作の一つとして、例えばc-barに並列でc-fooの子Componentを追加します。 
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

## 事例(2)

> [!BAD]
> 子Component`.c-bar`を親Component`.c-bar__child`無しで利用しないようにしてください。
>
> ```html
> <div class="c-foo">
>     <div class="c-bar__child"></div>
> </div>
> ```

> [!GOOD]
> 子Component`.c-bar__child`は必ず親Component`.c-bar`内に含まれる様に構築してください。
>
> ```html
> <div class="c-foo">
>     <div class="c-bar">
>         <div class="c-bar__child"></div>
>     </div>
> </div>
> ```
>
> または
>
> ```html
> <div class="c-foo c-bar">
>     <div class="c-bar__child"></div>
> </div>
> ```