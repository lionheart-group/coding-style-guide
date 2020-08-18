# CSS Methodologies

> [!WARNING]
> There are different rules from the old version. Please see the reference migration guide.  
> [Migrations from Old rules](/en/methodologies/migrations.md)

Basically, We'll follow [FLOCSS](https://github.com/hiloki/flocss/blob/master/README_eng.md) CSS methodologies, and we have the enhanced rules.


## Enhanced rules

Originally in FLOCSS rules, `Project` is defined combination of `Component`, but we define that has own each page style.

And, originally, `Component` should make a small part, but the small component is not so useful in the case of "Web site". so, we define `Component` that **the element that included in multiple pages**.

## SCSS directory structure

We prepare the directory structure same with FLOCSS basic rules.

```
- scss
  ├ foundation/
  ├ layout/
  └ object/
      ├ component/
      ├ project/
      └ utility/
```


## Important points

We prepared several limitations, please see the following links.

* [File name and Class name](/en/methodologies/important/name.md)
* [Don't include other component](/en/methodologies/important/child.md)
* [Don't use tag selector](/en/methodologies/important/selector.md)
* [Place of media query](/en/methodologies/important/media_query.md)


## Explaining of each layers

* [Foundation](/en/methodologies/foundation/)
* [Layout](/en/methodologies/layout/)
* Object
  * [Component](/en/methodologies/object/component/)
  * [Project](/en/methodologies/object/project/)
  * [Utility](/en/methodologies/object/utility/)