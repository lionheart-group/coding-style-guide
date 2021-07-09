---
title: Application::useTicket
---

> Use ticket once and destroy ticket session

## Description

```php
public void Application::useTicket( string $name )
```

Use ticket once and destroy ticket session. `useTicket` will return boolean and will return TRUE only if the value in the hidden input is same with the ticket session in the server. See [Application::setTicket](/docs/fegg/basic/others/tickets/setticket).

## Arguments

| Name    | Data type | Default | Remarks          |
| :------ | :-------- | :------ | :--------------- |
| $name   | string    |         | Ticket param key |

## Example

```php title="Controller"
if($this->useTicket('foo'))
{
    //code
}
```