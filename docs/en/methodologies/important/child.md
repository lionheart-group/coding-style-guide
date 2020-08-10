# Don't include other component

**You must NOT include other Components in a Component.**

> [!REASON]
> When you make styles in one Component, you can avoid unintentional layout with Components combination.

## Example

> [!BAD]
> You must NOT include `.c-bar` into `.c-foo`, even if you want to change the layout of `.c-bar` inside of `.c-foo`.
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
> You can resolved above issue by preparing a child component of `.c-foo` and assign it together with `.c-bar`.
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