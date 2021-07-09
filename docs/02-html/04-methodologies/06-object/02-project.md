---
title: Project
---

> ~~Define patterns which are unique to the project which consists of several components and other elements.~~
> 
> ~~Elements that make up contents for your project come under this layer, such as an article list, user profile, or image gallery.~~

Original FLOCLSS is defined the above, but it's hard to categorize in case of Web site project, there are many unique styles for each page, so we define `Project` as **Define patterns which are unique layout for each page**.

You must use `.p-` prefix for Project.

## File naming rules

Project is created for each page, so you must prepare the files naming related with URL. You should name **replaced "Slash(/)" to "Hyphen(-)" of URL** except for top page.

About top page file name is "_index.scss".

* http://example.com/
  * _index.scss
  * `.p-index`
* http://example.com/about/
  * _about.scss
  * `.p-about`
* http://example.com/product/
  * _product.scss
  * `.p-product`
* http://example.com/product/foo/
  * _product-foo.scss
  * `.p-product-foo`
  
## Example

```html
<div class="p-index">
    <section class="p-index__section">
        <h2 class="p-index__section__head">SECTION TITLE</h2>
        
        <ul class="p-index__section__nav">
            <li class="p-index__section__nav__item">
                <a href="#" class="c-button p-index__section__nav__anchor">BUTTON</a>
            </li>
        </ul>
    </section>
</div>
```

```scss
// scss/object/project/_index.scss
.p-index {
    &__section {
        // something style
        
        &__head {
            // something style
        }
        
        &__nav {
            // something style
            
            &__item {
                // something style
            }
            
            &__anchor {
                // something style
            }
        }
    }
}
```

:::tip TIPS
This Example Project has has Component (`.c-button`), but you must NOT overwrite styles of those inside of Project. Please make Child Project (`.p-index__section__nav__anchor`), then you can define the style of that element.

Reference : [Don't include other component](/docs/html/methodologies/important/child)
:::