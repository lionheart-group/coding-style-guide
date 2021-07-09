---
title: Checked/Selected
---

> checked, selected, options, hidden

## Description

```php
{{ checked key=$foo value=$bar }}
```

If `value` find in `key`, display `checked="checked"`.

```php
{{ selected key=$foo value=$bar }}
```

If `value` find in `key`, display `selected="selected"`.

## Example

```php title="Template"
/*
$var  = 'value';
$same = 'value';
$diff = 'not value';
*/

<input type="checkbox" name="radio" value="{{ $same }}"{{ checked key=$same value=$var }}> {{ $same }}
<input type="checkbox" name="radio" value="{{ $diff }}"{{ checked key=$diff value=$var }}> {{ $diff }}

<select name="select">
    <option value="{{ $same }}"{{ checked key=$same value=$var }}>{{ $same }}</option>
    <option value="{{ $diff }}"{{ checked key=$diff value=$var }}>{{ $diff }}</option>
</select>
```

```html title="Output"
<input type="checkbox" name="radio" value="value" checked="checked"> value
<input type="checkbox" name="radio" value="not value"> not value

<select name="select">
    <option value="value" selected="selected">value</option>
    <option value="not value">not value</option>
</select>
```

### Multiple checkbox

```php template="Template"
/*
$var   = array('value1', 'value2');
$same1 = 'value1';
$same2 = 'value2';
$diff  = 'not value';
*/

<input type="checkbox" name="checkbox[]" value="{{ $same1 }}"{{ checked key=$same1 value=$var }}> {{ $same1 }}
<input type="checkbox" name="checkbox[]" value="{{ $same2 }}"{{ checked key=$same2 value=$var }}> {{ $same2 }}
<input type="checkbox" name="checkbox[]" value="{{ $diff }}"{{ checked key=$diff value=$var }}> {{ $diff }}
```

```html template="Output"
<input type="checkbox" name="checkbox[]" value="value1" checked="checked"> value
<input type="checkbox" name="checkbox[]" value="value2" checked="checked"> value
<input type="checkbox" name="checkbox[]" value="not value"> not value
```