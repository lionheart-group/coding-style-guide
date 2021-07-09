---
title: File name and Class name
---

* **You must create the file the same name with the prefix** of classes for `Layout`, `Project`, `Component`, `Utility`, except for the files in Foundation.
* **You must not include multiple prefix class names in one file**, except for `Utility` files that have the special reason for preparing different layout for PC/SP (`.u-pc-***`, `.u-sp-***`).

:::info REASON
When you put the same name with a file name and class name, It will avoid the conflict with the class name.
:::

## Example

:::danger BAD
You must not include the following class name in one file, even if similar name.

```scss
// scss/object/component/_foo.scss
.c-foo {
    // something style
}
.c-foo-bar {
    // something style
}
```
:::

:::tip GOOD
Please separate files like this.
>
```scss
// scss/object/component/_foo.scss
.c-foo {
    // something style
}
```

```scss
// scss/object/component/_foo-bar.scss
.c-foo-bar {
    // something style
}
```
:::
