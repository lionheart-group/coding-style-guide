---
title: Application::setHidden
---

> Set hidden data

## Description

```php
public void Application::setHidden( mixed $name, [ string $value = "" ] )
```

Set input field hidden to your template from controller. In template, write `{{ hidden }}`, this will display `<input type="hidden">` with your assigned name and value.

See also [Hidden](#).

## Arguments

| Name   | Data type      | Default | Remarks                                                           |
| ------ | -------------- | ------- | ----------------------------------------------------------------- |
| $id    | string / array |         | hidden name. If in array, syntax must be `array($name => $value)` |
| $value | string         | ""      | hidden value                                                      |

## Example

```php title="Controller"
$this->setHidden( 'foo', 'bar' );
```

```html title="Template"
{{ hidden }}
```

```html title="Output"
<input type="hidden" name="foo" value="bar">
```

### Assigning Multiple Parameters

You can assign multiple parameters.

```php title="Controller"
$params = array(
    'foo' => 'bar',
    'baz' => 'qux',
);
$this->setHidden($params);
```

```html title="Template"
{{ hidden }}
```

```html title="Output"
<input type="hidden" name="foo" value="bar">
<input type="hidden" name="baz" value="qux">
```