# Foundation

> The Foundation layer defines the defaults. This includes resetting browser stylings with Reset.css and Normalize.css and defining basic styling. The background color and basic typography of the project should be included in this layer.

We're using [Sanitize.css](https://csstools.github.io/sanitize.css/) for initializing styles, and putting into `foundation/_base.scss` about additional initial style. (e.g. we're removing margin of `h*`, bullet of `ul` and so on)

And, you can store the variables and mixins into `Foundation`.

> [!TIP]
> [Typical mixins](/en/methodologies/foundation/mixin.md)