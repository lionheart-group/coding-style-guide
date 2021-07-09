---
title: Hidden
---

> Display hidden tag

```php
{{ hidden }}
```

Display `<input type="hidden">` from values assigned `Application::setHidden`.

Also see [Application::setHidden](/docs/fegg/basic/templates/helpers/sethidden).

## Example

```php title="Controller"
$this->setHidden('foo', 'bar');
```

```php title="Template"
{{ hidden }}
```

```html title="Output"
<input type="hidden" name="foo" value="bar">
```