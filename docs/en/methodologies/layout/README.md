# Layout

> The layout layer defines the styles of large common containers such as the header area, main contents area, sidebar and footer.

FLOCSS allows to use id for `Layout`, but we're using `.l-` prefix, unless you have special reason.

## Example

```html
<header class="l-header">
    <p class="l-header__logo">
        <img class="l-header__logo__image">
    </p>
</header>
```

```scss
// scss/layout/_header.scss
.l-header {
    &__logo {
        &__image {
        }
    }
}
```