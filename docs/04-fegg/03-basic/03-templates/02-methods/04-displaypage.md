---
title: Application::displayPage
---

> Display compiled template with automatically variables and taking measures for Clickjacking

## Description

```php
public string Application::fetchPage( string $template )
```

`displayPage` method is equipped with the X-Frame-Options HTTP response header set to Deny so that no other contents from the other sites are embedded into your website.

## Arguments

| Name      | Data type | Default | Remarks            |
| --------- | --------- | ------- | ------------------ |
| $template | string    |         | Template file name |

## Example

```php title="code/application/Foo.php"
<?php

class Foo extends Application
{
    function bar(){
        $this->displayPage( 'foo/bar' );
    }
}
```

Displays the [Application::fetchPage](./fetchpage) result after taking precautionary measures from Clickjacking attack.

:::note
It is recommended to use `displayPage` method in compiling your template file for the security of your web users/visitors.
:::