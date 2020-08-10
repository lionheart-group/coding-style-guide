# Migrations from Old rules

## Don't use tag selector

We allowed the child selector, but we changed the rule. Because, child selector has a week point. When you change the tag structures (e.g. when you change `<span>` to `<a>`), child selector won't be available.

Detail: [Don't use tag selector](/en/methodologies/important/selector.md)

## Removed Views layer

We removed `Views` layer, and we use `Project` as define patterns which are unique layout for each page.

Then, you don't need to import each page's css from HTML.

Detail: [Project](/en/methodologies/object/project/)

## Change Utility class names

* The class of displaying PC or SP style
  * `.sp`, `.pc` -> `.u-sp-only`, `.u-pc-only`
* The class of enabling anchor only displaying SP layout
  * `.u-tel-anchor` -> `.u-anchor-tel`
  * Also, you can assign this class to `<a href>` instead `<span data-href>`
