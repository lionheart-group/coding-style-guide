---
title: Transclude
---

> transclude, section

## Description

```php
{{ transclude 'foo/bar' }}
```

```php
{{ section baz }}
{{ end section baz }}
```

Transclude the other template. `{{ transclude }}` specify target template and display at `{{ section }}` area.


## Example

```php title="Template - layout.tpl"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Page title</title>
</head>
<body>
    {{ section content }}
    {{ end section content }}
</body>
</html>
```

```php title="Template - index.tpl"
{{ transclude 'layout' }}

{{ section content }}
    <p>This is a index content.</p>
{{ end section content }}
```

```html title="Output"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Page title</title>
</head>
<body>
    <p>This is a index content.</p>
</body>
</html>
```

### Mutiple transclude

It can be mutiple transclude.

```php title="Template - grandparent.tpl"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Page title</title>
</head>
<body>
    <p>This is grandparent content.</p>

    {{ section content }}
    {{ end section content }}
</body>
</html>
```

```php title="Template - parent.tpl"
{{ transclude 'grandparent' }}

{{ section content }}
<div class="parent-box">
    <p>This is parent content.</p>

    {{ section main }}
    {{ end section main }}
</div>
{{ end section content }}
```

```php title="Template - child.tpl"
{{ transclude 'parent' }}

{{ section main }}
<div class="child-box">
    <p>This is child content.</p>
</div>
{{ end section main }}
```

```html title="Output"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Page title</title>
</head>
<body>
    <p>This is grandparent content.</p>

    <div class="parent-box">
        <p>This is child content.</p>

        <div class="child-box">
            <p>This is child content.</p>
        </div>
    </div>
</body>
</html>
```