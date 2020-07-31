# タグセレクタは使用しないこと

Foundationを除き、タグセレクタは使用しないこと。

> [!REASON]
> 意図せずスタイルが適用されてしまうことを防ぎます。

## 事例

> [!BAD]
> 子セレクタ（`A > B`）だとしても、タグセレクタはしないようにしてください。  
> （タグの構造が変わった際に適用されなくなるため）
> 
> ```html
> <div class="c-foo">
>     <p></p>
> </div>
> ```
> 
> ```scss
> // scss/object/component/_foo.scss
> .c-foo {
>     > p {
>         // something style
>     }
> }
> ```

> [!GOOD]
> 子Componentを作成してください。
> 
> ```html
> <div class="c-foo">
>     <p class="c-foo__child"></p>
> </div>
> ```
> 
> ```scss
> // scss/object/component/_foo.scss
> .c-foo {
>     &__child {
>         // something style
>     }
> }
> ```

> [!GOOD]
> `<table>`などタグ構造が複雑なものも子Componentを作成してください。
> 
> ```html
> <table class="c-table">
>     <thead class="c-table__thead">
>         <tr class="c-table__thead__row">
>             <th class="c-table__thead__head"></th>
>             <td class="c-table__thead__data"></td>
>         </tr>
>     </thead>
>     <tbody class="c-table__tbody">
>         <tr class="c-table__tbody__row">
>             <th class="c-table__tbody__head"></th>
>             <td class="c-table__tbody__data"></td>
>         </tr>
>     </tbody>
> </table>
> ```
> 
> ```scss
> // scss/object/component/_table.scss
> .c-table {
>     &__thead {
>         // something style
>         &__row {
>             // something style
>         }
>         &__head {
>             // something style
>         }
>         &__data {
>             // something style
>         }
>     }
>     &__tbody {
>         // something style
>         &__row {
>             // something style
>         }
>         &__head {
>             // something style
>         }
>         &__data {
>             // something style
>         }
>     }
> }
> ```