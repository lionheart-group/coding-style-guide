# Place of media query

Please write a style of one element for PC/SP collectively.

> [!TIP]
> We separated PC/SP layout the above and the bottom.

> [!REASON]
> You can find the same style with PC and SP easily when you write it collectively.


## Example

> [!BAD]
> Please don't write a different layout style to the bottom of a file.
>
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
> Please write media query under the each `.c-foo` and `.c-foo__bar` styles.
>
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