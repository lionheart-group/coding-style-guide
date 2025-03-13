

--- docs/env/deprecated/virtualbox.mdx ---

---
sidebar_position: 1
---

# VirtualBox

:::danger Deprecated

on M1 mac, VirtualBox won't work, so please implement local environment by [Docker](/docs/env/docker).

:::

## Install Applications

You need installing following applications.

- [VirtualBox](https://www.virtualbox.org/)
- [Vagrant](https://www.vagrantup.com/)
- [Homebrew](https://brew.sh/)
- [Git](https://git-scm.com/)
- [Ansible](https://www.ansible.com/)

### How to install

**VirtualBox**

1. Access to [website](https://www.virtualbox.org/), and click download button.
2. Click "OS X hosts" link

**Vagrant**

1. Access to [website](https://www.vagrantup.com/), and click download button.
2. Click macOS > "64-bit" link

**Homebrew and Git**

Please check [Git page](/docs/env/git).

**Ansible**

After installing Homebrew.

```bash
brew install ansible
```

### Check the installation

```bash
# Vagrant
vagrant -v
  > Vagrant *.*.*

# Git
git --version
  > git version *.*.*

# Ansible
ansible --version
  > ansible *.*.*
```

## Set up Local environment

There are ansible template of local environment on [GitHub](https://github.com/sushat4692/VagrantAnsible).

### Initial setting up

Open Terminal, and run following commands.

```bash
# Creating Developing Directory
mkdir ~/Virtual

# Anywhere is OK, move to your favorite place
# For example, into your user directory
cd ~/

# Getting datas from GitHub
git clone https://github.com/sushat4692/VagrantAnsible.git

# Move to downloaded directory
cd VagrantAnsible

# Running Vagrant command
vagrant up --provision
```

## After that

After you setting up, you can use local environment and it's related localhost to `~/Virtual`.

```
http://foo.localhost/ -> ~/Virtual/foo/htdocs
http://bar.localhost/ -> ~/Virtual/bar/htdocs
```


--- docs/env/deprecated/watchman.mdx ---

---
sidebar_position: 2
---

# Watchman

:::warning Deprecated

Watchman is no need to install for latest task runner.

:::

We are using [Watchman](https://facebook.github.io/watchman/) for file watching and automatically compiling. so, please install to your PC.

## macOS

You can install through Homebrew.

```bash
brew install watchman
```

## Windows

Watchman does not provide installer for Windows, so it's a little hard...

[Official website's instruction](https://facebook.github.io/watchman/docs/install.html#binary-downloads-for-linux-macos-and-windows-beta)

1. Download from [GitHub Relase](https://github.com/facebook/watchman/releases)
2. After extracting, copy to where you want (e.g. `Program Files`)
3. Add directory path of `bin` inside of watchman to `PATH`（[Reference of how to add to PATH](https://helpdeskgeek.com/windows-10/add-windows-path-environment-variable/)）


--- docs/env/dnsmasq.mdx ---

---
sidebar_position: 7
---

# Dnsmasq

For macOS environment, localhost subdomains are not able to confirm by browsers except for Google Chrome. But, if you install and setting [Dnsmasq](https://thekelleys.org.uk/dnsmasq/doc.html), you'll be able to confirm localhost on any browsers.

:::info

No need to install on Windows environment.

:::

## Install

You need installing following applications.

- [Homebrew](https://brew.sh/)
- [Dnsmasq](https://thekelleys.org.uk/dnsmasq/doc.html)

### How to install

**Homebrew**

Please check [Git page](/docs/env/git).

**Dnsmasq**

After installing Homebrew.

```bash
brew install dnsmasq
```

## Setting up

```bash
# Adding *.localhost setting to Dnsmasq configuration file
echo 'address=/.localhost/::1' >> $(brew --prefix)/etc/dnsmasq.conf
echo 'address=/.localhost/127.0.0.1' >> $(brew --prefix)/etc/dnsmasq.conf

# Preparing *.localhost resolver file
sudo mkdir -v /etc/resolver
sudo bash -c 'echo "nameserver ::1" >> /etc/resolver/localhost'
sudo bash -c 'echo "nameserver 127.0.0.1" >> /etc/resolver/localhost'

# Run Dnsmasq and Setting up auto-start
sudo brew services start dnsmasq

# Then you can see it :)
```


--- docs/env/docker.mdx ---

---
sidebar_position: 6
---

# Docker

## Install Applications

You need to install [Docker Desktop](https://www.docker.com/products/docker-desktop).

## Set up Local environment

There are Dockerfile template of local environment on [GitHub](https://github.com/sushat4692/docker-lamp).

### Initial setting up

Open Terminal, and run following commands.

```bash
# Creating Developing Directory
mkdir ~/Virtual

# Anywhere is OK, move to your favorite place
# For example, into your user directory
cd ~/

# Getting datas from GitHub
git clone https://github.com/sushat4692/docker-lamp.git

# Move to downloaded directory
cd docker-lamp

# Duplicate `.env.sample` to `.env`
cp .env.sample .env
```

## Operating Docker commands

```bash
# Up (Build and Start) containers
./command.sh up

# Start containers
./command.sh start

# Stop containers
./command.sh stop

# Delete containers, images and volumes
./command.sh delete
```

### How to change PHP versions

This docker setting is able to change PHP version by the following command:

```bash
./command.sh up {version number}
```

so, for example if you want to run PHP 8.1:

```bash
./command.sh up 81
```

## After that

After you setting up, you can use local environment and it's related localhost to `~/Virtual`.

```
http://foo.localhost/ -> ~/Virtual/foo/htdocs
http://bar.localhost/ -> ~/Virtual/bar/htdocs
```


--- docs/env/git.mdx ---

---
sidebar_position: 3
---

# Git

We're managing our project source code by [GitHub](https://github.com/).

When you download/upload to GitHub, you need to use Git command.

## Installation

### For macOS

You can install Git command through [Homebrew](https://brew.sh/).

**Homebrew**

```bash
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

**Git**

After installing Homebrew.

```bash
brew install git
```

### For Windows

You can install Git command through [Scoop](https://scoop.sh).

**Scoop**

```bash
Invoke-Expression (New-Object System.Net.WebClient).DownloadString('https://get.scoop.sh')

# or shorter
iwr -useb get.scoop.sh | iex
```

**Git**

After installing Scoop.

```bash
scoop install git
```

## Advanced

Git is able to make diff between target branches or commits. By using it, you can prepare the file list that was changed between branches or commits.

If you're using [Zsh](https://www.zsh.org/) (Default shell of macOS), you can add the following function to your `~/.zshrc` file.

```shell
# Create diffrence files between current with specified commit
# git_diff ${commit_no}
function git_diff() {
    git diff $1 --diff-filter=ACMR --name-only | sed -e 's/\(^.*$\)/"\1"/g' | xargs git archive --format=zip --prefix=_diff/ HEAD -o _diff.zip
}
```

If you're using [Fish](https://fishshell.com/), you can add the following function to your `~/.config/fish/config.fish` file. **(I haven't check this works properly yet, so if it's not working, please let me know)**

```shell
# Create diffrence files between current with specified commit
# git_diff ${commit_no}
function git_diff
    git diff $argv[1] --diff-filter=ACMR --name-only | sed -e 's/\(^.*$\)/"\1"/g' | xargs git archive --format=zip --prefix=_diff/ HEAD -o _diff.zip
end
```

After adding the function, you can use `git_diff` command to create a zip file that contains the difference between the current branch and the specified commit.

```shell
git_diff ${commit_no}

# Example usage : compare with the latest commit
git_diff HEAD^
```


--- docs/env/index.mdx ---

---
sidebar_position: 1
---

# Environment

We're using GitHub repository, and Developing project in local environment through Docker.

Please check each documents, and prepare environment to your machine.


--- docs/env/node.mdx ---

---
sidebar_position: 4
---

# Node.js (Volta)

You can install Node.js through many kind of ways, and LH project has required different Node.js version depends on the project. so, we should install Node.js version manager to switch version easier.

Then, we recommend to install [Volta](https://volta.sh/) for it.

## If you already installed Node.js

First, please check where to install Node.js.

```bash
which node
# -> /Users/(user name)/.volta/bin/node : Already installed by Volta
# -> /usr/local/bin/node (or other) : Need to uninstall exist Node.js
```

### Uninstall Node.js

Please uninstall Node.js if you already installed Node.js.

```bash
brew uninstall node
```

## Install Volta

```bash
# Install volta
curl https://get.volta.sh | bash

# Install node LTS version
volta install node@lts

# Check Node.js place
which node
```

## Install specific Node.js version

Volta is able to install specific version.

```bash
# If you want to install Node.js 14
volta install node@14
```

and, able to assign specific version to specific project.

```bash
# Please run the following command under the project directory
volta pin node@14
```


--- docs/env/pnpm.mdx ---

---
sidebar_position: 5
---

# pnpm (corepack)

pnpm is a fast, disk space efficient package manager for Node.js. It is a drop-in replacement for npm, but faster and more efficient.

## If you already installed pnpm and corepack

We're using [corepack](https://github.com/nodejs/corepack) to install pnpm. so you need to uninstall pnpm if you already installed pnpm.

```bash
# Uninstall from Homebrew
brew uninstall pnpm
# Uninstall from volta
volta uninstall pnpm
```

corepack is a package manager for Node.js that installs packages from the npm registry. And, Node.js is managed by Volta. so, You can install corepack by Volta as well, and need to uninstall corepack if you already installed corepack.

```bash
brew uninstall corepack
```

## Install/Enable corepack

### Install corepack

```bash
volta install corepack
```

### Enable corepack

```bash
corepack enable
corepack pnpm enable
```

## How to use pnpm

You can use pnpm as same as npm.

```bash
pnpm install
pnpm run watch
```


--- docs/env/vscode.mdx ---

---
sidebar_position: 2
---

# Visual Studio Code

## Installation

### Manual install

You can download installer from [Official website](https://code.visualstudio.com/).

### macOS

**Homebrew Cask**

```bash
brew install --cask vscode
```

### Windows

**Scoop**

```bash
scoop install vscode
```

## editorconfig

Our project has [EditorConfig](https://editorconfig.org/) setting file (.editorconfig). EditorConfig helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs.

### Required plugin

- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

## stylelint

[stylelint](https://stylelint.io/) helps you avoid errors and enforce conventions in your styles.

After you install the following plugin and settings, stylelint will automatically check and fix your syntax.

### Required plugin

- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

### Settings

1. Open preferences (`⌘ + ,`)
2. Click the top-right button and open `settings.json` file
3. Insert the following syntax `editor.codeActionsOnSave` is same with eslint configuration. so if it's already exists, just insert the content of it.

```json
"editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
}
```

## eslint

[ESLint](https://eslint.org/) statically analyzes your code to quickly find problems.

After you install the following plugin and settings, ESLint will automatically check and fix your syntax.

### Required plugin

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### Settings

1. Open preferences (`⌘ + ,`)
2. Click the top-right button and open `settings.json` file
3. Insert the following syntax `editor.codeActionsOnSave` is same with stylelint configuration. so if it's already exists, just insert the content of it.

```json
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
}
```


--- docs/fegg/basic/controller.mdx ---

---
sidebar_position: 2
---

# Controller

## About Controller

### What is a Controller?

Controllers are the basis of the application, as it determines how requests are being handled in HTTP. A Controller is a class file that is named associated with a URI.

URL and Controller are closely related. (see [URL](/docs/fegg/basic/url))

```
http://exaple.com/foo/bar
```

In the example above, the framework will try to find a `bar` function in the controller named **Foo.php** and load it.

If the URL accessed from the given example, it would load in **code/application/Foo.php** given that this file exists.

```php title="code/application/Foo.php"
<?php

class Foo extends Application
{
    function bar(){
        //process here...
    }
}
```

### Class

You should have the same name class and file name, and extends `Application` class.

```php title="code/application/Controller.php"
<?php

class Controller extends Application
{

}
```

### Constructor

You sould call parent(`Application`) class constructor.

```php title="code/application/Controller.php"
<?php

class Controller extends Application
{
    /**
     * Constructor
     */
    function __construct()
    {
        parent::__construct();
    }
}
```

### Initialize

Fegg have a Initialize method apart from constructor.

It is `__init()` method that called after the constructor.

```php title="code/application/Controller.php"
<?php

class Controller extends Application
{
    /**
     * Initialize
     */
    function __init()
    {
        // inityalize process
    }
}
```

The difference between \_\_init and constructor is that \_\_init is run after make self instance, so **it can use Application method by** `$this`.

:::note

You can omit a initialize.

:::

### Method

Run a second segment name method in URL.

```php title="code/application/Controller.php"
<?php

class Controller extends Application
{
    // Run this function by http://example.com/controller/foo
    function foo()
    {
        // any process
    }
}
```

If second segment is empty and you don’t edit basic settings, run the `index()` method.

```php title="code/application/Controller.php"
<?php

class Controller extends Application
{
    // Run this function by http://example.com/controller/index
    //   or http://example.com/controller/
    function index()
    {
        // any process
    }
}
```

:::note

See [Initial settings](/docs/fegg/first/config) about initial method name.

:::

If you want to make a secret method, you should add **underbar(\_)** head of method name.

```php title="code/application/Controller.php"
// http://example.com/controller/_secret
//   -> This URL don't call _secret() method

<?php

class Controller extends Application
{
    // This method is secret from URL dispatcher
    function _secret()
    {
        // any process
    }
}
```

### Arguments

Third segment later are passed to a method.

```php title="code/application/Controller.php"
<?php

class Controller extends Application
{
    // $param will be assigned "bar"
    //   by http://example.com/controller/foo/bar
    function foo( $param )
    {
        echo $param; // bar
    }
}
```

Third segment later are all passed.

```php title="code/application/Controller.php"
<?php

class Controller extends Application
{
    // $param1 will be "bar" and $param2 will be "baz"
    //   by http://example.com/controller/foo/bar/baz
    function foo( $param1, $param2 )
    {
        echo $param1; // bar
        echo $param2; // baz
    }
}
```

## Template of Controller class

```php title="code/application/Index.php"
<?php
/**
 * Index Class
 * // This file name should be Index.php
 */
class Index extends Application
{
    /**
     * Constructor
     */
    function __construct() {
        parent::__construct();
    }

    /**
     * Initialize progress
     * This method run after making self instance.
     * So, it can use Application class method, for example "$this->in()".
     * It is the difference between __init and construct.
     * If this method is nothing, initializing progress is omitted.
     */
    function __init()
    {
    }

    /**
     * Common progress
     * If you add the underbar(_) head of method name, it be internal method.
     * So, it can't called by URL dispatcher.
     */
    function _common()
    {
    }

    /**
     * Default page display method
     * If you input only class name URL, run this method.
     * It is not necessary, but recommend be that default page display method name is index.
     */
    function index()
    {
        // Common progress
        $this->_common();

        // Display compiled template
        $this->displayPage('index');
    }
}
/* End Of File: Index.php */
```


--- docs/fegg/basic/others/config/loadconfig.mdx ---

---
sidebar_position: 1
---

# Application::loadConfig

> Loading config file

## Description

```php
public void Application::loadConfig( string $name, string $languageCode = '' )
```

Load config file and assign to config variable on Controller.

## Arguments

| Name          | Data type | Default | Remarks           |
| ------------- | --------- | ------- | ----------------- |
| $name         | string    |         | Configu file name |
| $languageCode | string    | ''      | Language code     |

## Example

```php title="code/config/sample.php"
<?php
// You need to prepare same variable name with file name
$sample = array();

$sample['foo'] = 'bar';
$sample['baz'] = 'qux';
```

```php title="Controller"
$this->loadConfig('sample');

var_dump($this->config['sample']);
```

```html title="Output"
array(2) { ["foo"]=> string(3) "bar" ["baz"]=> string(3) "qux" }
```


--- docs/fegg/basic/others/index.mdx ---

---
sidebar_position: 1
---

# About Other methods

Fegg has other methods that you may use in your application code and display.

## Config

- [Application::loadConfig](/docs/fegg/basic/others/config/loadconfig)
  - Loading config file

## Ticket

Ticket is useful in securing your own form processing. Setting ticket will return a hashed random string using md5 function and is going to be a part of your session. This ticket can also be applied as [Hidden](/docs/fegg/basic/templates/rules/hidden) input on the form. That means this ticket exists both on the server and client side and we can match them once the form is submitted and validate if they are the same.

- [Application::setTicket](/docs/fegg/basic/others/tickets/setticket)
  - Set ticket data and start ticket session
- [Application::useTicket](/docs/fegg/basic/others/tickets/useticket)
  - Use ticket once and destroy ticket session


--- docs/fegg/basic/others/tickets/setticket.mdx ---

---
sidebar_position: 1
---

# Application::setTicket

> Set ticket data and start ticket session

## Description

```php
public void Application::setTicket( string $name )
```

Set ticket data and start ticket session

## Arguments

| Name  | Data type | Default | Remarks          |
| :---- | :-------- | :------ | :--------------- |
| $name | string    |         | Ticket param key |

## Example

```php title="Controller"
$this->setTicket('foo');

$foo = $this->getSession('ticket_foo');
echo $foo;
```

```html title="Output"
670f2f1232f30d4d716c1bc9c8a58388
```

Once the `setTicket` method is called, it will return a hashed random string and will start a new session with your given parameter as key prefixed with ticket\_, the returned string will be its value. This will also automatically use the `setHidden` method that you can set on form for security evaluation.

```php title="Template"
{{ hidden }}
```

```html title="Output"
<input type='hidden' name='ticket_foo' value='670f2f1232f30d4d716c1bc9c8a58388' />
```


--- docs/fegg/basic/others/tickets/useticket.mdx ---

---
sidebar_position: 2
---

# Application::useTicket

> Use ticket once and destroy ticket session

## Description

```php
public void Application::useTicket( string $name )
```

Use ticket once and destroy ticket session. `useTicket` will return boolean and will return TRUE only if the value in the hidden input is same with the ticket session in the server. See [Application::setTicket](/docs/fegg/basic/others/tickets/setticket).

## Arguments

| Name  | Data type | Default | Remarks          |
| :---- | :-------- | :------ | :--------------- |
| $name | string    |         | Ticket param key |

## Example

```php title="Controller"
if($this->useTicket('foo'))
{
    //code
}
```


--- docs/fegg/basic/parameters/cookie/getcookie.mdx ---

---
sidebar_position: 2
---

# Application::getCookie

> Get COOKIE data

## Description

```php
public void Application::getCookie( [ string $name = "" ] )
```

Get COOKIE data. If you omit argument, `getCookie` return all COOKIE data.

## Arguments

| Name  | Data type | Default | Remarks          |
| :---- | :-------- | :------ | :--------------- |
| $name | string    |         | Cookie param key |

## Example

```php title="Controller - First.php"
$this->setCookie('foo', 'bar');
```

```php title="Controller - Second.php"
$this->getCookie('foo'); // -> bar
```

### Get all cookie datas

If you omit argument, `getCookie` return all COOKIE data.

```php title="Controller - First.php"
$this->setCookie('foo', 'bar');
$this->setCookie('baz', 'qux');
```

```php title="Controller - Second.php"
var_dump( $this->getCookie() );
```

```html title="Output"
array(2) { ["foo"]=> string(3) "bar" ["baz"]=> string(3) "qux" }
```


--- docs/fegg/basic/parameters/cookie/setcookie.mdx ---

---
sidebar_position: 1
---

# Application::setCookie

> Set COOKIE data

## Description

```php
public void Application::setCookie( string $name, string $value, [ string $expire = "" ], [ string $path = "/" ] )
```

Set COOKIE data.

## Arguments

| Name    | Data type | Default | Remarks          |
| :------ | :-------- | :------ | :--------------- |
| $name   | string    |         | Cookie param key |
| $value  | string    |         | Value            |
| $expire | string    | ""      | Expired time     |
| $path   | string    |         | Enabled path     |

## Example

If you omit third argument, expired time will be **after 1 week** (604800 seconds).

```php title="Controller"
$this->setCookie('foo', 'bar');
```

You can set a expired time at 3rd argument.

```php title="Controller"
// This Cookie's expired time is after 60 seconds.
$this->setCookie('foo', 'bar', 60);
```

You can set a Enabled path at 4th argument.

```php title="Controller"
// This Cookie enable under the "/test/" path.
$this->setCookie('foo', 'bar', null, '/test/');
```


--- docs/fegg/basic/parameters/cookie/unsetcookie.mdx ---

---
sidebar_position: 3
---

# Application::unsetCookie

> Unset COOKIE data

## Description

```php
public void Application::unsetCookie( [ string $name = "" ] )
```

Unset COOKIE data.

## Arguments

| Name  | Data type | Default | Remarks          |
| :---- | :-------- | :------ | :--------------- |
| $name | string    |         | Cookie param key |

## Example

```php title="Controller - First.php"
$this->setCookie('foo', 'bar');
```

```php title="Controller - Second.php"
$this->getCookie('foo'); // -> bar
```

```php title="Controller - Third.php"
$this->unsetCookie('foo');
echo $this->getSession('foo'); // -> ''
```


--- docs/fegg/basic/parameters/index.mdx ---

---
sidebar_position: 1
---

# About Parameters

Fegg has a helper methods for POST, GET, SESSION, and COOKIE.

## POST/GET

Get request data that automatically converted single/double quote and character code.

- [Application::in](/docs/fegg/basic/parameters/post_get/in)
  - Get request data (POST/GET)

## SESSION

Set and read Session parameters. This automatically call `session_start`, so you don't need to call it.

- [Application::setSession](/docs/fegg/basic/parameters/session/setsession)
  - Set SESSION data (and call session_start)
- [Application::getSession](/docs/fegg/basic/parameters/session/getsession)
  - Get SESSION data
- [Application::unsetSession](/docs/fegg/basic/parameters/session/unsetsession)
  - Unset SESSION data

## COOKIE

Set and read COOKIE parameters.

- [Application::setCookie](/docs/fegg/basic/parameters/cookie/setcookie)
  - Set COOKIE data
- [Application::getCookie](/docs/fegg/basic/parameters/cookie/getcookie)
  - Get COOKIE data
- [Application::unsetCookie](/docs/fegg/basic/parameters/cookie/unsetcookie)
  - Unset COOKIE data


--- docs/fegg/basic/parameters/post_get/in.mdx ---

---
sidebar_position: 1
---

# Application::in

> Get request data (POST/GET)

## Description

```php
public void Application::in( [ string $name = "" ], [ type $method = "" ] )
```

Get request data that automatically converted single/double quote and character code.

## Arguments

| Name    | Data type | Default | Remarks             |
| :------ | :-------- | :------ | :------------------ |
| $name   | string    | ""      | Request param key   |
| $method | string    | ""      | null or POST or GET |

## Example

```php title="Controller - GET"
// http://example.com/?foo=get

echo $this->in('foo'); // -> get
echo $this->in('foo', 'get'); // -> get
echo $this->in('foo', 'post'); // -> NULL
```

```php title="Controller - POST"
// http://example.com/ : POST('foo' => 'post')

echo $this->in('foo'); // -> post
echo $this->in('foo', 'get'); // -> NULL
echo $this->in('foo', 'post'); // -> post
```

If POST and GET have same name arguments, POST is priority than GET.

```php title="Controller - GET and POST"
// http://example.com/?foo=get : POST('foo' => 'post')

echo $this->in('foo'); // -> post
echo $this->in('foo', 'get'); // -> get
echo $this->in('foo', 'post'); // -> post
```

You can get all request data when omit a first argument.

```php title="Controller"
// http://example.com/ : POST('foo' => 'bar', 'baz' => 'qux')

var_dump( $this->in() );
```

```html title="Output"
array(2) { ["foo"]=> string(3) "bar" ["baz"]=> string(3) "qux" }
```


--- docs/fegg/basic/parameters/session/getsession.mdx ---

---
sidebar_position: 2
---

# Application::getSession

> Get SESSION data

## Description

```php
public void Application::getSession( [ string $name = "" ] )
```

Get SESSION data. If you omit argument, `getSession` return all SESSION data.

## Arguments

| Name  | Data type | Default | Remarks           |
| :---- | :-------- | :------ | :---------------- |
| $name | string    |         | Session param key |

## Example

```php title="Controller - First.php"
$this->setSession('foo', 'bar');
```

```php title="Controller - Second.php"
$this->getSession('foo'); // -> bar
```

### Get all session datas

If you omit argument, `getSession` return all SESSION data.

```php title="Controller - First.php"
$this->setSession('foo', 'bar');
$this->setSession('baz', 'qux');
```

```php title="Controller - Second.php"
var_dump( $this->getSession() );
```

```html title="Output"
array(2) { ["foo"]=> string(3) "bar" ["baz"]=> string(3) "qux" }
```


--- docs/fegg/basic/parameters/session/setsession.mdx ---

---
sidebar_position: 1
---

# Application::setSession

> Set SESSION data (and call session_start)

## Description

```php
public void Application::setSession( string $name, mixed $value )
```

Set SESSION data and automatically call `session_start` method.

## Arguments

| Name    | Data type | Default | Remarks           |
| :------ | :-------- | :------ | :---------------- |
| $name   | string    |         | Session param key |
| $method | mixed     |         | Value             |

## Example

```php title="Controller"
$this->setSession('foo', 'bar');
```


--- docs/fegg/basic/parameters/session/unsetsession.mdx ---

---
sidebar_position: 3
---

# Application::unsetSession

> Unset SESSION data

## Description

```php
public void Application::unsetSession( [ string $name = "" ] )
```

Unset SESSION data. If you omit argument, `unsetSession` remove all SESSION data.

## Arguments

| Name  | Data type | Default | Remarks           |
| :---- | :-------- | :------ | :---------------- |
| $name | string    |         | Session param key |

## Example

```php title="Controller - First.php"
$this->setSession('foo', 'bar');
```

```php title="Controller - Second.php"
$this->getSession('foo'); // -> bar
```

```php title="Controller - Third.php"
$this->unsetSession('foo');
echo $this->getSession('foo'); // -> ''
```

### Remove all session datas

If you omit argument, `unsetSession` remove all SESSION data.

```php title="Controller - First.php"
$this->setSession('foo', 'bar');
$this->setSession('baz', 'qux');
```

```php title="Controller - Second.php"
$this->unsetSession();
echo $this->getSession('foo'); // -> ''
echo $this->getSession('baz'); // -> ''
```


--- docs/fegg/basic/templates/helpers/sethidden.mdx ---

---
sidebar_position: 2
---

# Application::setHidden

> Set hidden data

## Description

```php
public void Application::setHidden( mixed $name, [ string $value = "" ] )
```

Set input field hidden to your template from controller. In template, write `{{ hidden }}`, this will display `<input type="hidden">` with your assigned name and value.

See also [Hidden](#).

## Arguments

| Name | Data type | Default | Remarks |
| --- | --- | --- | --- |
| $id | string / array |  | hidden name. If in array, syntax must be `array($name => $value)` |
| $value | string | "" | hidden value |

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


--- docs/fegg/basic/templates/helpers/sethtmlheader.mdx ---

---
sidebar_position: 3
---

# Application::setHtmlHeader

> Set HTML Header

## Description

```php
public void Application::setHtmlHeader( string $header )
```

Set HTML Header

## Arguments

| Name    | Data type | Default | Remarks                  |
| ------- | --------- | ------- | ------------------------ |
| $header | string    |         | Appending header content |

## Example

```php title="Controller"
$this->setHtmlHeader( 'Content-type: text/javascript' );
```

Append `Content-type: text/javascript` to HTML header.


--- docs/fegg/basic/templates/helpers/setsiteinfo.mdx ---

---
sidebar_position: 1
---

# Application::setSiteinfo

> Set website information (ex. title, description, keywords)

## Description

```php
public void Application::setSiteinfo( string $id, string $value )
```

Set website information (ex. title, description, keywords). Assigned values will be stored in `$site` variable that you can use in template.

## Arguments

| Name   | Data type | Default | Remarks |
| ------ | --------- | ------- | ------- |
| $id    | string    |         | Key     |
| $value | string    |         | Value   |

## Example

```php title="Controller"
$this->setSiteinfo( 'title', 'Site Title' );
```

```html title="Template"
<title>{{ $site.title }}</title>
```

```html title="Output"
<title>Site Title</title>
```


--- docs/fegg/basic/templates/index.mdx ---

---
sidebar_position: 1
---

# About Template

## About Template

Fegg is equipped with its own template engine where you can separate application code (PHP Code) and display (HTML/CSS). Fegg uses the `{{}}` tag for your application code in the template file. It runs a method that compile templates from Controller class.

Template files are save under the **code/template/** directory with name format of `template_name.tpl`.

## Display methods

Display methods call the template file from Controller class.

Below are the display methods in Fegg but it is recommended to use only the `displayPage` method to avoid Clickjacking attacks.

- [Application::displayTemplate](/docs/fegg/basic/templates/methods/displaytemplate)
  - Display compiled template
- [Application::fetchTemplate](/docs/fegg/basic/templates/methods/fetchtemplate)
  - Return compiled template into a string
- [Application::fetchPage](/docs/fegg/basic/templates/methods/fetchpage)
  - Return compiled template with declared controller and template variables into a string
- [Application::displayPage](/docs/fegg/basic/templates/methods/displaypage)
  - Display compiled template with declared controller and template variables and taking precautionary measures on Clickjacking attacks

## Template helper methods

Template helper methods are used for passing special variable to the template.

- [Application::setSiteinfo](/docs/fegg/basic/templates/helpers/setsiteinfo)
  - Set website information (ex. title, description, keywords)
- [Application::setHidden](/docs/fegg/basic/templates/helpers/sethidden)
  - Set hidden data
- [Application::setHtmlHeader](/docs/fegg/basic/templates/helpers/sethtmlheader)
  - Set HTML Header

## Template rules

There are several operating notation for template file.

- [Variable](/docs/fegg/basic/templates/rules/variable)
  - The use of variables in the template
- [If](/docs/fegg/basic/templates/rules/if)
  - if, else, else if
- [Loop](/docs/fegg/basic/templates/rules/loop)
  - loop, foreach
- [Include](/docs/fegg/basic/templates/rules/include)
  - include, include head, head, include foot, foot
- [Transclude](/docs/fegg/basic/templates/rules/transclude)
  - transclude, section
- [Checked/Selected](/docs/fegg/basic/templates/rules/checked_selected)
  - checked, selected
- [Options](/docs/fegg/basic/templates/rules/options)
  - Make option tags
- [Hidden](/docs/fegg/basic/templates/rules/hidden)
  - Display hidden tag
- [Code](/docs/fegg/basic/templates/rules/code)
  - call, code

## Modifiers

### How to use modifiers

You can modify the returned values of your variable in your application code in template using modifiers.

Modifiers are separated from the variable using pipe symbol ( | ) and may have an optional argument separated by colon symbol ( : ). Multiple modifiers can be chained, it modifies the variable from left to right. Thus, the output of the first filtering is applied to the next filtering.

```html
{{ $var|noescape|function:param }}
```

### noescape

Fegg is automatically escaping character values. If you don’t want a escaping value, you can use the noescape modifier.

```php title="Controller"
$this->page['foo'] = '<p>bar</p>';
```

```html title="Template"
{{ $page.foo }} -> <p>bar</p>
{{ $page.foo|noescape }} -> bar
```

### br

Insert HTML line breaks for all newline (\\n) found in a string.

```php title="Controller"
$this->page['foo'] = "This is a test text.\n This is a new line text.";
```

```html title="Template"
{{ $page.foo }} -> This is a test text. This is a new line text.
{{ $page.foo|br }} -> This is a test text.
                      This is a new line text.
```


--- docs/fegg/basic/templates/methods/displaypage.mdx ---

---
sidebar_position: 4
---

# Application::displayPage

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

Displays the [Application::fetchPage](/docs/fegg/basic/templates/methods/fetchpage) result after taking precautionary measures from Clickjacking attack.

:::note

It is recommended to use `displayPage` method in compiling your template file for the security of your web users/visitors.

:::


--- docs/fegg/basic/templates/methods/displaytemplate.mdx ---

---
sidebar_position: 1
---

# Application::displayTemplate

> Display compiled template

## Description

```php
public void Application::displayTemplate( string $template, [ array $assignedValue = array() ] )
```

Read template file -> compile -> display output.

## Arguments

| Name           | Data type | Default | Remarks                |
| -------------- | --------- | ------- | ---------------------- |
| $template      | string    |         | Template file name     |
| $assignedValue | array     | array() | Arguments for template |

## Example

This reads the **bar.tpl** template file in **code/template/foo/bar.tpl**, compile it and display the compiled output.

```php title="code/application/Foo.php"
<?php

class Foo extends Application
{
    function bar(){
        $this->displayTemplate( 'foo/bar' );
    }
}
```

:::note

You should not include the “.tpl” extension in the parameter.

:::

```html title="code/template/foo/bar.tpl"
<p>Variable : {{ $page.baz }}</p>
<p>If else : {{ if true }}True{{ end }}</p>
<p>Loop  : {{ foreach $array as $k => $v }}{{ end foreach }}</p>
<p>Template rule  : {{ follow Fegg template rules }}</p>
```

```html title="Output"
Variable :
If else : True
Loop  :
Template rule  : {{ follow Fegg template rules }}
```

Notice here the codes inside the `{{}}` in first 3 lines of paragraph in template file. In Fegg, these are the examples and valid syntax of application code following the [Template rules](/docs/fegg/basic/templates#template-rules), otherwise it will return as display or parse an error.


--- docs/fegg/basic/templates/methods/fetchpage.mdx ---

---
sidebar_position: 3
---

# Application::fetchPage

> Return compiled template with declared controller and template variables into a string

## Description

```php
public string Application::fetchPage( string $template )
```

Returns the [Application::displayTemplate](/docs/fegg/basic/templates/methods/displaytemplate) result into string after including the assigned variables in controller class that can be use in template file.

## Arguments

| Name      | Data type | Default | Remarks            |
| --------- | --------- | ------- | ------------------ |
| $template | string    |         | Template file name |

## Appended arguments when compiling

- **className**
  - Class name when running
- **config**
  - Basic configuration
- **languageCode**
  - Language code
- **site**
  - Site parameters, assigned from [Template helper (Application::setSiteinfo)](#)
- **page**
  - Assigned from Controller class
- **in**
  - Requested parameters ($\_POST / $\_GET)
- **hiddenForTemplate**
  - Input hidden parameters, assigned from [Template helper (Application::setHidden)](#)
- **session**
  - Session data
- **cookie**
  - Cookie data

## Example

```php title="code/application/Foo.php"
// URI: http://example.com/foo/bar/?get=param

<?php

class Foo extends Application
{
    function bar(){
      $this->page['baz'] = 'qux';
      $content = $this->fetchPage( 'foo/bar' );
      echo $content;
    }
}
```

```html title="code/template/foo/bar.tpl"
Baz params : {{ $page.baz }}
$_GET[get] params : {{ $in.get }}
Controller name : {{ $classsName }}
```

```html title="Output"
Baz params : qux
$_GET[get] params : param
Controller name : foo
```

After assigning arguments for template, run the [Application::fetchTemplate](/docs/fegg/basic/templates/methods/fetchtemplate) method.


--- docs/fegg/basic/templates/methods/fetchtemplate.mdx ---

---
sidebar_position: 2
---

# Application::fetchTemplate

> Return compiled template into a string

## Description

```php
public string Application::fetchTemplate( string $template, [ array $assignedValue = array() ] )
```

Returns the [Application::displayTemplate](/docs/fegg/basic/templates/methods/displaytemplate) into string without displaying the output.

## Arguments

| Name           | Data type | Default | Remarks                |
| -------------- | --------- | ------- | ---------------------- |
| $template      | string    |         | Template file name     |
| $assignedValue | array     | array() | Arguments for template |

## Example

```php
$content = $this->fetchTemplate( 'foo/bar' );
```

This assigned the [Application::displayTemplate](/docs/fegg/basic/templates/methods/displaytemplate) to $content variable from compiled template.

:::note

You should not include the “.tpl” extension in the parameter.

:::


--- docs/fegg/basic/templates/rules/checked_selected.mdx ---

---
sidebar_position: 6
---

# Checked/Selected

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


--- docs/fegg/basic/templates/rules/code.mdx ---

---
sidebar_position: 9
---

# Code

> call, code

```php
{{ code some_php_scripts(); }}
```

Run writed PHP scripts, like `eval` method.

```php
{{ call '/controller/method/params' }}
```

Call another Controller methods.

## Example

### code

```php title="Template"
{{ code phpinfo(); }}
// Run phpinfo();
```

```php title="Template"
{{ code $array = array('foo', 'bar'); var_dump( array_reverse($array) ); }}
// Run $array = array('foo', 'bar'); var_dump( array_reverse($array) );
```

```html title="Output"
array(2) { [0]=> string(3) "bar" [1]=> string(3) "foo" }
```

### call

```php title="Template"
{{ call '/controller/method/params' }}
// Call Controller::method('params');

{{ call '/Person/get/id/1' }}
// Call Person::get('id', '1');
```


--- docs/fegg/basic/templates/rules/hidden.mdx ---

---
sidebar_position: 8
---

# Hidden

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


--- docs/fegg/basic/templates/rules/if.mdx ---

---
sidebar_position: 2
---

# If

> if, else, else if

## Description

```php
{{ if }}
{{ else if }}
{{ else }}
{{ end }}
```

It converted if section from `{{ if }}` to `{{ end }}`. You can use PHP comparison operators and methods in `{{ if }}` section, for example **&&, ||, is_array**, and so on.

## Example

```php title="Template"
{{ if $page.foo === 'bar' }}
    foo is bar
{{ else if $page.foo === 'baz' }}
    foo is baz
{{ else }}
    foo is neither bar nor baz
{{ end }}
```


--- docs/fegg/basic/templates/rules/include.mdx ---

---
sidebar_position: 4
---

# Include

> include, include head, head, include foot, foot

## Description

```php
{{ include 'foo/bar' }}
```

```php
{{ include head 'foo/bar' }}
{{ head }}
```

```php
{{ include foot 'foo/bar' }}
{{ foot }}
```

Include another template.

`{{ include }}` read template and display writed place, but `{{ include head }}` and `{{ include foot }}` read template and display at `{{ head }}` and `{{ foot }}`.

## Example

```php title="Template - child.tpl"
<p>This file is child.tpl</p>
```

```php title="Template - parent.tpl"
<p>This file is parent.tpl</p>
{{ include 'parts' }}
```

```html title="Output"
<p>This file is child.tpl</p>
<p>This file is parent.tpl</p>
```

If use `{{ include head }}` and `{{ include foot }}`.

```php title="Template - header.tpl"
<link rel="stylesheet" type="text/css" href="path/to/style.css">
```

```php title="Template - footer.tpl"
<script type="text/javascript" src="path/to/script.js"></script>
```

```php title="Template - parent.tpl"
{{ include head 'header' }}
{{ include foot 'footer' }}

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Page title</title>

    {{ head }}

</head>
<body>
    something

    {{ foot }}

</body>
</html>
```

```html title="Output"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Page title</title>

    <link rel="stylesheet" type="text/css" href="path/to/style.css">

</head>
<body>
    something

    <script type="text/javascript" src="path/to/script.js"></script>

</body>
</html>
```


--- docs/fegg/basic/templates/rules/loop.mdx ---

---
sidebar_position: 3
---

# Loop

> loop, foreach

## Description

```php
{{ loop $foo = $bar to $baz }}
{{ end }}
```

`{{ loop }}` run looping until `{{ end }}` by assigned variables. It is same to `for( $foo=$bar; $bar<=$baz; $foo++ )`.

```php
{{ foreach $array as $key => $val }}
{{ end foreach }}
```

`{{ foreach }}` run looping until `{{ end foreach }}` by assigned array variable. You can get loop count from `$foreachIndex` in `{{ foreach }}`.

## Example

### loop

```php title="Template"
// $bar = 1, $baz = 5

<ul>
    {{ loop $foo = $bar to $baz }}
    <li>{{ $foo }}</li>
    {{ end }}
</ul>
```

```html title="Output"
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
</ul>
```

### foreach

```php title="Template"
// $array = array( 'foo' => 'bar', 'baz' => 'qux' );

<ul>
    {{ foreach $array as $key => $val }}
    <li>{{ $foreachIndex }} : {{ $key }} => {{ $val }}</li>
    {{ end foreach }}
</ul>
```

```html title="Output"
<ul>
    <li>0 : foo => bar</li>
    <li>1 : bar => qux</li>
</ul>
```


--- docs/fegg/basic/templates/rules/options.mdx ---

---
sidebar_position: 7
---

# Options

> Make option tags

```php
{{ options source=$array selected=$selected }}
```

Make `<option>` from `$array`.

## Example

```php title="Template"
/*
$values = array(
    'foo' => 'bar',
    'baz' => 'qux'
);
$selected = 'foo';
*/

<select name="select">
    {{ options source=$values selected=$selected }}
</select>
```

```html title="Output"
<select name="select">
    <option value="foo" selected="selected">bar</option>
    <option value="baz">qux</option>
</select>
```


--- docs/fegg/basic/templates/rules/transclude.mdx ---

---
sidebar_position: 5
---

# Transclude

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


--- docs/fegg/basic/templates/rules/variable.mdx ---

---
sidebar_position: 1
---

# Variable

> The use of variables in the template

## Description

```php
{{ $var }}
```

When display variables, you should write `{{ $var }}`. And when display array variables, you should separate period "." (ex: `{{ $var.key }}`).

If you want to give variable from Controller to template, you can assignment array value to `$this->page`, and then can display `{{ $page.foo }}` in Temaplte.

After compile, any variables display automatically through htmlSpecialChars method. If you want display raw variables, can display it use `noescape` modifire. Detail is see [modifire](/docs/fegg/basic/templates#modifiers).

## Example

```php title="Controller"
$this->page['foo'] = 'bar';
$this->displayPage( 'template' );
```

```php title="Template"
{{ $page.foo }}
```

```html title="Output"
bar
```

### If you use `noescape` modifire.

```php title="Controller"
$this->page['foo'] = '<p>bar</p>';
$this->displayPage( 'template' );
```

```php title="Template"
{{ $page.foo }}

{{ $page.foo|noescape }}
```

```html title="Output"
&lt;p&gt;bar&lt;/p&gt;

<p>bar</p>
```


--- docs/fegg/basic/url.mdx ---

---
sidebar_position: 1
---

# URL

## URL and Controller class

Fegg FW also adopted the segment-based-approach. Here is how the URL and Controller class relationship work.

```
http://example.com/class/function/param1/param2...
```

1. Class of Controller
2. Method of Controller class
3. Arguments for Method

You can have a more flexible URL by setting up your URL structure in [Routing](#routing) file.

## Example

```bash title="URL"
http://example.com/post/edit/1
```

```php title="Running method"
<?php
// code/application/Post.php

class Post extends Application
{

    // ...

    public function edit( $id )
    {
        echo $id; // Result: 1
    }

    // ...

}
```

## Routing

You can set your URL structure without URL and Controller class relation by configuring your route file.

You may set your `$route` in array in **code/config/route.php**.

```php
$route['from'] = 'to';
```

As described above, the Key of array is a segment of URL, whereas the Value of array is the value after remapping.

:::note

Routes will run in order when they are defined. Higher routes will always take precedence over lower ones.

:::

### Wildcards

There are 2 types of available wildcards (`:any`, `:num`) you may use before mapping key.

`:any` is **any types of words**. `:num` is **limited only numbers**.

### Example

```php title="code/config/route.php"
<?php

$route['foo'] = 'bar';
// http://example.com/foo -> code/application/Bar.php

$route['item/:any'] = 'product/item_lookup/$1';
// http://example.com/item/foobar -> code/application/Product.php -> Product::item_lookup( 'foobar' )

$route['archive/edit/:num'] = 'post/edit/$1';
// http://example.com/archive/edit/1 -> code/application/Post.php -> Post::edit( 1 )

$route['news/post_:num.html'] = 'news/detail/$1';
// http://example.com/news/post_1.html -> code/application/News.php -> News::detail( 1 )
```


--- docs/fegg/first/config.mdx ---

---
sidebar_position: 2
---

# Initial settings

## Basic settings

You can change the basic setting in **fegg/settings.php**.

Change the parameters of `$settings` in accordance to your environment.

## Other settings

### Changing initial class and method name

By default, initial class and method name is set to 'Index' file name and its 'index' method respectively. If you want to change the initial class and method name you should set your parameters in **htdocs/index.php** as seen below.

```php title="htdocs/index.php"
<?php

// Default class name and method name if not set.
if (!$fileName) {
    $fileName = 'Index';
}
if (!$methodName) {
    $methodName = 'index';
}
```


--- docs/fegg/first/cont.mdx ---

---
sidebar_position: 1
---

# Fegg Directory structure

Below is the initial folders and files you will see. Fegg consists of 3 main folders - code, fegg and htdocs.

```yaml
# The code folder organizes your application components. It has subfolders that contain your controller, template files, route,
# cache and extension library. This folder is where you will work most of the time for the project development.
code/
    application/
        ***.php     # Controller classes
    config/
        route.php   # Set up a routing settings
        ***.php     # Set up settings for other extension library
    data/
        ...         # Save cache file for Template engine and log file
    lib/
        ***.php     # Extension library classes
    template/
        ***.tpl     # Template files

# The fegg folder is the Fegg core files. You don't need to edit these files.
fegg/
    Application.php # Fegg's Core file, include a basic class and functions
    settings.php    # Set up basic settings for Fegg

# The htdocs folder is where the document root is specified.
htdocs/
    .htaccess
    index.php  # Dispatcher file
```

In this user guide, it makes a description of the case, which were constructed in the above directory structure.


--- docs/fegg/index.mdx ---

---
sidebar_position: 1
---

# Fegg Coding Guide

## About Fegg

[Fegg](https://github.com/genies-inc/Fegg) is a custom PHP Framework that created by only 3 files.


--- docs/fegg/library/database/configuration.mdx ---

---
sidebar_position: 2
---

# Configuration

### Database connect setting

You can change connect configuration on **code/config/database_config.php**.

```php title="database_config.php"
<?php
/**
 * データベース接続先設定
 * Database connect information
 * @see Database.php
 */
// 本番環境
// Production environment
if (false) {

    // Database(Master)設定（１台を想定）
    // Database for Master
    $database_config['master'] = array(
        'dsn' => 'sqlite:'.FEGG_CODE_DIR.'/data/db/db.db',
        'username' => '',
        'password' => ''
    );

    // Database(Slave)設定（複数台を想定）
    // Database for Slave
    $database_config['slave'][] = array(
        'dsn' => 'sqlite:'.FEGG_CODE_DIR.'/data/db/db.db',
        'username' => '',
        'password' => ''
    );

// 開発環境
// Development Environment
} else {

    // Database(Master)設定（１台を想定）
    // Database for Master
    $database_config['master'] = array(
        'dsn' => 'sqlite:'.FEGG_CODE_DIR.'/data/db/db.db',
        'username' => '',
        'password' => ''
    );

    // Database(Slave)設定（複数台を想定）
    // Database for Slave
    $database_config['slave'][] = array(
        'dsn' => 'sqlite:'.FEGG_CODE_DIR.'/data/db/db.db',
        'username' => '',
        'password' => ''
    );

}
/* End of file database_config.php */
```

### Automatic append query configuration

You can arrange automatic append query configuration on **code/config/database_regular_use_query.php**.

```php title="database_regular_use_query.php"
<?php
/**
 * 自動的付加クエリー
 * Automatic append query
 * @see Database.php
 *
 * DBクラスのselect, insert, update, deleteメソッド実行時に自動的付加するクエリー
 * （必要に応じて拡張していく予定）
 *
 * Automaticaly append query that "select", "insert", "update", "delete" method in DB Class.
 */
$database_regular_use_query = array(
    // テーブルに関わらず付加されるクエリー
    // Appended query regardless of table
    'regular_use' => array(
        'select' => array(
            'where' => 'CURRENT_TABLE.valid = 1',
            'order' => '',
        ),
        'count' => array(
            'where' => 'CURRENT_TABLE.valid = 1',
            'order' => '',
        ),
        'insert' => array(
            'item' => 'modified = now(), created = now(), valid = 1',
        ),
        'update' => array(
            'item' => "modified = now()",
            'where' => '',
        ),
    ),

    /*
    // テーブルに応じて付加されるクエリー
    // Appended query depending on table
    'table' => array(
        'table_name' => array(
            'select' => array(
                'where' => 'show_flag = 0',
                'order' => '',
            ),
            'insert' => array(
                'item' => 'update_time = now(), create_datetime = now()',
            ),
            'update' => array(
                'item' => 'update_time = now()',
                'where' => '',
            ),
        ),
    ),
    */
);
/* End of file database_regular_use_query.php */
```


--- docs/fegg/library/database/index.mdx ---

---
sidebar_position: 1
---

# Introduction

> Providing necessary functions for using database

:::note

Usually you don't need to use this `DB_pdo` class. Try to use `Model` class instead.

[About Model class is here.](/docs/fegg/library/model)

:::

## How to use

You can load `DB_pdo` class through `Application::getClass` method.

```php title="Controller"
$database = $this->getClass('DB_pdo');

// Select query
$result = $database->select('table_name')->execute()->all();
```

## Methods

- [DB_pdo::select](/docs/fegg/library/database/methods/select)
  - Set select query
- [DB_pdo::count](/docs/fegg/library/database/methods/count)
  - Set select count query
- [DB_pdo::insert](/docs/fegg/library/database/methods/insert)
  - Set insert query
- [DB_pdo::update](/docs/fegg/library/database/methods/update)
  - Set update query
- [DB_pdo::delete](/docs/fegg/library/database/methods/delete)
  - Set delete query
- [DB_pdo::truncate](/docs/fegg/library/database/methods/truncate)
  - Set truncate query
- [DB_pdo::createTable](/docs/fegg/library/database/methods/createtable)
  - Set create table query
- [DB_pdo::createIndex](/docs/fegg/library/database/methods/createindex)
  - Set create index query
- [DB_pdo::alterAddColumn](/docs/fegg/library/database/methods/alteraddcolumn)
  - Set create alter add column query
- [DB_pdo::alterRenameTo](/docs/fegg/library/database/methods/alterrenameto)
  - Set create alter rename to query
- [DB_pdo::dropTable](/docs/fegg/library/database/methods/droptable)
  - Set create drop table query
- [DB_pdo::dropIndex](/docs/fegg/library/database/methods/dropindex)
  - Set create drop index query
- [DB_pdo::pragma](/docs/fegg/library/database/methods/pragma)
  - Set pragma query
- [DB_pdo::setGroup](/docs/fegg/library/database/methods/setgroup)
  - Set group query
- [DB_pdo::setItem](/docs/fegg/library/database/methods/setitem)
  - Set query item values
- [DB_pdo::setLimit](/docs/fegg/library/database/methods/setlimit)
  - Set limit value
- [DB_pdo::setOrder](/docs/fegg/library/database/methods/setorder)
  - Set order value
- [DB_pdo::setQuery](/docs/fegg/library/database/methods/setquery)
  - Set query string directly
- [DB_pdo::setWhere](/docs/fegg/library/database/methods/setwhere)
  - Set where condition
- [DB_pdo::setHaving](/docs/fegg/library/database/methods/sethaving)
  - Set having condition
- [DB_pdo::setJoin](/docs/fegg/library/database/methods/setjoin)
  - Set join table
- [DB_pdo::setOn](/docs/fegg/library/database/methods/seton)
  - Set on query for joined table
- [DB_pdo::disabledRegularUseQuery](/docs/fegg/library/database/methods/disabledregularusequery)
  - Disable automatic append query flag
- [DB_pdo::unsetRegularUseQuery](/docs/fegg/library/database/methods/unsetregularusequery)
  - Disable automatic append query for a current query flag
- [DB_pdo::unsetRegularUseQueryForTable](/docs/fegg/library/database/methods/unsetregularusequeryfortable)
  - Disable automatic append query of the table for a current query flag
- [DB_pdo::setInitQueryFlag](/docs/fegg/library/database/methods/setinitqueryflag)
  - Enable reset query flag
- [DB_pdo::unsetInitQueryFlag](/docs/fegg/library/database/methods/unsetinitqueryflag)
  - Disable reset query flag
- [DB_pdo::execute](/docs/fegg/library/database/methods/execute)
  - Execute built query
- [DB_pdo::compile](/docs/fegg/library/database/methods/compile)
  - Compile built query (not execute)
- [DB_pdo::all](/docs/fegg/library/database/methods/all)
  - Get all the result of executed select query
- [DB_pdo::one](/docs/fegg/library/database/methods/one)
  - Shift the result of executed select query
- [DB_pdo::id](/docs/fegg/library/database/methods/id)
  - Get the specific column's list of executed select query
- [DB_pdo::simpleArray](/docs/fegg/library/database/methods/simplearray)
  - Get the specific column's key and value array of executed select query
- [DB_pdo::getAffectedRow](/docs/fegg/library/database/methods/getaffectedrow)
  - Get affected row number of executed update query
- [DB_pdo::getLastIndexId](/docs/fegg/library/database/methods/getlastindexid)
  - Get the last inserted id of executed insert query
- [DB_pdo::getLastQuery](/docs/fegg/library/database/methods/getlastquery)
  - Get the last executed query for debugging
- [DB_pdo::getLastQueryDebug](/docs/fegg/library/database/methods/getlastquerydebug)
  - Get the last executed query and parameter separately for debugging
- [DB_pdo::getReturnCode](/docs/fegg/library/database/methods/getreturncode)
  - Get return code of the last executed query
- [DB_pdo::masterServer](/docs/fegg/library/database/methods/masterserver)
  - Connect to master server
- [DB_pdo::slaveServer](/docs/fegg/library/database/methods/slaveserver)
  - Connect to slave server


--- docs/fegg/library/database/methods/all.mdx ---

---
sidebar_position: 30
---

# DB_pdo::all

Get all the result of executed select query

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/database/methods/alteraddcolumn.mdx ---

---
sidebar_position: 9
---

# DB_pdo::alterAddColumn

Set create alter add column query

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/database/methods/alterrenameto.mdx ---

---
sidebar_position: 10
---

# DB_pdo::alterRenameTo

Set create alter rename to query

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/database/methods/compile.mdx ---

---
sidebar_position: 29
---

# DB_pdo::compile

Compile built query (not execute)

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/database/methods/count.mdx ---

---
sidebar_position: 2
---

# DB_pdo::count

Set select count query

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/database/methods/createindex.mdx ---

---
sidebar_position: 8
---

# DB_pdo::createIndex

Set create index query

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/database/methods/createtable.mdx ---

---
sidebar_position: 7
---

# DB_pdo::createTable

Set create table query

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/database/methods/delete.mdx ---

---
sidebar_position: 5
---

# DB_pdo::delete

Set delete query

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/database/methods/disabledregularusequery.mdx ---

---
sidebar_position: 23
---

# DB_pdo::disabledRegularUseQuery

Disable automatic append query flag

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/database/methods/dropindex.mdx ---

---
sidebar_position: 12
---

# DB_pdo::dropIndex

Set create drop index query

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/database/methods/droptable.mdx ---

---
sidebar_position: 11
---

# DB_pdo::dropTable

Set create drop table query

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/database/methods/execute.mdx ---

---
sidebar_position: 28
---

# DB_pdo::execute

Execute built query

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/database/methods/getaffectedrow.mdx ---

---
sidebar_position: 34
---

# DB_pdo::getAffectedRow

Get affected row number of executed update query

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/database/methods/getlastindexid.mdx ---

---
sidebar_position: 35
---

# DB_pdo::getLastIndexId

Get the last inserted id of executed insert query

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/database/methods/getlastquery.mdx ---

---
sidebar_position: 36
---

# DB_pdo::getLastQuery

Get the last executed query for debugging

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/database/methods/getlastquerydebug.mdx ---

---
sidebar_position: 37
---

# DB_pdo::getLastQueryDebug

Get the last executed query and parameter separately for debugging

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/database/methods/getreturncode.mdx ---

---
sidebar_position: 38
---

# DB_pdo::getReturnCode

Get return code of the last executed query

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/database/methods/id.mdx ---

---
sidebar_position: 32
---

# DB_pdo::id

Get the specific column's list of executed select query

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/database/methods/insert.mdx ---

---
sidebar_position: 3
---

# DB_pdo::insert

Set insert query

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/database/methods/masterserver.mdx ---

---
sidebar_position: 39
---

# DB_pdo::masterServer

Connect to master server

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/database/methods/one.mdx ---

---
sidebar_position: 31
---

# DB_pdo::one

Shift the result of executed select query

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/database/methods/pragma.mdx ---

---
sidebar_position: 13
---

# DB_pdo::pragma

Set pragma query

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/database/methods/select.mdx ---

---
sidebar_position: 1
---

# DB_pdo::select

Set select query

## Description

```php
public self DB_pdo::select( string $table )
```

## Arguments

| Name   | Data type | Default | Remarks           |
| ------ | --------- | ------- | ----------------- |
| $table | string    |         | Target table name |

## Example

```php title="Controller"

```


--- docs/fegg/library/database/methods/setgroup.mdx ---

---
sidebar_position: 14
---

# DB_pdo::setGroup

Set group query

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/database/methods/sethaving.mdx ---

---
sidebar_position: 20
---

# DB_pdo::setHaving

Set having condition

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/database/methods/setinitqueryflag.mdx ---

---
sidebar_position: 26
---

# DB_pdo::setInitQueryFlag

Enable reset query flag

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/database/methods/setitem.mdx ---

---
sidebar_position: 15
---

# DB_pdo::setItem

Set query item values

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/database/methods/setjoin.mdx ---

---
sidebar_position: 21
---

# DB_pdo::setJoin

Set join table

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/database/methods/setlimit.mdx ---

---
sidebar_position: 16
---

# DB_pdo::setLimit

Set limit value

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/database/methods/seton.mdx ---

---
sidebar_position: 22
---

# DB_pdo::setOn

Set on query for joined table

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/database/methods/setorder.mdx ---

---
sidebar_position: 17
---

# DB_pdo::setOrder

Set order value

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/database/methods/setquery.mdx ---

---
sidebar_position: 18
---

# DB_pdo::setQuery

Set query string directly

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/database/methods/setwhere.mdx ---

---
sidebar_position: 19
---

# DB_pdo::setWhere

Set where condition

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/database/methods/simplearray.mdx ---

---
sidebar_position: 33
---

# DB_pdo::simpleArray

Get the specific column's key and value array of executed select query

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/database/methods/slaveserver.mdx ---

---
sidebar_position: 40
---

# DB_pdo::slaveServer

Connect to slave server

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/database/methods/truncate.mdx ---

---
sidebar_position: 6
---

# DB_pdo::truncate

Set truncate query

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/database/methods/unsetinitqueryflag.mdx ---

---
sidebar_position: 27
---

# DB_pdo::unsetInitQueryFlag

Disable reset query flag

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/database/methods/unsetregularusequery.mdx ---

---
sidebar_position: 24
---

# DB_pdo::unsetRegularUseQuery

Disable automatic append query for a current query flag

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/database/methods/unsetregularusequeryfortable.mdx ---

---
sidebar_position: 25
---

# DB_pdo::unsetRegularUseQueryForTable

Disable automatic append query of the table for a current query flag

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/database/methods/update.mdx ---

---
sidebar_position: 4
---

# DB_pdo::update

Set update query

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/file/index.mdx ---

---
sidebar_position: 1
---

# Introduction

Providing some functions for managing files/directories

## How to use

You can load `File` class through `Application::getClass` method.

```php title="Controller"
$file = $this->getClass('Tool/File');

$file->copyAll('path/to/foo', 'path/to/bar');
```

## Methods

- [File::copyAll](/docs/fegg/library/file/methods/copyall)
  - Copy all the files to another directory
- [File::copyDirectory](/docs/fegg/library/file/methods/copydirectory)
  - Copy specified directory to specified location
- [File::copyFile](/docs/fegg/library/file/methods/copyfile)
  - Copy specified file to specified location
- [File::createDirectory](/docs/fegg/library/file/methods/createdirectory)
  - Create directory to specified location
- [File::moveFile](/docs/fegg/library/file/methods/movefile)
  - Move specified file to specified location
- [File::readFile](/docs/fegg/library/file/methods/readfile)
  - Read specified file
- [File::removeDirectory](/docs/fegg/library/file/methods/removedirectory)
  - Delete specified directory and files in that directory
- [File::removeExpiredFile](/docs/fegg/library/file/methods/removeexpiredfile)
  - Delete specified file that elapsed specified time
- [File::removeFile](/docs/fegg/library/file/methods/removefile)
  - Delete specified file
- [File::touchDirectory](/docs/fegg/library/file/methods/touchdirectory)
  - Update modified date of files that inside of specified directory
- [File::writeFile](/docs/fegg/library/file/methods/writefile)
  - Put the file to the specified location


--- docs/fegg/library/file/methods/copyall.mdx ---

---
sidebar_position: 1
---

# File::copyAll

Copy all the files to another directory

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/file/methods/copydirectory.mdx ---

---
sidebar_position: 2
---

# File::copyDirectory

Copy specified directory to specified location

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/file/methods/copyfile.mdx ---

---
sidebar_position: 3
---

# File::copyFile

Copy specified file to specified location

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/file/methods/createdirectory.mdx ---

---
sidebar_position: 4
---

# File::createDirectory

Create directory to specified location

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/file/methods/movefile.mdx ---

---
sidebar_position: 5
---

# File::moveFile

Move specified file to specified location

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/file/methods/readfile.mdx ---

---
sidebar_position: 6
---

# File::readFile

Read specified file

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/file/methods/removedirectory.mdx ---

---
sidebar_position: 7
---

# File::removeDirectory

Delete specified directory and files in that directory

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/file/methods/removeexpiredfile.mdx ---

---
sidebar_position: 8
---

# File::removeExpiredFile

Delete specified file that elapsed specified time

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/file/methods/removefile.mdx ---

---
sidebar_position: 9
---

# File::removeFile

Delete specified file

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/file/methods/touchdirectory.mdx ---

---
sidebar_position: 10
---

# File::touchDirectory

Update modified date of files that inside of specified directory

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/file/methods/writefile.mdx ---

---
sidebar_position: 11
---

# File::writeFile

Put the file to the specified location

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/index.mdx ---

---
sidebar_position: 1
---

# About Extension libraries

Fegg's goal is lightweight and less typing, so Core class has the only minimum required functions. That's why, if you want additional functions, you can install extension libraries.

## Extension Libraries

- [Validation](/docs/fegg/library/validation)
  - Providing some functions for validation
- [Database](/docs/fegg/library/database)
  - Providing necessary functions for using database
- [Model](/docs/fegg/library/model)
  - Extended Database Library for LH project
- [File](/docs/fegg/library/file)
  - Providing some functions for managing files/directories
- [Upload](/docs/fegg/library/upload)
  - Providing some functions for uploading/validating files
- [Mail](/docs/fegg/library/mail)
  - Providing some functions for sending email
- [RSS](/docs/fegg/library/rss)
  - Providing some functions for analyzing RSS document
- [Trim](/docs/fegg/library/trim)
  - Providing some functions for processing image (especially image crop)

## External Libraries

- [Spyc](https://github.com/mustangostang/spyc)
  - YAML document loader
- [JSON](https://github.com/pear/Services_JSON)
  - Json document loader
  - Mainly You don't need to use this, you can just use `json_encode` and `json_decode`


--- docs/fegg/library/mail/index.mdx ---

---
sidebar_position: 1
---

# Introduction

Providing some functions for sending email

## How to use

You can load `Mail` class through `Application::getClass` method.

```php title="Controller"
$mail = $this->getClass('Tool/Mail');
$mail->subject('Mail subject');
$mail->body('Mail body');

$mail->send('mail@example.com', 'John Doe', 'from@example.com');
```

## Methods

- [Mail::\_\_construct](/docs/fegg/library/mail/methods/construct)
  - Setup sending image
- [Mail::subject](/docs/fegg/library/mail/methods/subject)
  - Set mail subject
- [Mail::body](/docs/fegg/library/mail/methods/body)
  - Set mail body
- [Mail::pushHeader](/docs/fegg/library/mail/methods/pushheader)
  - Add custom header
- [Mail::removeHeader](/docs/fegg/library/mail/methods/removeheader)
  - Remove custom header
- [Mail::pushAttached](/docs/fegg/library/mail/methods/pushattached)
  - Add attachment file
- [Mail::send](/docs/fegg/library/mail/methods/send)
  - Send email
- [Mail::sendWithFile](/docs/fegg/library/mail/methods/sendwithfile)
  - Send email with attachment file
- [Mail::log](/docs/fegg/library/mail/methods/log)
  - Save log file instead sending email
- [Mail::setInputCharset](/docs/fegg/library/mail/methods/setinputcharset)
  - Set input character set
- [Mail::setSendCharset](/docs/fegg/library/mail/methods/setsendcharset)
  - Set email character set
- [Mail::setDebugFlag](/docs/fegg/library/mail/methods/setdebugflag)
  - Set debug flag and log file name


--- docs/fegg/library/mail/methods/body.mdx ---

---
sidebar_position: 3
---

# Mail::body

Set mail body

## Description

```php
public self Mail::body( string $body )
```

## Arguments

| Name  | Data type | Default | Remarks    |
| ----- | --------- | ------- | ---------- |
| $body | string    | null    | Email body |

## Example

```php title="Controller"
$mail = $this->getClass('Tool/Mail');
$mail->body('Mail body');
```


--- docs/fegg/library/mail/methods/construct.mdx ---

---
sidebar_position: 1
---

# Mail::\_\_construct

Setup sending image

## Description

```php
public self Mail::__construct( [ string $subject = null, string $body = null, array $header = null ] )
```

## Arguments

| Name     | Data type | Default | Remarks             |
| -------- | --------- | ------- | ------------------- |
| $subject | string    | null    | Email subject       |
| $body    | string    | null    | Email body          |
| $header  | array     | null    | Email custom header |

## Example

```php title="Controller"
$mail = $this->getClass('Tool/Mail', 'Mail subject', 'Mail body');

// Same with
$mail = $this->getClass('Tool/Mail');
$mail->subject('Mail subject');
$mail->body('Mail body');

// or
$this->getClass('Tool/Mail')
$mail = new Mail('Mail subject', 'Mail body');
```


--- docs/fegg/library/mail/methods/log.mdx ---

---
sidebar_position: 9
---

# Mail::log

Save log file instead sending email

## Description

```php
public self Mail::log( string $to, [ string $from_name = null, string $from_ad = null ] )
```

## Arguments

| Name       | Data type | Default | Remarks            |
| ---------- | --------- | ------- | ------------------ |
| $to        | string    |         | Send email address |
| $from_name | string    | null    | Sender name        |
| $from_ad   | string    | null    | Sender address     |

## Example

```php title="Controller"
$mail = $this->getClass('Tool/Mail');
$mail->subject('Mail subject');
$mail->body('Mail body');

$mail->log('mail@example.com', 'John Doe', 'from@example.com');
```


--- docs/fegg/library/mail/methods/pushattached.mdx ---

---
sidebar_position: 6
---

# Mail::pushAttached

Add attachment file

## Description

```php
public self Mail::pushAttached( string $filePath, [ string $fileName = null ] )
```

## Arguments

| Name      | Data type | Default | Remarks                      |
| --------- | --------- | ------- | ---------------------------- |
| $filePath | string    |         | Attachment file path         |
| $fileName | string    | null    | Specified file name on email |

## Example

```php title="Controller"
$mail = $this->getClass('Tool/Mail');
$mail->pushAttached('path/to/file.jpg');
```


--- docs/fegg/library/mail/methods/pushheader.mdx ---

---
sidebar_position: 4
---

# Mail::pushHeader

Add custom header

## Description

```php
public self Mail::pushHeader( mixed $key, [ string $val = null ] )
```

## Arguments

| Name | Data type | Default | Remarks                                  |
| ---- | --------- | ------- | ---------------------------------------- |
| $key | mixed     |         | Header key string or key and value array |
| $val | string    | null    | If $key is string, header value          |

## Example

```php title="Controller"
$mail = $this->getClass('Tool/Mail');
$mail->pushHeader('foo', 'bar');
$mail->pushHeader('baz', 'qux');

// Same with
$mail->pushHeader(array(
    'foo' => 'bar',
    'baz' => 'qux',
));
```


--- docs/fegg/library/mail/methods/removeheader.mdx ---

---
sidebar_position: 5
---

# Mail::removeHeader

Remove custom header

## Description

```php
public self Mail::removeHeader( [ $key = null ] )
```

## Arguments

| Name | Data type | Default | Remarks |
| --- | --- | --- | --- |
| $key | string |  | Header key / if omit $key, remove all email header |

## Example

```php title="Controller"
$mail = $this->getClass('Tool/Mail');
$mail->pushHeader('foo', 'bar');
$mail->removeHeader('foo');

// Remove all email header
$mail->removeHeader();
```


--- docs/fegg/library/mail/methods/send.mdx ---

---
sidebar_position: 7
---

# Mail::send

Send email

:::note

If there is added attachment file, this method will call [Mail::sendWithFile](/docs/fegg/library/mail/methods/sendwithfile) automatically

:::

:::note

If debug flag is enabled, this method will call [Mail::log](/docs/fegg/library/mail/methods/log) automatically

:::

## Description

```php
public self Mail::send( string $to, [ string $from_name = null, string $from_ad = null ] )
```

## Arguments

| Name       | Data type | Default | Remarks            |
| ---------- | --------- | ------- | ------------------ |
| $to        | string    |         | Send email address |
| $from_name | string    | null    | Sender name        |
| $from_ad   | string    | null    | Sender address     |

## Example

```php title="Controller"
$mail = $this->getClass('Tool/Mail');
$mail->subject('Mail subject');
$mail->body('Mail body');

$mail->send('mail@example.com', 'John Doe', 'from@example.com');
```


--- docs/fegg/library/mail/methods/sendwithfile.mdx ---

---
sidebar_position: 8
---

# Mail::sendWithFile

Send email with attachment file

:::note

If there is no any attachment file, this method will call [Mail::send](/docs/fegg/library/mail/methods/send) automatically

:::

:::note

If debug flag is enabled, this method will call [Mail::log](/docs/fegg/library/mail/methods/log) automatically

:::

## Description

```php
public self Mail::sendWithFile( string $to, [ string $from_name = null, string $from_ad = null ] )
```

## Arguments

| Name       | Data type | Default | Remarks            |
| ---------- | --------- | ------- | ------------------ |
| $to        | string    |         | Send email address |
| $from_name | string    | null    | Sender name        |
| $from_ad   | string    | null    | Sender address     |

## Example

```php title="Controller"
$mail = $this->getClass('Tool/Mail');
$mail->subject('Mail subject');
$mail->body('Mail body');

$mail->sendWithFile('mail@example.com', 'John Doe', 'from@example.com');
```


--- docs/fegg/library/mail/methods/setdebugflag.mdx ---

---
sidebar_position: 12
---

# Mail::setDebugFlag

Set debug flag and log file name

## Description

```php
public self Mail::setDebugFlag( boolean $is_debug, string $log_name )
```

## Arguments

| Name      | Data type | Default | Remarks        |
| --------- | --------- | ------- | -------------- |
| $is_debug | boolean   |         | Debug flag     |
| $log_name | string    |         | Debug log file |

## Example

```php title="Controller"
$mail = $this->getClass('Tool/Mail');
$mail->setDebugFlag(true, 'path/to/email.log');
```


--- docs/fegg/library/mail/methods/setinputcharset.mdx ---

---
sidebar_position: 10
---

# Mail::setInputCharset

Set input character set

:::note

If the email body text is garbling, try to use this method or [Mail::setSendCharset](/docs/fegg/library/mail/methods/setsendcharset)

:::

## Description

```php
public self Mail::setInputCharset( string $charset )
```

## Arguments

| Name     | Data type | Default | Remarks             |
| -------- | --------- | ------- | ------------------- |
| $charset | string    |         | Input character set |

## Example

```php title="Controller"
$mail = $this->getClass('Tool/Mail');
$mail->setInputCharset('utf-8');
```


--- docs/fegg/library/mail/methods/setsendcharset.mdx ---

---
sidebar_position: 11
---

# Mail::setSendCharset

Set email character set

:::note

If the email body text is garbling, try to use this method or [Mail::setInputCharset](/docs/fegg/library/mail/methods/setinputcharset)

:::

## Description

```php
public self Mail::setSendCharset( string $charset )
```

## Arguments

| Name     | Data type | Default | Remarks             |
| -------- | --------- | ------- | ------------------- |
| $charset | string    |         | Email character set |

## Example

```php title="Controller"
$mail = $this->getClass('Tool/Mail');
$mail->setSendCharset('utf-8');
```


--- docs/fegg/library/mail/methods/subject.mdx ---

---
sidebar_position: 2
---

# Mail::subject

Set mail subject

## Description

```php
public self Mail::subject( string $subject )
```

## Arguments

| Name     | Data type | Default | Remarks       |
| -------- | --------- | ------- | ------------- |
| $subject | string    | null    | Email subject |

## Example

```php title="Controller"
$mail = $this->getClass('Tool/Mail');
$mail->subject('Mail subject');
```


--- docs/fegg/library/model/index.mdx ---

---
sidebar_position: 1
---

# Introduction

import Badge from '../../../../src/components/Badge';

> Extended Database Library for LH project

## How to use

`Model` is already imported on `Controller`, so you can call without include.

```php title="Controller"
$model = new Model(false, array(
  'table'   => 'cms_news',
  'id'      => 'news_id',
  'visible' => 'visible',
));

$records = $model->find();
```

## Methods

- [Model::\_\_construct](/docs/fegg/library/model/methods/construct) <Badge color="yellow">Important</Badge>
  - Model class constructor
- [Model::setTableName](/docs/fegg/library/model/methods/settablename)
  - Set Table Name
- [Model::getTableName](/docs/fegg/library/model/methods/gettablename)
  - Get Table name
- [Model::setPrimary](/docs/fegg/library/model/methods/setprimary)
  - Set Primary ID name
- [Model::getPrimary](/docs/fegg/library/model/methods/getprimary)
  - Get Primary ID name
- [Model::setVisible](/docs/fegg/library/model/methods/setvisible)
  - Set Visible flag name
- [Model::getVisible](/docs/fegg/library/model/methods/getvisible)
  - Get Visible flag name
- [Model::setBindParam](/docs/fegg/library/model/methods/setbindparam)
  - Set Bind Parameter types
- [Model::addBindParam](/docs/fegg/library/model/methods/addbindparam)
  - Add Bind Parameter types
- [Model::getBindParam](/docs/fegg/library/model/methods/getbindparam)
  - Get Bind Parameter types
- [Model::select](/docs/fegg/library/model/methods/select) <Badge color="yellow">Important</Badge>
  - Set Select Parameter
- [Model::listMax](/docs/fegg/library/model/methods/listmax) <Badge color="yellow">Important</Badge>
  - Set ListMax Parameter
- [Model::current](/docs/fegg/library/model/methods/current) <Badge color="yellow">Important</Badge>
  - Set Current Page Parameter
- [Model::where](/docs/fegg/library/model/methods/where) <Badge color="yellow">Important</Badge>
  - Set Where Parameter
- [Model::whereOpen](/docs/fegg/library/model/methods/whereopen) <Badge color="yellow">Important</Badge>
  - Add open bracket on Where query
- [Model::whereClose](/docs/fegg/library/model/methods/whereclose) <Badge color="yellow">Important</Badge>
  - Add close bracket on Where query
- [Model::having](/docs/fegg/library/model/methods/having)
  - Set Having Parameter
- [Model::havingOpen](/docs/fegg/library/model/methods/havingopen)
  - Add open bracket on Having query
- [Model::havingClose](/docs/fegg/library/model/methods/havingclose)
  - Add close bracket on Having query
- [Model::order](/docs/fegg/library/model/methods/order) <Badge color="yellow">Important</Badge>
  - Set Order Parameter
- [Model::join](/docs/fegg/library/model/methods/join)
  - Set Join Parameter
- [Model::group](/docs/fegg/library/model/methods/group)
  - Set Group Parameter
- [Model::find](/docs/fegg/library/model/methods/find) <Badge color="yellow">Important</Badge>
  - Get rows designated count
- [Model::getPager](/docs/fegg/library/model/methods/getpager) <Badge color="yellow">Important</Badge>
  - Get variables for making pager
- [Model::one](/docs/fegg/library/model/methods/one) <Badge color="yellow">Important</Badge>
  - Get one row from the records
- [Model::count](/docs/fegg/library/model/methods/count) <Badge color="yellow">Important</Badge>
  - Get the number of record's count
- [Model::id](/docs/fegg/library/model/methods/id) <Badge color="yellow">Important</Badge>
  - Get one record by specified primary ID
- [Model::setOptions](/docs/fegg/library/model/methods/setoptions)
  - Setting option parameter
- [Model::resetOptions](/docs/fegg/library/model/methods/resetoptions)
  - Reset Options Data
- [Model::insert](/docs/fegg/library/model/methods/insert) <Badge color="yellow">Important</Badge>
  - Execute Insert data
- [Model::updateWhere](/docs/fegg/library/model/methods/updatewhere) <Badge color="yellow">Important</Badge>
  - Execute Update the records by specified condition
- [Model::update](/docs/fegg/library/model/methods/update) <Badge color="yellow">Important</Badge>
  - Execute Update the record by specified primary ID
- [Model::deleteWhere](/docs/fegg/library/model/methods/deletewhere) <Badge color="yellow">Important</Badge>
  - Execute Logical Delete the records by specified condition
- [Model::delete](/docs/fegg/library/model/methods/delete) <Badge color="yellow">Important</Badge>
  - Execute Logical Delete the record by specified primary ID
- [Model::eraseWhere](/docs/fegg/library/model/methods/erasewhere)
  - Execute Physical Delete the records by specified condition
- [Model::erase](/docs/fegg/library/model/methods/erase)
  - Execute Physical Delete the record by specified primary ID
- [Model::create](/docs/fegg/library/model/methods/create)
  - Execute Create Table
- [Model::dropTable](/docs/fegg/library/model/methods/droptable)
  - Execute Drop table
- [Model::dropIndex](/docs/fegg/library/model/methods/dropindex)
  - Execute Drop index
- [Model::alterAddColumn](/docs/fegg/library/model/methods/alteraddcolumn)
  - Execute Alter Add Column
- [Model::alterRenameTo](/docs/fegg/library/model/methods/alterrenameto)
  - Execute Alter Rename
- [Model::pragma](/docs/fegg/library/model/methods/pragma)
  - Execute Pragma
- [Model::reset](/docs/fegg/library/model/methods/reset)
  - Reset Model
- [Model::debug](/docs/fegg/library/model/methods/debug)
  - Get last executed query
- [Model::unsetRegularUseQuery](/docs/fegg/library/model/methods/unsetregularusequery)
  - Disable automatic append query for a current query flag
- [Model::unsetRegularUseQueryForTable](/docs/fegg/library/model/methods/unsetregularusequeryfortable)
  - Disable automatic append query of the table for a current query flag
- [Model::disabledRegularUseQuery](/docs/fegg/library/model/methods/disabledregularusequery)
  - Disable automatic append query flag


--- docs/fegg/library/model/methods/addbindparam.mdx ---

---
sidebar_position: 9
---

# Model::addBindParam

> Add Bind Parameter types

## Description

```php
public self Model::addBindParam( string $column, string $type )
```

## Arguments

| Name    | Data type | Default | Remarks     |
| ------- | --------- | ------- | ----------- |
| $column | string    |         | Bind Column |
| $type   | string    |         | Bind Type   |

### Prepared Type

- `FLOAT`
- `INTEGER`
- `DATE`
- `DATETIME`

## Example

```php title="Controller"
$model = new Model();
$model->addBindParam('news_id', 'INTEGER');
$model->addBindParam('image_id', 'INTEGER');
$model->addBindParam('file_id', 'INTEGER');
$model->addBindParam('post_date', 'DATETIME');

// Same with the following
$model = new Model();
$model->setBindParam(array(
    'news_id'   => 'INTEGER',
    'image_id'  => 'INTEGER',
    'file_id'   => 'INTEGER',
    'post_date' => 'DATETIME',
));
```


--- docs/fegg/library/model/methods/alteraddcolumn.mdx ---

---
sidebar_position: 40
---

# Model::alterAddColumn

> Execute Alter Add Column

## Description

```php
public void Model::alterAddColumn( string $field )
```

## Arguments

| Name   | Data type | Default | Remarks            |
| ------ | --------- | ------- | ------------------ |
| $field | string    |         | Adding column name |

## Example

```php title="Controller"
$model = new Model(true, array(
    'table'   => 'cms_news',
));

// ALTER TABLE cms_news ADD news_id INTEGER NOT NULL
$model->alterAddColumn('news_id INTEGER NOT NULL');
```


--- docs/fegg/library/model/methods/alterrenameto.mdx ---

---
sidebar_position: 41
---

# Model::alterRenameTo

> Execute Alter Rename

## Description

```php
public void Model::alterRenameTo( string $rename )
```

## Arguments

| Name    | Data type | Default | Remarks              |
| ------- | --------- | ------- | -------------------- |
| $rename | string    |         | Rename to table name |

## Example

```php title="Controller"
$model = new Model(true, array(
    'table'   => 'cms_news',
));

// ALTER TABLE cms_news TO cms_news_ex
$model->alterRenameTo('cms_news_ex');
```


--- docs/fegg/library/model/methods/construct.mdx ---

---
sidebar_position: 1
---

# Model::\_\_construct

> Model class constructor

## Description

```php
public self Model::__construct( [ boolean $is_admin = false, array $options = [] ] )
```

## Arguments

| Name | Data type | Default | Remarks |
| --- | --- | --- | --- |
| $is_admin | boolean | false | Flag for displaying record that disabled visibility flag (For Admin page) |
| $options | array | [] | Model options |

## Example

```php title="Controller"
// For client page (Don't display hidden record)
$model = new Model(false, array(
    // Operate to `cms_news` table
    'table'   => 'cms_news',

    // Primary ID is `id`
    'id'      => 'news_id',

    // Visibility flag is `visible`
    'visible' => 'visible',

    // Bind columns data type
    'bind'    => array(
        'news_id'   => 'INTEGER',
        'image_id'  => 'INTEGER',
        'file_id'   => 'INTEGER',
        'post_date' => 'DATETIME',
    ),
));
```


--- docs/fegg/library/model/methods/count.mdx ---

---
sidebar_position: 26
---

# Model::count

> Get the number of record's count

## Description

```php
public number Model::count()
```

## Example

```php title="Controller"
$model = new Model(false, array(
    'table'   => 'cms_news',
    'id'      => 'news_id',
    'visible' => 'visible',
));

$count = $model->count();
```


--- docs/fegg/library/model/methods/create.mdx ---

---
sidebar_position: 37
---

# Model::create

> Execute Create Table

## Description

```php
public void Model::create( array $fields )
```

## Arguments

| Name    | Data type | Default | Remarks            |
| ------- | --------- | ------- | ------------------ |
| $fields | array     |         | Fields information |

### Fields structure

| Key          | Data type | Remarks              |
| ------------ | --------- | -------------------- |
| `name`       | string    | Column name          |
| `type`       | string    | Column type          |
| `notnull`    | boolean   | Enable NOT NULL      |
| `dflt_value` | mixed     | Default value        |
| `pk`         | boolean   | Enable PRIMARY KEY   |
| `ai`         | boolean   | Enable AUTOINCREMENT |

## Example

```php title="Controller"
$model = new Model(true, array(
    'table'   => 'cms_news',
));

// CREATE TABLE cms_news(
//     news_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
//     title VARCHAR NOT NULL,
//     body TEXT
// )
$model->create([
    [
        'name' => 'news_id',
        'type' => 'INTEGER',
        'notnull' => true,
        'pk' => true,
        'ai' => true,
    ],
    [
        'name' => 'title',
        'type' => 'VARCHAR',
        'notnull' => true,
    ],
    [
        'name' => 'body',
        'type' => 'TEXT',
    ]
]);
```


--- docs/fegg/library/model/methods/current.mdx ---

---
sidebar_position: 13
---

# Model::current

> Set Current Page Parameter

## Description

```php
public self Model::current( [ number $current = 1 ] )
```

## Arguments

| Name     | Data type | Default | Remarks             |
| -------- | --------- | ------- | ------------------- |
| $current | number    | 1       | Current page number |

## Example

```php title="Controller"
$model = new Model(false, array(
    'table'   => 'cms_news',
    'id'      => 'news_id',
    'visible' => 'visible',
));

// Get 2nd page's 5 records
$records = $model->listMax(5)->current(2)->find();
```


--- docs/fegg/library/model/methods/debug.mdx ---

---
sidebar_position: 44
---

# Model::debug

> Get last executed query

## Description

```php
public string Model::debug()
```

## Example

```php title="Controller"
$model = new Model(true, array(
    'table'   => 'cms_news',
));

$model->where('news = ?', [1])
    ->listMax(5)
    ->current(2)
    ->find();

echo $model->debug();
// -> SELECT * FROM cms_news WHERE news = 1 LIMIT 5, 5
```


--- docs/fegg/library/model/methods/delete.mdx ---

---
sidebar_position: 34
---

# Model::delete

> Execute Logical Delete the record by specified primary ID

## Description

```php
public void Model::delete( mixed $id )
```

## Arguments

| Name | Data type | Default | Remarks                    |
| ---- | --------- | ------- | -------------------------- |
| $id  | mixed     |         | Deleting target Primary ID |

## Example

```php title="Controller"
$model = new Model(false, array(
    'table'   => 'cms_news',
    'id'      => 'news_id',
    'visible' => 'visible',
));

$model->delete(1);
```


--- docs/fegg/library/model/methods/deletewhere.mdx ---

---
sidebar_position: 33
---

# Model::deleteWhere

> Execute Logical Delete the records by specified condition

## Description

```php
public void Model::deleteWhere( string $where, array $wh_data )
```

## Arguments

| Name     | Data type | Default | Remarks                  |
| -------- | --------- | ------- | ------------------------ |
| $where   | string    |         | Deleting condition query |
| $wh_data | array     |         | Deleting condition data  |

## Example

```php title="Controller"
$model = new Model(false, array(
    'table'   => 'cms_news',
    'id'      => 'news_id',
    'visible' => 'visible',
));

$model->deleteWhere($item, $data, 'id = ?', [1]);
```


--- docs/fegg/library/model/methods/disabledregularusequery.mdx ---

---
sidebar_position: 47
---

# Model::disabledRegularUseQuery

> Disable automatic append query flag

## Description

```php
public self Model::disabledRegularUseQuery()
```


--- docs/fegg/library/model/methods/dropindex.mdx ---

---
sidebar_position: 39
---

# Model::dropIndex

> Execute Drop index

## Description

```php
public void Model::dropIndex( string $index )
```

## Arguments

| Name   | Data type | Default | Remarks    |
| ------ | --------- | ------- | ---------- |
| $index | string    |         | Index name |

## Example

```php title="Controller"
$model = new Model(true, array(
    'table'   => 'cms_news',
));

// DROP INDEX news_id
$model->dropIndex('news_id');
```


--- docs/fegg/library/model/methods/droptable.mdx ---

---
sidebar_position: 38
---

# Model::dropTable

> Execute Drop table

## Description

```php
public void Model::dropTable()
```

## Example

```php title="Controller"
$model = new Model(true, array(
    'table'   => 'cms_news',
));

// DROP TABLE cms_news
$model->dropTable();
```


--- docs/fegg/library/model/methods/erase.mdx ---

---
sidebar_position: 36
---

# Model::erase

> Execute Physical Delete the record by specified primary ID

## Description

```php
public void Model::erase( mixed $id )
```

## Arguments

| Name | Data type | Default | Remarks                   |
| ---- | --------- | ------- | ------------------------- |
| $id  | mixed     |         | Erasing target Primary ID |

## Example

```php title="Controller"
$model = new Model(false, array(
    'table'   => 'cms_news',
    'id'      => 'news_id',
    'visible' => 'visible',
));

$model->erase(1);
```


--- docs/fegg/library/model/methods/erasewhere.mdx ---

---
sidebar_position: 35
---

# Model::eraseWhere

> Execute Physical Delete the records by specified condition

## Description

```php
public void Model::eraseWhere( string $where, array $wh_data )
```

## Arguments

| Name     | Data type | Default | Remarks                 |
| -------- | --------- | ------- | ----------------------- |
| $where   | string    |         | Erasing condition query |
| $wh_data | array     |         | Erasing condition data  |

## Example

```php title="Controller"
$model = new Model(false, array(
    'table'   => 'cms_news',
    'id'      => 'news_id',
    'visible' => 'visible',
));

$model->eraseWhere($item, $data, 'id = ?', [1]);
```


--- docs/fegg/library/model/methods/find.mdx ---

---
sidebar_position: 23
---

# Model::find

> Get rows designated count

## Description

```php
public array Model::find( [ string $options = [] ] )
```

## Arguments

| Name     | Data type | Default | Remarks               |
| -------- | --------- | ------- | --------------------- |
| $options | array     | []      | Overwrite the options |

## Example

```php title="Controller"
$model = new Model(false, array(
    'table'   => 'cms_news',
    'id'      => 'news_id',
    'visible' => 'visible',
));

$records = $model->find();
```


--- docs/fegg/library/model/methods/getbindparam.mdx ---

---
sidebar_position: 10
---

# Model::getBindParam

> Get Bind Parameter types

## Description

```php
public array Model::getBindParam()
```

## Example

```php title="Controller"
$model = new Model(false, array(
    'bind'    => array(
        'news_id'   => 'INTEGER',
        'post_date' => 'DATETIME',
    ),
));

$bindParam = $model->getBindParam();
var_dump($bindParam);
```

```php title="Output"
array(2) {
    ["post_id"]=> string(7) "INTEGER"
    ["post_date"]=> string(8) "DATETIME"
}
```


--- docs/fegg/library/model/methods/getpager.mdx ---

---
sidebar_position: 24
---

# Model::getPager

> Get variables for making pager

## Description

```php
public array Model::getPager()
```

## Example

```php title="Controller"
$model = new Model(false, array(
    'table'   => 'cms_news',
    'id'      => 'news_id',
    'visible' => 'visible',
));

$records = $model->listMax(5)->current(2)->find();
$pager = $model->getPager();

var_dump($pager);
```

```php title="Output"
array(2) {
    ["current_page"]=> int(2)
    ["page_min"]=> int(1)
    ["page_max"]=> int(6)
    ["previous_page"]=> int(1)
    ["next_page"]=> int(3)
    ["last_page"]=> int(10)
    ["number_of_records"]=> int(50)
}
```


--- docs/fegg/library/model/methods/getprimary.mdx ---

---
sidebar_position: 5
---

# Model::getPrimary

> Get Primary ID name

## Description

```php
public string Model::getPrimary()
```

## Example

```php title="Controller"
$model = new Model(false, array(
    'id' => 'news_id',
));

echo $model->getPrimary();
// -> 'news_id'
```


--- docs/fegg/library/model/methods/gettablename.mdx ---

---
sidebar_position: 3
---

# Model::getTableName

> Get Table name

## Description

```php
public string Model::getTableName()
```

## Example

```php title="Controller"
$model = new Model(false, array(
    'table' => 'cms_news',
));

echo $model->getTableName();
// -> 'cms_news'
```


--- docs/fegg/library/model/methods/getvisible.mdx ---

---
sidebar_position: 7
---

# Model::getVisible

> Get Visible flag name

## Description

```php
public string Model::getVisible()
```

## Example

```php title="Controller"
$model = new Model(false, array(
    'visible' => 'visible',
));

echo $model->getVisible();
// -> 'visible'
```


--- docs/fegg/library/model/methods/group.mdx ---

---
sidebar_position: 22
---

# Model::group

> Set Group Parameter

## Description

```php
public self Model::group( string $group )
```

## Arguments

| Name   | Data type | Default | Remarks      |
| ------ | --------- | ------- | ------------ |
| $group | string    |         | Group column |

## Example

```php title="Controller"
$model = new Model(false, array(
    'table'   => 'cms_news',
    'id'      => 'news_id',
    'visible' => 'visible',
));

$model->group('user_id');

// SELECT *
// FROM cms_news
// GROUP BY user_id
$records = $model->find();
```


--- docs/fegg/library/model/methods/having.mdx ---

---
sidebar_position: 17
---

# Model::having

> Set Having Parameter

## Description

```php
public self Model::having( string $query, [ array $data = [], string $andOr = 'AND' ] )
```

## Arguments

| Name | Data type | Default | Remarks |
| --- | --- | --- | --- |
| $query | string |  | Having query string |
| $data | array | [] | Having query parameter |
| $andOr | string | 'AND' | Condition chain from the previous query AND or OR |

## Example

```php title="Controller"
$model = new Model(false, array(
  'table'   => 'cms_news',
  'id'      => 'news_id',
  'visible' => 'visible',
));

$model->having('news_id = ?', array(1));

// Get filtered records
// SELECT * FROM cms_news HAVING news_id = 1
$records = $model->find();
```

### Complex HAVING query

```php title="Controller"
$model = new Model(false, array(
  'table'   => 'cms_news',
  'id'      => 'news_id',
  'visible' => 'visible',
));

$model->having('news_id = ?', array(1));
$model->havingOpen();
$model->having('title = ?', array('foo'));
$model->having('created_at <= ?', array('2021-01-01'), 'OR');
$model->havingClose();

// SELECT *
// FROM cms_news
// HAVING
//   news_id = 1
//   AND (
//     title = 'foo'
//     OR created_at <= '2021-01-01'
//   )
$records = $model->find();
```


--- docs/fegg/library/model/methods/havingclose.mdx ---

---
sidebar_position: 19
---

# Model::havingClose

> Add close bracket on Having query

## Description

```php
public self Model::havingClose()
```

## Example

```php title="Controller"
$model = new Model(false, array(
  'table'   => 'cms_news',
  'id'      => 'news_id',
  'visible' => 'visible',
));

//
$model->having('news_id = ?', array(1));
$model->havingOpen();
$model->having('title = ?', array('foo'));
$model->having('created_at <= ?', array('2021-01-01'), 'OR');
$model->havingClose();

// SELECT *
// FROM cms_news
// HAVING
//   news_id = 1
//   AND (
//     title = 'foo'
//     OR created_at <= '2021-01-01'
//   )
$records = $model->find();
```


--- docs/fegg/library/model/methods/havingopen.mdx ---

---
sidebar_position: 18
---

# Model::havingOpen

> Add open bracket on Having query

## Description

```php
public self Model::havingOpen( [ string $andOr = 'AND' ] )
```

## Arguments

| Name | Data type | Default | Remarks |
| --- | --- | --- | --- |
| $andOr | string | 'AND' | Condition chain from the previous query AND or OR |

## Example

```php title="Controller"
$model = new Model(false, array(
  'table'   => 'cms_news',
  'id'      => 'news_id',
  'visible' => 'visible',
));

$model->having('news_id = ?', array(1));
$model->havingOpen();
$model->having('title = ?', array('foo'));
$model->having('created_at <= ?', array('2021-01-01'), 'OR');
$model->havingClose();

// SELECT *
// FROM cms_news
// HAVING
//   news_id = 1
//   AND (
//     title = 'foo'
//     OR created_at <= '2021-01-01'
//   )
$records = $model->find();
```


--- docs/fegg/library/model/methods/id.mdx ---

---
sidebar_position: 27
---

# Model::id

> Get one record by specified primary ID

## Description

```php
public array Model::id( mixed $id )
```

## Arguments

| Name | Data type | Default | Remarks           |
| ---- | --------- | ------- | ----------------- |
| $id  | mixed     |         | Target primary ID |

## Example

```php title="Controller"
$model = new Model(false, array(
    'table'   => 'cms_news',
    'id'      => 'news_id',
    'visible' => 'visible',
));

$records = $model->id(1);
```


--- docs/fegg/library/model/methods/insert.mdx ---

---
sidebar_position: 30
---

# Model::insert

> Execute Insert data

## Description

```php
public mixed Model::insert( string $item, array $data )
```

## Arguments

| Name  | Data type | Default | Remarks           |
| ----- | --------- | ------- | ----------------- |
| $item | string    |         | Inserting columns |
| $data | array     |         | Inserting datas   |

## Example

```php title="Controller"
$model = new Model(false, array(
    'table'   => 'cms_news',
    'id'      => 'news_id',
    'visible' => 'visible',
));

$item = 'title, body';
$data = array(
    'title' => 'Sample title',
    'body' => 'Sample body',
);

// Return data is inserted ID
$insertedId = $model->insert($item, $data);
```


--- docs/fegg/library/model/methods/join.mdx ---

---
sidebar_position: 21
---

# Model::join

> Set Join Parameter

## Description

```php
public self Model::join( string $table, [ string $type = 'INNER', string $on = null, array $data = [] ] )
```

## Arguments

| Name   | Data type | Default | Remarks             |
| ------ | --------- | ------- | ------------------- |
| $table | string    |         | Target table        |
| $type  | string    | 'INNER' | Join mode           |
| $on    | string    | NULL    | On query            |
| $data  | array     | []      | On query parameters |

## Example

```php title="Controller"
$model = new Model(false, array(
    'table'   => 'cms_news',
    'id'      => 'news_id',
    'visible' => 'visible',
));

$model->join('cms_user', 'LEFT', 'cms_news.user_id = cms_user.user_id');

// SELECT *
// FROM cms_news
// LEFT JOIN cms_user
//   ON cms_news.user_id = cms_user.user_id
$records = $model->find();
```


--- docs/fegg/library/model/methods/listmax.mdx ---

---
sidebar_position: 12
---

# Model::listMax

> Set ListMax Parameter

## Description

```php
public self Model::listMax( number $listMax )
```

## Arguments

| Name     | Data type | Default | Remarks      |
| -------- | --------- | ------- | ------------ |
| $listMax | number    |         | Limit number |

## Example

```php title="Controller"
$model = new Model(false, array(
    'table'   => 'cms_news',
    'id'      => 'news_id',
    'visible' => 'visible',
));

// Get max 5 records
$records = $model->listMax(5)->find();
```


--- docs/fegg/library/model/methods/one.mdx ---

---
sidebar_position: 25
---

# Model::one

> Get one row from the records

## Description

```php
public array Model::one( [ string $options = [] ] )
```

## Arguments

| Name     | Data type | Default | Remarks               |
| -------- | --------- | ------- | --------------------- |
| $options | array     | []      | Overwrite the options |

## Example

```php title="Controller"
$model = new Model(false, array(
    'table'   => 'cms_news',
    'id'      => 'news_id',
    'visible' => 'visible',
));

$records = $model->one();
```


--- docs/fegg/library/model/methods/order.mdx ---

---
sidebar_position: 20
---

# Model::order

> Set Order Parameter

## Description

```php
public self Model::order( string $order, [ string $duration = 'ASC' ] )
```

## Arguments

| Name      | Data type | Default | Remarks                   |
| --------- | --------- | ------- | ------------------------- |
| $order    | string    |         | Ordering target column    |
| $duration | string    | 'ASC'   | Set the ordering duration |

## Example

```php title="Controller"
$model = new Model(false, array(
    'table'   => 'cms_news',
    'id'      => 'news_id',
    'visible' => 'visible',
));

// SELECT * FROM cms_news ORDER BY created DESC
$records = $model->order('created', 'DESC')->find();
```


--- docs/fegg/library/model/methods/pragma.mdx ---

---
sidebar_position: 42
---

# Model::pragma

> Execute Pragma

## Description

```php
public void Model::pragma( string $mode )
```

## Arguments

| Name  | Data type | Default | Remarks     |
| ----- | --------- | ------- | ----------- |
| $mode | string    |         | Pragma mode |

### Pragma mode

- `table`
- `index`
- `index_list`

## Example

```php title="Controller"
$model = new Model(true, array(
    'table'   => 'cms_news',
));

// PRAGMA table_info(cms_news)
$model->pragma('table');
```


--- docs/fegg/library/model/methods/reset.mdx ---

---
sidebar_position: 43
---

# Model::reset

> Reset Model

## Description

```php
public self Model::reset()
```

## Example

```php title="Controller"
$model = new Model(true, array(
    'table'   => 'cms_news',
));

$model->where('news = ?', [1]);
$model->listMax(5);
$model->current(2);

// SELECT * FROM cms_news WHERE news = 1 LIMIT 5, 5
$model->find();

$model->reset();

// SELECT * FROM cms_news
$model->find();
```


--- docs/fegg/library/model/methods/resetoptions.mdx ---

---
sidebar_position: 29
---

# Model::resetOptions

> Reset Options Data

## Description

```php
public self Model::resetOptions()
```


--- docs/fegg/library/model/methods/select.mdx ---

---
sidebar_position: 11
---

# Model::select

> Set Select Parameter

## Description

```php
public self Model::select( string $select )
```

## Arguments

| Name    | Data type | Default | Remarks       |
| ------- | --------- | ------- | ------------- |
| $select | string    |         | Select fields |

## Example

```php title="Controller"
$model = new Model(false, array(
    'table'   => 'cms_news',
    'id'      => 'news_id',
    'visible' => 'visible',
));

// Get `news_id` and `title` columns
$records = $model->select('news_id, title')->find();
```


--- docs/fegg/library/model/methods/setbindparam.mdx ---

---
sidebar_position: 8
---

# Model::setBindParam

> Set Bind Parameter types

## Description

```php
public self Model::setBindParam( array $bind )
```

## Arguments

| Name  | Data type | Default | Remarks              |
| ----- | --------- | ------- | -------------------- |
| $bind | array     |         | Bind Parameter types |

- Please see [addBindParam](/docs/fegg/library/model/methods/addbindparam) about allowed bind type

## Example

```php title="Controller"
$model = new Model();
$model->setBindParam(array(
    'news_id'   => 'INTEGER',
    'image_id'  => 'INTEGER',
    'file_id'   => 'INTEGER',
    'post_date' => 'DATETIME',
));

// Same with the following
$model = new Model(false, array(
    'bind'    => array(
        'news_id'   => 'INTEGER',
        'image_id'  => 'INTEGER',
        'file_id'   => 'INTEGER',
        'post_date' => 'DATETIME',
    ),
));
```


--- docs/fegg/library/model/methods/setoptions.mdx ---

---
sidebar_position: 28
---

# Model::setOptions

> Setting option parameter

## Description

```php
public self Model::setOptions( array $options )
```

## Arguments

| Name     | Data type | Default | Remarks          |
| -------- | --------- | ------- | ---------------- |
| $options | array     |         | Option parameter |

## Example

```php title="Controller"
$model = new Model();
$model->setOptions(array(
    'table'   => 'cms_news',
    'id'      => 'news_id',
    'visible' => 'visible',
));

// Same with the following
$model = new Model(false, array(
    'table'   => 'cms_news',
    'id'      => 'news_id',
    'visible' => 'visible',
));
```


--- docs/fegg/library/model/methods/setprimary.mdx ---

---
sidebar_position: 4
---

# Model::setPrimary

> Set Primary ID name

## Description

```php
public self Model::setPrimary( string $id )
```

## Arguments

| Name | Data type | Default | Remarks         |
| ---- | --------- | ------- | --------------- |
| $id  | string    |         | Primary ID name |

## Example

```php title="Controller"
$model = new Model();
$model->setPrimary('news_id');

// Same with the following
$model = new Model(false, array(
    'id' => 'news_id',
));
```


--- docs/fegg/library/model/methods/settablename.mdx ---

---
sidebar_position: 2
---

# Model::setTableName

> Set Table Name

## Description

```php
public self Model::setTableName( string $table )
```

## Arguments

| Name   | Data type | Default | Remarks           |
| ------ | --------- | ------- | ----------------- |
| $table | string    |         | Target table name |

## Example

```php title="Controller"
$model = new Model();
$model->setTableName('cms_news');

// Same with the following
$model = new Model(false, array(
    'table'   => 'cms_news',
));
```


--- docs/fegg/library/model/methods/setvisible.mdx ---

---
sidebar_position: 6
---

# Model::setVisible

> Set Visible flag name

## Description

```php
public self Model::setVisible( string $visible )
```

## Arguments

| Name     | Data type | Default | Remarks           |
| -------- | --------- | ------- | ----------------- |
| $visible | string    |         | Visible flag name |

## Example

```php title="Controller"
$model = new Model();
$model->setVisible('visible');

// Same with the following
$model = new Model(false, array(
    'visible' => 'visible',
));
```


--- docs/fegg/library/model/methods/unsetregularusequery.mdx ---

---
sidebar_position: 45
---

# Model::unsetRegularUseQuery

> Disable automatic append query for a current query flag

## Description

```php
public self Model::unsetRegularUseQuery()
```


--- docs/fegg/library/model/methods/unsetregularusequeryfortable.mdx ---

---
sidebar_position: 46
---

# Model::unsetRegularUseQueryForTable

> Disable automatic append query of the table for a current query flag

## Description

```php
public self Model::unsetRegularUseQueryForTable()
```


--- docs/fegg/library/model/methods/update.mdx ---

---
sidebar_position: 32
---

# Model::update

> Execute Update the record by specified primary ID

## Description

```php
public void Model::update( string $item, array $data, mixed $id )
```

## Arguments

| Name  | Data type | Default | Remarks                    |
| ----- | --------- | ------- | -------------------------- |
| $item | string    |         | Updating columns           |
| $data | array     |         | Updating datas             |
| $id   | mixed     |         | Updating target Primary ID |

## Example

```php title="Controller"
$model = new Model(false, array(
    'table'   => 'cms_news',
    'id'      => 'news_id',
    'visible' => 'visible',
));

$item = 'title, body';
$data = array(
    'title' => 'Sample title',
    'body' => 'Sample body',
);
$model->update($item, $data, 1);
```


--- docs/fegg/library/model/methods/updatewhere.mdx ---

---
sidebar_position: 31
---

# Model::updateWhere

> Execute Update the records by specified condition

## Description

```php
public void Model::updateWhere( string $item, array $data, string $where, array $wh_data )
```

## Arguments

| Name     | Data type | Default | Remarks                  |
| -------- | --------- | ------- | ------------------------ |
| $item    | string    |         | Updating columns         |
| $data    | array     |         | Updating datas           |
| $where   | string    |         | Updating condition query |
| $wh_data | array     |         | Updating condition data  |

## Example

```php title="Controller"
$model = new Model(false, array(
    'table'   => 'cms_news',
    'id'      => 'news_id',
    'visible' => 'visible',
));

$item = 'title, body';
$data = array(
    'title' => 'Sample title',
    'body' => 'Sample body',
);
$model->updateWhere($item, $data, 'id = ?', [1]);
```


--- docs/fegg/library/model/methods/where.mdx ---

---
sidebar_position: 14
---

# Model::where

> Set Where Parameter

## Description

```php
public self Model::where( string $query, [ array $data = [], string $andOr = 'AND' ] )
```

## Arguments

| Name | Data type | Default | Remarks |
| --- | --- | --- | --- |
| $query | string |  | Where query string |
| $data | array | [] | Where query parameter |
| $andOr | string | 'AND' | Condition chain from the previous query AND or OR |

## Example

```php title="Controller"
$model = new Model(false, array(
  'table'   => 'cms_news',
  'id'      => 'news_id',
  'visible' => 'visible',
));

$model->where('news_id = ?', array(1));

// Get filtered records
// SELECT * FROM cms_news WHERE news_id = 1
$records = $model->find();
```

### Complex WHERE query

```php title="Controller"
$model = new Model(false, array(
  'table'   => 'cms_news',
  'id'      => 'news_id',
  'visible' => 'visible',
));

$model->where('news_id = ?', array(1));
$model->whereOpen();
$model->where('title = ?', array('foo'));
$model->where('created_at <= ?', array('2021-01-01'), 'OR');
$model->whereClose();

// SELECT *
// FROM cms_news
// WHERE
//   news_id = 1
//   AND (
//     title = 'foo'
//     OR created_at <= '2021-01-01'
//   )
$records = $model->find();
```


--- docs/fegg/library/model/methods/whereclose.mdx ---

---
sidebar_position: 16
---

# Model::whereClose

> Add close bracket on Where query

## Description

```php
public self Model::whereClose()
```

## Example

```php title="Controller"
$model = new Model(false, array(
  'table'   => 'cms_news',
  'id'      => 'news_id',
  'visible' => 'visible',
));

//
$model->where('news_id = ?', array(1));
$model->whereOpen();
$model->where('title = ?', array('foo'));
$model->where('created_at <= ?', array('2021-01-01'), 'OR');
$model->whereClose();

// SELECT *
// FROM cms_news
// WHERE
//   news_id = 1
//   AND (
//     title = 'foo'
//     OR created_at <= '2021-01-01'
//   )
$records = $model->find();
```


--- docs/fegg/library/model/methods/whereopen.mdx ---

---
sidebar_position: 15
---

# Model::whereOpen

> Add open bracket on Where query

## Description

```php
public self Model::whereOpen( [ string $andOr = 'AND' ] )
```

## Arguments

| Name | Data type | Default | Remarks |
| --- | --- | --- | --- |
| $andOr | string | 'AND' | Condition chain from the previous query AND or OR |

## Example

```php title="Controller"
$model = new Model(false, array(
  'table'   => 'cms_news',
  'id'      => 'news_id',
  'visible' => 'visible',
));

$model->where('news_id = ?', array(1));
$model->whereOpen();
$model->where('title = ?', array('foo'));
$model->where('created_at <= ?', array('2021-01-01'), 'OR');
$model->whereClose();

// SELECT *
// FROM cms_news
// WHERE
//   news_id = 1
//   AND (
//     title = 'foo'
//     OR created_at <= '2021-01-01'
//   )
$records = $model->find();
```


--- docs/fegg/library/rss/index.mdx ---

---
sidebar_position: 1
---

# Introduction

Providing some functions for analyzing RSS document

## How to use

You can load `RSS` class through `Application::getClass` method.

```php title="Controller"
$rss = $this->getClass('Tool/RSS', 'https://example.com/feed');
$posts = $rss->fetchAll(10);
```

## Methods

- [RSS::\_\_construct](/docs/fegg/library/rss/methods/construct)
  - Start loading RSS feed
- [RSS::fetch](/docs/fegg/library/rss/methods/fetch)
  - Fetch one record of RSS Feed
- [RSS::fetchAll](/docs/fegg/library/rss/methods/fetchall)
  - Fetch all records or specified number records of RSS Feed


--- docs/fegg/library/rss/methods/construct.mdx ---

---
sidebar_position: 1
---

# RSS::\_\_construct

Start loading RSS feed

## Description

```php
public self RSS::__construct( string $url )
```

## Arguments

| Name | Data type | Default | Remarks      |
| ---- | --------- | ------- | ------------ |
| $url | string    |         | RSS Feed URL |

## Example

```php title="Controller"
$rss = $this->getClass('Tool/RSS', 'https://example.com/feed');
```


--- docs/fegg/library/rss/methods/fetch.mdx ---

---
sidebar_position: 2
---

# RSS::fetch

Start loading RSS feed

## Description

```php
public self RSS::fetch()
```

## Example

```php title="Controller"
$rss = $this->getClass('Tool/RSS', 'https://example.com/feed');

while ($post = $rss->fetch()) {
    // Use $post
}
```


--- docs/fegg/library/rss/methods/fetchall.mdx ---

---
sidebar_position: 3
---

# RSS::fetchAll

Fetch all records or specified number records of RSS Feed

## Description

```php
public self RSS::fetchAll( [ number $max = 0 ] )
```

## Arguments

| Name | Data type | Default | Remarks |
| --- | --- | --- | --- |
| $max | number | 0 | Maxmum record number / if `0` getting all the records |

## Example

```php title="Controller"
$rss = $this->getClass('Tool/RSS', 'https://example.com/feed');
$posts = $rss->fetchAll(5);

foreach ($posts as $post) {
    // Use $post
}
```


--- docs/fegg/library/trim/index.mdx ---

---
sidebar_position: 1
---

# Introduction

Providing some functions for processing image (especially image crop)

## Methods

- [Trim::setImage](/docs/fegg/library/trim/methods/setimage)
  - Set target image and output file path
- [Trim::resize](/docs/fegg/library/trim/methods/resize)
  - Resize the image with keeping ratio
- [Trim::resizeFill](/docs/fegg/library/trim/methods/resizefill)
  - Resize the image with keeping ratio and filling white/black color (Like `object-fit: contain`)
- [Trim::resizeForce](/docs/fegg/library/trim/methods/resizeforce)
  - Resize the image forcely
- [Trim::resizeTrim](/docs/fegg/library/trim/methods/resizetrim)
  - Resize the image with keeping ratio and tirmming overwrapped (Like `object-fit: cover`)
- [Trim::create](/docs/fegg/library/trim/methods/create)
  - Save the image to specified location
- [Trim::view](/docs/fegg/library/trim/methods/view)
  - Display converted image


--- docs/fegg/library/trim/methods/create.mdx ---

---
sidebar_position: 6
---

# Trim::create

Save the image to specified location

## Description

```php
public void Trim::create()
```

## Example

```php title="Controller"
$trim = $this->getClass('Tool/RSS', 'https://example.com/feed');
$trim->setImage('path/to/image.jpg', 'path/to/converted.jpg');

$trim->resizeTrim(300, 300, 'm');
$trim->create();
```


--- docs/fegg/library/trim/methods/resize.mdx ---

---
sidebar_position: 2
---

# Trim::resize

Set target image and output file path

## Description

```php
public void Trim::resize( number $w, number $h )
```

## Arguments

| Name | Data type | Default | Remarks                |
| ---- | --------- | ------- | ---------------------- |
| $w   | number    |         | Converted image width  |
| $h   | number    |         | Converted image height |

## Example

```php title="Controller"
$trim = $this->getClass('Tool/RSS', 'https://example.com/feed');
$trim->setImage('path/to/image.jpg', 'path/to/converted.jpg');

$trim->resize(300, 300);
```


--- docs/fegg/library/trim/methods/resizefill.mdx ---

---
sidebar_position: 3
---

# Trim::resizeFill

Resize the image with keeping ratio and filling white/black color (Like `object-fit: contain`)

## Description

```php
public void Trim::resizeFill( number $w, number $h )
```

## Arguments

| Name | Data type | Default | Remarks                |
| ---- | --------- | ------- | ---------------------- |
| $w   | number    |         | Converted image width  |
| $h   | number    |         | Converted image height |

## Example

```php title="Controller"
$trim = $this->getClass('Tool/RSS', 'https://example.com/feed');
$trim->setImage('path/to/image.jpg', 'path/to/converted.jpg');

$trim->resizeFill(300, 300);
```


--- docs/fegg/library/trim/methods/resizeforce.mdx ---

---
sidebar_position: 4
---

# Trim::resizeForce

Resize the image forcely

## Description

```php
public void Trim::resizeForce( number $w, number $h )
```

## Arguments

| Name | Data type | Default | Remarks                |
| ---- | --------- | ------- | ---------------------- |
| $w   | number    |         | Converted image width  |
| $h   | number    |         | Converted image height |

## Example

```php title="Controller"
$trim = $this->getClass('Tool/RSS', 'https://example.com/feed');
$trim->setImage('path/to/image.jpg', 'path/to/converted.jpg');

$trim->resizeForce(300, 300);
```


--- docs/fegg/library/trim/methods/resizetrim.mdx ---

---
sidebar_position: 5
---

# Trim::resizeTrim

Resize the image with keeping ratio and tirmming overwrapped (Like `object-fit: cover`)

## Description

```php
public void Trim::resizeTrim( number $w, number $h, string $cp )
```

## Arguments

| Name | Data type | Default | Remarks                |
| ---- | --------- | ------- | ---------------------- |
| $w   | number    |         | Converted image width  |
| $h   | number    |         | Converted image height |
| $cp  | string    |         | Crop position          |

### Crop position

<table style={{textAlign: 'center'}}>
    <tbody>
        <tr>
            <td>lt</td>
            <td>t</td>
            <td>rt</td>
        </tr>
        <tr>
            <td>l</td>
            <td>m</td>
            <td>r</td>
        </tr>
        <tr>
            <td>lb</td>
            <td>b</td>
            <td>rb</td>
        </tr>
    </tbody>
</table>

## Example

```php title="Controller"
$trim = $this->getClass('Tool/RSS', 'https://example.com/feed');
$trim->setImage('path/to/image.jpg', 'path/to/converted.jpg');

$trim->resizeTrim(300, 300, 'm');
```


--- docs/fegg/library/trim/methods/setimage.mdx ---

---
sidebar_position: 1
---

# Trim::setImage

Set target image and output file path

## Description

```php
public void Trim::setImage( string $org_image, string $cnv_path )
```

## Arguments

| Name       | Data type | Default | Remarks                                |
| ---------- | --------- | ------- | -------------------------------------- |
| $org_image | string    |         | Target image path                      |
| $cnv_path  | string    |         | The location of saving converted image |

## Example

```php title="Controller"
$trim = $this->getClass('Tool/RSS', 'https://example.com/feed');
$trim->setImage('path/to/image.jpg', 'path/to/converted.jpg');
```


--- docs/fegg/library/trim/methods/view.mdx ---

---
sidebar_position: 7
---

# Trim::view

Display converted image

## Description

```php
public void Trim::view()
```

## Example

```php title="Controller"
$trim = $this->getClass('Tool/RSS', 'https://example.com/feed');
$trim->setImage('path/to/image.jpg', 'path/to/converted.jpg');

$trim->resizeTrim(300, 300, 'm');
$trim->view();
```


--- docs/fegg/library/upload/index.mdx ---

---
sidebar_position: 1
---

# Introduction

Providing some functions for uploading/validating files

## How to use

You can load `Upload` class through `Application::getClass` method.

```php title="Controller"
$upload = $this->getClass('Tool/Upload');

$upload->upload('file');
```

## Methods

- [Upload::setUploadDir](/docs/fegg/library/upload/methods/setuploaddir)
  - Set upload directory
- [Upload::getUploadDir](/docs/fegg/library/upload/methods/getuploaddir)
  - Get upload directory
- [Upload::setMaxFileSize](/docs/fegg/library/upload/methods/setmaxfilesize)
  - Set upload file size limitation
- [Upload::getMaxFileSize](/docs/fegg/library/upload/methods/getmaxfilesize)
  - Get upload file size limitation
- [Upload::setFileType](/docs/fegg/library/upload/methods/setfiletype)
  - Set upload file type limitation
- [Upload::getFileType](/docs/fegg/library/upload/methods/getfiletype)
  - Get upload file type limitation
- [Upload::setUploadInfo](/docs/fegg/library/upload/methods/setuploadinfo)
  - Set upload option once
- [Upload::upload](/docs/fegg/library/upload/methods/upload)
  - Validate uploaded file and move to upload directory
- [Upload::getUploadedData](/docs/fegg/library/upload/methods/getuploadeddata)
  - Get uploaded file information
- [Upload::isError](/docs/fegg/library/upload/methods/iserror)
  - Check uploaded file has error
- [Upload::getErrorMessage](/docs/fegg/library/upload/methods/geterrormessage)
  - Get uploaded file error


--- docs/fegg/library/upload/methods/geterrormessage.mdx ---

---
sidebar_position: 11
---

# Upload::getErrorMessage

Get uploaded file error

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/upload/methods/getfiletype.mdx ---

---
sidebar_position: 6
---

# Upload::getFileType

Get upload file type limitation

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/upload/methods/getmaxfilesize.mdx ---

---
sidebar_position: 4
---

# Upload::getMaxFileSize

Get upload file size limitation

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/upload/methods/getuploaddir.mdx ---

---
sidebar_position: 2
---

# Upload::getUploadDir

Get upload directory

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/upload/methods/getuploadeddata.mdx ---

---
sidebar_position: 9
---

# Upload::getUploadedData

Get uploaded file information

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/upload/methods/iserror.mdx ---

---
sidebar_position: 10
---

# Upload::isError

Check uploaded file has error

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/upload/methods/setfiletype.mdx ---

---
sidebar_position: 5
---

# Upload::setFileType

Set upload file type limitation

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/upload/methods/setmaxfilesize.mdx ---

---
sidebar_position: 3
---

# Upload::setMaxFileSize

Set upload file size limitation

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/upload/methods/setuploaddir.mdx ---

---
sidebar_position: 1
---

# Upload::setUploadDir

Set upload directory

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/upload/methods/setuploadinfo.mdx ---

---
sidebar_position: 7
---

# Upload::setUploadInfo

Set upload option once

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/upload/methods/upload.mdx ---

---
sidebar_position: 8
---

# Upload::upload

Validate uploaded file and move to upload directory

import Underconstruction from '../../../../../src/components/Underconstruction';

<Underconstruction></Underconstruction>


--- docs/fegg/library/validation/configuration.mdx ---

---
sidebar_position: 2
---

# Configuration

You can change error message on **code/config/validation_error_message.php**.

```php title="validation_error_message.php"
<?php
/**
 * エラーメッセージ定義
 * Definition of Error message to Validation Class.
 *
 * @see Validation.php
 */
// @item should be Alphanumeric.
$validation_error_message['@alphameric'] = '<strong>%s</strong> は半角英数で入力してください';
// @item is not Date format.
$validation_error_message['@date'] = '<strong>%s</strong> の日付では登録できません';
// @item is not Email format.
$validation_error_message['@email'] = '<strong>%s</strong> は登録できない形式です';
// @item should be half size character.
$validation_error_message['@hankaku'] = '<strong>%s</strong> は半角で入力してください';
// @item should be KATAKANA.
$validation_error_message['@katakana'] = '<strong>%s</strong> はカタカナで入力してください';
// @item should be length less than @maxlength.
$validation_error_message['@maxlength'] = '<strong>%s</strong> は <strong>%s</strong> 文字以内で入力してください';
// @item should be length greater than @maxlength.
$validation_error_message['@minlength'] = '<strong>%s</strong> は <strong>%s</strong> 文字以上で入力してください';
// @item should be Numeric.
$validation_error_message['@numeric'] = '<strong>%s</strong> は 半角数字で入力してください';
// @item should be Numeric to Integers or Decimals.
$validation_error_message['@numeric_decimalpoint'] = '<strong>%s</strong> は 半角の整数もしくは小数で入力してください';
// @item should be half size character to Numeric and Minus sign.
$validation_error_message['@numeric_minus'] = '<strong>%s</strong> は 数字、マイナス符号とも半角で入力してください';
// @item is unable character type.
$validation_error_message['@password'] = '<strong>%s</strong> は登録できない形式です';
// @item should be mixing of alphanumeric.
$validation_error_message['@password_mixed_letters'] = '<strong>%s</strong> は半角英数の混合で入力してください';
// @item is required.
$validation_error_message['@required'] = '<strong>%s</strong> をご入力ください';
// @item is not Tel format.
$validation_error_message['@tel'] = '<stron>%s</strong> は登録できない形式です';
// @item is not Time format.
$validation_error_message['@time'] = '<stron>%s</strong> の時間では登録できません';
// @item is not URL format.
$validation_error_message['@url'] = '<stron>%s</strong> は登録できない形式です';
// @item is not Time format.
$validation_error_message['@userid'] = '<stron>%s</strong> は登録できない形式です';
// @item is not Zipcode format.
$validation_error_message['@zipcode'] = '<stron>%s</strong> は登録できない形式です';
```


--- docs/fegg/library/validation/index.mdx ---

---
sidebar_position: 1
---

# Introduction

> Providing some functions for validation

## How to use

You can load `Validation` class through `Application::getClass` method.

```php title="Controller"
$validation = $this->getClass('Validation');

// Check Required
$name = 'Field Label';
$id   = 'field_name';
$validation->required($id, $this->in($id), array('@required', $name));

// Get Error
$errorMessage = $validation->getErrorMessage();
```

## Methods

- [Validation::required](/docs/fegg/library/validation/methods/required)
  - Check required
- [Validation::alphameric](/docs/fegg/library/validation/methods/alphameric)
  - Check alphanumeric or not
- [Validation::numeric](/docs/fegg/library/validation/methods/numeric)
  - Check numeric or not
- [Validation::date](/docs/fegg/library/validation/methods/date)
  - Check valid date string
- [Validation::email](/docs/fegg/library/validation/methods/email)
  - Check valid E-mail string
- [Validation::tel](/docs/fegg/library/validation/methods/tel)
  - Check valid tel character (+ - 0-9)
- [Validation::time](/docs/fegg/library/validation/methods/time)
  - Check valid time character (: 0-9)
- [Validation::url](/docs/fegg/library/validation/methods/url)
  - Check valid url character
- [Validation::zipcode](/docs/fegg/library/validation/methods/zipcode)
  - Check valid zip code character (for JP only)
- [Validation::userId](/docs/fegg/library/validation/methods/userid)
  - Check allowed character for UserID (- \_ . 0-9)
- [Validation::password](/docs/fegg/library/validation/methods/password)
  - Check allowed character to Password
- [Validation::maxbyte](/docs/fegg/library/validation/methods/maxbyte)
  - Check character byte
- [Validation::length](/docs/fegg/library/validation/methods/length)
  - Check character length
- [Validation::maxlength](/docs/fegg/library/validation/methods/maxlength)
  - Check character less than maximum length
- [Validation::minlength](/docs/fegg/library/validation/methods/minlength)
  - Check character more than minimum length
- [Validation::hankaku](/docs/fegg/library/validation/methods/hankaku)
  - Check half-width character for Multi byte string language
- [Validation::katakana](/docs/fegg/library/validation/methods/katakana)
  - Check Katakana chracter for Japanese language
- [Validation::setError](/docs/fegg/library/validation/methods/seterror)
  - Set Error status
- [Validation::setErrorMessage](/docs/fegg/library/validation/methods/seterrormessage)
  - Set Error message
- [Validation::isError](/docs/fegg/library/validation/methods/iserror)
  - Confirm Error status
- [Validation::getErrorMessage](/docs/fegg/library/validation/methods/geterrormessage)
  - Get Error message


--- docs/fegg/library/validation/methods/alphameric.mdx ---

---
sidebar_position: 2
---

# Validation::alphameric

> Check alphanumeric or not

## Description

```php
public boolean Validation::alphameric( string $name, mixed $value, [ mixed $code = '' ] )
```

## Arguments

| Name   | Data type | Default | Remarks                     |
| ------ | --------- | ------- | --------------------------- |
| $name  | string    |         | Item label                  |
| $value | mixed     |         | Check field value           |
| $code  | mixed     | ""      | Error code or Error message |

## Example

```php title="Controller"
$validation = $this->getClass('Validation');

// If $value is not alphanumeric
$successName = 'Success Field';
$successVar  = 'abc123';
$validation->alphameric('success', $successVar, array('@alphameric', $successName));

var_dump($validation->isError()); // -> false
var_dump($validation->getErrorMessage()); // -> null

// If $value is not alphanumeric
$failedName = 'Failed Field';
$failedVar  = 'abc!';
$validation->alphameric('failed', $failedVar, array('@alphameric', $failedName));

var_dump($validation->isError()); // -> true
var_dump($validation->getErrorMessage());
// -> "failed" => "<strong>Failed Field</strong> は半角英数で入力してください"
```


--- docs/fegg/library/validation/methods/date.mdx ---

---
sidebar_position: 4
---

# Validation::date

> Check valid date string

## Description

```php
public boolean Validation::date( string $name, mixed $value, [ mixed $code = '' ] )
```

## Arguments

| Name   | Data type | Default | Remarks                     |
| ------ | --------- | ------- | --------------------------- |
| $name  | string    |         | Item label                  |
| $value | mixed     |         | Check field value           |
| $code  | mixed     | ""      | Error code or Error message |

## Example

```php title="Controller"
$validation = $this->getClass('Validation');

// If $value is date string
$successName = 'Success Field';
$successVar  = '2017/01/01';
$validation->date('success', $successVar, array('@date', $successName));

var_dump($validation->isError()); // -> false
var_dump($validation->getErrorMessage()); // -> null

// If $value is not date string
$failedName = 'Failed Field';
$failedVar  = '00:00';
$validation->date('failed', $failedVar, array('@date', $failedName));

var_dump($validation->isError()); // -> true
var_dump($validation->getErrorMessage());
// -> "failed" => "<strong>Failed Field</strong> の日付では登録できません"
```


--- docs/fegg/library/validation/methods/email.mdx ---

---
sidebar_position: 5
---

# Validation::email

> Check valid E-mail string

## Description

```php
public boolean Validation::email( string $name, mixed $value, [ mixed $code = '' ] )
```

## Arguments

| Name   | Data type | Default | Remarks                     |
| ------ | --------- | ------- | --------------------------- |
| $name  | string    |         | Item label                  |
| $value | mixed     |         | Check field value           |
| $code  | mixed     | ""      | Error code or Error message |

## Example

```php title="Controller"
$validation = $this->getClass('Validation');

// If $value is E-mail string
$successName = 'Success Field';
$successVar  = 'email@example.com';
$validation->email('success', $successVar, array('@email', $successName));

var_dump($validation->isError()); // -> false
var_dump($validation->getErrorMessage()); // -> null

// If $value is not E-mail string
$failedName = 'Failed Field';
$failedVar  = 'Something not email text';
$validation->email('failed', $failedVar, array('@email', $failedName));

var_dump($validation->isError()); // -> true
var_dump($validation->getErrorMessage());
// -> "failed" => "<strong>Failed Field</strong> は登録できない形式です"
```


--- docs/fegg/library/validation/methods/geterrormessage.mdx ---

---
sidebar_position: 21
---

# Validation::getErrorMessage

> Get Error message

## Description

```php
public array Validation::getErrorMessage()
```


--- docs/fegg/library/validation/methods/hankaku.mdx ---

---
sidebar_position: 16
---

# Validation::hankaku

> Check half-width character for Multi byte string language

## Description

```php
public boolean Validation::hankaku( string $name, mixed $value, [ mixed $code = '' ] )
```

## Arguments

| Name   | Data type | Default | Remarks                     |
| ------ | --------- | ------- | --------------------------- |
| $name  | string    |         | Item label                  |
| $value | mixed     |         | Check field value           |
| $code  | mixed     | ""      | Error code or Error message |

## Example

```php title="Controller"
$validation = $this->getClass('Validation');

// If $value has only half-width character
$successName = 'Success Field';
$successVar  = 'foo';
$validation->hankaku('success', $successVar, array('@hankaku', $successName));

var_dump($validation->isError()); // -> false
var_dump($validation->getErrorMessage()); // -> null

// If $value has not only half-width character
$failedName = 'Failed Field';
$failedVar  = 'テスト';
$validation->required('failed', $failedVar, array('@required', $failedName));

var_dump($validation->isError()); // -> true
var_dump($validation->getErrorMessage());
// -> "failed" => "<strong>Failed Field</strong> は半角で入力してください"
```


--- docs/fegg/library/validation/methods/iserror.mdx ---

---
sidebar_position: 20
---

# Validation::isError

> Confirm Error status

## Description

```php
public boolean Validation::isError()
```


--- docs/fegg/library/validation/methods/katakana.mdx ---

---
sidebar_position: 17
---

# Validation::katakana

> Check Katakana chracter for Japanese language

## Description

```php
public boolean Validation::katakana( string $name, mixed $value, [ mixed $code = '', boolean $zenkakuFlag = false ] )
```

## Arguments

| Name         | Data type | Default | Remarks                                |
| ------------ | --------- | ------- | -------------------------------------- |
| $name        | string    |         | Item label                             |
| $value       | mixed     |         | Check field value                      |
| $code        | mixed     | ""      | Error code or Error message            |
| $zenkakuFlag | boolean   | false   | Required full-width Katakana only flag |

## Example

```php title="Controller"
$validation = $this->getClass('Validation');

// If $value has only Japanese Katakana
$successName = 'Success Field';
$successVar  = 'テスト';
$validation->katakana('success', $successVar, array('@katakana', $successName));

var_dump($validation->isError()); // -> false
var_dump($validation->getErrorMessage()); // -> null

// If $value has not only Japanese Katakana
$failedName = 'Failed Field';
$failedVar  = 'てすと';
$validation->katakana('failed', $failedVar, array('@katakana', $failedName));

var_dump($validation->isError()); // -> true
var_dump($validation->getErrorMessage());
// -> "failed" => "<strong>Failed Field</strong> はカタカナで入力してください"
```

### Optional Flag

```php title="Controller"
// If $value has half-width Katakana with disabled $zenkakuFlag
$successName = 'Success Field';
$successVar  = 'ﾃｽﾄ';
$validation->katakana('success', $successVar, array('@katakana', $successName));

var_dump($validation->isError()); // -> false
var_dump($validation->getErrorMessage()); // -> null

// If $value has half-width Katakana with enabled $zenkakuFlag
$failedName = 'Failed Field';
$failedVar  = 'ﾃｽﾄ';
$validation->katakana('failed', $failedVar, array('@katakana', $failedName), true);

var_dump($validation->isError()); // -> true
var_dump($validation->getErrorMessage());
// -> "failed" => "<strong>Failed Field</strong> はカタカナで入力してください"
```


--- docs/fegg/library/validation/methods/length.mdx ---

---
sidebar_position: 13
---

# Validation::length

> Check character length

## Description

```php
public boolean Validation::length( string $name, mixed $value, numeric $length, [ mixed $code = '' ] )
```

## Arguments

| Name    | Data type | Default | Remarks                     |
| ------- | --------- | ------- | --------------------------- |
| $name   | string    |         | Item label                  |
| $value  | mixed     |         | Check field value           |
| $length | numeric   |         | Specific length value       |
| $code   | mixed     | ""      | Error code or Error message |

## Example

```php title="Controller"
$validation = $this->getClass('Validation');

// If $value is equal with specific length
$successName = 'Success Field';
$successVar  = 'foo';
$length      = 3;
$validation->length('success', $successVar, $length, array('@length', $successName, $length));

var_dump($validation->isError()); // -> false
var_dump($validation->getErrorMessage()); // -> null

// If $value is not equal with specific length
$failedName = 'Failed Field';
$failedVar  = 'failed';
$length     = 3;
$validation->length('failed', $failedVarm, $length, array('@length', $failedName, $length));

var_dump($validation->isError()); // -> true
var_dump($validation->getErrorMessage());
// -> "failed" => ''
```


--- docs/fegg/library/validation/methods/maxbyte.mdx ---

---
sidebar_position: 12
---

# Validation::maxbyte

> Check character byte

## Description

```php
public boolean Validation::maxbyte( string $name, mixed $value, numeric $byte, [ mixed $code = '' ] )
```

## Arguments

| Name   | Data type | Default | Remarks                     |
| ------ | --------- | ------- | --------------------------- |
| $name  | string    |         | Item label                  |
| $value | mixed     |         | Check field value           |
| $byte  | numeric   |         | Maximum byte value          |
| $code  | mixed     | ""      | Error code or Error message |

## Example

```php title="Controller"
$validation = $this->getClass('Validation');

// If $value is less than equal specific value
$successName = 'Success Field';
$successVar  = 'foo';
$validation->maxbyte('success', $successVar, 10, array('@maxbyte', $successName));

var_dump($validation->isError()); // -> false
var_dump($validation->getErrorMessage()); // -> null

// If $value is more than specific value
$failedName = 'Failed Field';
$failedVar  = '1234567890';
$validation->maxbyte('failed', $failedVar, 5, array('@maxbyte', $failedName));

var_dump($validation->isError()); // -> true
var_dump($validation->getErrorMessage());
// -> "failed" => null
// There is no default error text
```


--- docs/fegg/library/validation/methods/maxlength.mdx ---

---
sidebar_position: 14
---

# Validation::maxlength

> Check character less than maximum length

## Description

```php
public boolean Validation::maxlength( string $name, mixed $value, numeric $length, [ mixed $code = '' ] )
```

## Arguments

| Name    | Data type | Default | Remarks                     |
| ------- | --------- | ------- | --------------------------- |
| $name   | string    |         | Item label                  |
| $value  | mixed     |         | Check field value           |
| $length | numeric   |         | Specific length value       |
| $code   | mixed     | ""      | Error code or Error message |

## Example

```php title="Controller"
$validation = $this->getClass('Validation');

// If $value is less than equal specific length
$successName = 'Success Field';
$successVar  = 'foo';
$length      = 5;
$validation->maxlength('success', $successVar, $length, array('@maxlength', $successName, $length));

var_dump($validation->isError()); // -> false
var_dump($validation->getErrorMessage()); // -> null

// If $value is more than specific length
$failedName = 'Failed Field';
$failedVar  = 'failed';
$length     = 5;
$validation->maxlength('failed', $failedVar, $length, array('@maxlength', $failedName, $length));

var_dump($validation->isError()); // -> true
var_dump($validation->getErrorMessage());
// -> "failed" => "<strong>Failed Field</strong> は <strong>5</strong> 文字以内で入力してください"
```


--- docs/fegg/library/validation/methods/minlength.mdx ---

---
sidebar_position: 15
---

# Validation::minlength

> Check character more than minimum length

## Description

```php
public boolean Validation::minlength( string $name, mixed $value, numeric $length, [ mixed $code = '' ] )
```

## Arguments

| Name    | Data type | Default | Remarks                     |
| ------- | --------- | ------- | --------------------------- |
| $name   | string    |         | Item label                  |
| $value  | mixed     |         | Check field value           |
| $length | numeric   |         | Specific length value       |
| $code   | mixed     | ""      | Error code or Error message |

## Example

```php title="Controller"
$validation = $this->getClass('Validation');

// If $value is more than specific length
$successName = 'Success Field';
$successVar  = 'foo';
$length      = 1;
$validation->minlength('success', $successVar, $length, array('@minlength', $successName, $length));

var_dump($validation->isError()); // -> false
var_dump($validation->getErrorMessage()); // -> null

// If $value is less than equal specific length
$failedName = 'Failed Field';
$failedVar  = 'failed';
$length     = 10;
$validation->minlength('failed', $failedVar, $length, array('@minlength', $failedName, $length));

var_dump($validation->isError()); // -> true
var_dump($validation->getErrorMessage());
// -> "failed" => "<strong>Failed Field</strong> は <strong>10</strong> 文字以上で入力してください"
```


--- docs/fegg/library/validation/methods/numeric.mdx ---

---
sidebar_position: 3
---

# Validation::numeric

> Check numeric or not

## Description

```php
public boolean Validation::numeric( string $name, mixed $value, [ mixed $code = '', boolean $decimalPointFlag = false, boolean $minusFlag = false ] )
```

## Arguments

| Name              | Data type | Default | Remarks                     |
| ----------------- | --------- | ------- | --------------------------- |
| $name             | string    |         | Item label                  |
| $value            | mixed     |         | Check field value           |
| $code             | mixed     | ""      | Error code or Error message |
| $decimalPointFlag | boolean   | false   | Allow including "."         |
| $minusFlag        | boolean   | false   | Allow including "-"         |

## Example

```php title="Controller"
$validation = $this->getClass('Validation');

// If $value is numeric
$successName = 'Success Field';
$successVar  = '123';
$validation->numeric('success', $successVar, array('@numeric', $successName));

var_dump($validation->isError()); // -> false
var_dump($validation->getErrorMessage()); // -> null

// If $value is not numeric
$failedName = 'Failed Field';
$failedVar  = 'abc123';
$validation->numeric('failed', $failedVar, array('@numeric', $failedName));

var_dump($validation->isError()); // -> true
var_dump($validation->getErrorMessage());
// -> "failed" => "<strong>Failed Field</strong> は 半角数字で入力してください"
```

### Optional Flag

```php title="Controller"
// If $value is negative numeric
$failedName = 'Failed Field';
$failedVar  = '-10';
$validation->numeric('failed', $failedVar, array('@numeric', $failedName));

var_dump($validation->isError()); // -> true
var_dump($validation->getErrorMessage());
// -> "failed" => "<strong>Failed Field</strong> は 半角数字で入力してください"

// If $value is negative numeric with activate $minusFlag
$successName = 'success Field';
$successVar  = '-10';
$validation->numeric('success', $successVar, array('@numeric_minus', $successName), false, true);

var_dump($validation->isError()); // -> false
var_dump($validation->getErrorMessage()); -> null
```


--- docs/fegg/library/validation/methods/password.mdx ---

---
sidebar_position: 11
---

# Validation::password

> Check allowed character to Password

## Description

```php
public boolean Validation::password( string $name, mixed $value, [ mixed $code = '', boolean $mixedLettersFlag = false ] )
```

## Arguments

| Name | Data type | Default | Remarks |
| --- | --- | --- | --- |
| $name | string |  | Item label |
| $value | mixed |  | Check field value |
| $code | mixed | "" | Error code or Error message |
| $mixedLettersFlag | boolean | false | Required mixed letters alphanum flag |

## Example

```php title="Controller"
$validation = $this->getClass('Validation');

// If $value is alphanumeric
$successName = 'Success Field';
$successVar  = 'abcdefhijk';
$validation->password('success', $successVar, array('@password', $successName));

var_dump($validation->isError()); // -> false
var_dump($validation->getErrorMessage()); // -> null

// If $value is not alphanumeric
$failedName = 'Failed Field';
$failedVar  = 'パスワード';
$validation->password('failed', $failedVar, array('@password', $failedName));

var_dump($validation->isError()); // -> true
var_dump($validation->getErrorMessage());
// -> "failed" => "<strong>Failed Field</strong> は登録できない形式です"
```

### Optional Flag

```php title="Controller"
// If $value is alphabet with disabled mixed letter flag
$successName = 'Success Field';
$successVar  = 'abcdefhijk';
$validation->password('success', $successVar, array('@password', $successName));

var_dump($validation->isError()); // -> false
var_dump($validation->getErrorMessage()); // -> null

// If $value is alphabet with enabled mixed letter flag
$failedName = 'Failed Field';
$failedVar  = 'abcdefhijk';
$validation->password('failed', $failedVar, array('@password_mixed_letters', $failedName), true);

var_dump($validation->isError()); // -> true
var_dump($validation->getErrorMessage());
// -> "failed" => "<strong>Failed Field</strong> は半角英数の混合で入力してください"
```


--- docs/fegg/library/validation/methods/required.mdx ---

---
sidebar_position: 1
---

# Validation::required

> Check required

## Description

```php
public boolean Validation::required( string $name, mixed $value, [ mixed $code = '' ] )
```

## Arguments

| Name   | Data type | Default | Remarks                     |
| ------ | --------- | ------- | --------------------------- |
| $name  | string    |         | Item label                  |
| $value | mixed     |         | Check field value           |
| $code  | mixed     | ""      | Error code or Error message |

## Example

```php title="Controller"
$validation = $this->getClass('Validation');

// If $value is not empty
$successName = 'Success Field';
$successVar  = 'foo';
$validation->required('success', $successVar, array('@required', $successName));

var_dump($validation->isError()); // -> false
var_dump($validation->getErrorMessage()); // -> null

// If $value is empty
$failedName = 'Failed Field';
$failedVar  = null;
$validation->required('failed', $failedVar, array('@required', $failedName));

var_dump($validation->isError()); // -> true
var_dump($validation->getErrorMessage());
// -> "failed" => "<strong>Failed Field</strong> は半角英数で入力してください"
```


--- docs/fegg/library/validation/methods/seterror.mdx ---

---
sidebar_position: 18
---

# Validation::setError

> Set Error status

## Description

```php
public boolean Validation::setError( string $name, [ mixed $code = '' ] )
```

## Arguments

| Name  | Data type | Default | Remarks                     |
| ----- | --------- | ------- | --------------------------- |
| $name | string    |         | Item label                  |
| $code | mixed     | ""      | Error code or Error message |

## Example

```php title="Controller"
$validation = $this->getClass('Validation');

var_dump($validation->isError()); // -> false
var_dump($validation->getErrorMessage()); // -> null

// Set error status
$validation->setError('failed', 'Something Error');

var_dump($validation->isError()); // -> true
var_dump($validation->getErrorMessage());
// -> "failed" => "Something Error"
```


--- docs/fegg/library/validation/methods/seterrormessage.mdx ---

---
sidebar_position: 19
---

# Validation::setErrorMessage

> Set Error message

## Description

```php
public boolean Validation::setErrorMessage( string $name, string $message )
```

## Arguments

| Name     | Data type | Default | Remarks       |
| -------- | --------- | ------- | ------------- |
| $name    | string    |         | Item label    |
| $message | string    |         | Error message |

## Example

```php title="Controller"
$validation = $this->getClass('Validation');

var_dump($validation->isError()); // -> false
var_dump($validation->getErrorMessage()); // -> null

// Set error message
$validation->setErrorMessage('failed', 'Something Error');

var_dump($validation->isError()); // -> true
var_dump($validation->getErrorMessage());
// -> "failed" => "Something Error"
```


--- docs/fegg/library/validation/methods/tel.mdx ---

---
sidebar_position: 6
---

# Validation::tel

> Check valid tel character (+ - 0-9)

## Description

```php
public boolean Validation::tel( string $name, mixed $value, [ mixed $code = '' ] )
```

## Arguments

| Name   | Data type | Default | Remarks                     |
| ------ | --------- | ------- | --------------------------- |
| $name  | string    |         | Item label                  |
| $value | mixed     |         | Check field value           |
| $code  | mixed     | ""      | Error code or Error message |

## Example

```php title="Controller"
$validation = $this->getClass('Validation');

// If $value is Tel string
$successName = 'Success Field';
$successVar  = '000-000-0000';
$validation->tel('success', $successVar, array('@tel', $successName));

var_dump($validation->isError()); // -> false
var_dump($validation->getErrorMessage()); // -> null

// If $value is not Tel string
$failedName = 'Failed Field';
$failedVar  = '2000/01/01';
$validation->tel('failed', $failedVar, array('@tel', $failedName));

var_dump($validation->isError()); // -> true
var_dump($validation->getErrorMessage());
// -> "failed" => "<strong>Failed Field</strong> は登録できない形式です"
```


--- docs/fegg/library/validation/methods/time.mdx ---

---
sidebar_position: 7
---

# Validation::time

> Check valid time character (: 0-9)

## Description

```php
public boolean Validation::time( string $name, mixed $value, [ mixed $code = '' ] )
```

## Arguments

| Name   | Data type | Default | Remarks                     |
| ------ | --------- | ------- | --------------------------- |
| $name  | string    |         | Item label                  |
| $value | mixed     |         | Check field value           |
| $code  | mixed     | ""      | Error code or Error message |

## Example

```php title="Controller"
$validation = $this->getClass('Validation');

// If $value is Tel string
$successName = 'Success Field';
$successVar  = '00:00:00';
$validation->time('success', $successVar, array('@time', $successName));

var_dump($validation->isError()); // -> false
var_dump($validation->getErrorMessage()); // -> null

// If $value is not Tel string
$failedName = 'Failed Field';
$failedVar  = '2000/01/01';
$validation->time('failed', $failedVar, array('@time', $failedName));

var_dump($validation->isError()); // -> true
var_dump($validation->getErrorMessage());
// -> "failed" => "<strong>Failed Field</strong> の時間では登録できません"
```


--- docs/fegg/library/validation/methods/url.mdx ---

---
sidebar_position: 8
---

# Validation::url

> Check valid url character

## Description

```php
public boolean Validation::url( string $name, mixed $value, [ mixed $code = '' ] )
```

## Arguments

| Name   | Data type | Default | Remarks                     |
| ------ | --------- | ------- | --------------------------- |
| $name  | string    |         | Item label                  |
| $value | mixed     |         | Check field value           |
| $code  | mixed     | ""      | Error code or Error message |

## Example

```php title="Controller"
$validation = $this->getClass('Validation');

// If $value is URL string
$successName = 'Success Field';
$successVar  = 'http://example.com';
$validation->url('success', $successVar, array('@url', $successName));

var_dump($validation->isError()); // -> false
var_dump($validation->getErrorMessage()); // -> null

// If $value is not URL string
$failedName = 'Failed Field';
$failedVar  = 'normal text';
$validation->url('failed', $failedVar, array('@url', $failedName));

var_dump($validation->isError()); // -> true
var_dump($validation->getErrorMessage());
// -> "failed" => "<strong>Failed Field</strong> は登録できない形式です"
```


--- docs/fegg/library/validation/methods/userid.mdx ---

---
sidebar_position: 10
---

# Validation::userId

> Check allowed character for UserID (- \_ . 0-9)

## Description

```php
public boolean Validation::userId( string $name, mixed $value, [ mixed $code = '' ] )
```

## Arguments

| Name   | Data type | Default | Remarks                     |
| ------ | --------- | ------- | --------------------------- |
| $name  | string    |         | Item label                  |
| $value | mixed     |         | Check field value           |
| $code  | mixed     | ""      | Error code or Error message |

## Example

```php title="Controller"
$validation = $this->getClass('Validation');

// If $value is UserID string
$successName = 'Success Field';
$successVar  = 'user_id123456';
$validation->userId('success', $successVar, array('@userid', $successName));

var_dump($validation->isError()); // -> false
var_dump($validation->getErrorMessage()); // -> null

// If $value is not UserID string
$failedName = 'Failed Field';
$failedVar  = 'not*user_id/123456';
$validation->userId('failed', $failedVar, array('@userid', $failedName));

var_dump($validation->isError()); // -> true
var_dump($validation->getErrorMessage());
// -> "failed" => "<strong>Failed Field</strong> は登録できない形式です"
```


--- docs/fegg/library/validation/methods/zipcode.mdx ---

---
sidebar_position: 9
---

# Validation::zipcode

> Check valid zip code character (for JP only)

## Description

```php
public boolean Validation::zipcode( string $name, mixed $value, [ mixed $code = '' ] )
```

## Arguments

| Name   | Data type | Default | Remarks                     |
| ------ | --------- | ------- | --------------------------- |
| $name  | string    |         | Item label                  |
| $value | mixed     |         | Check field value           |
| $code  | mixed     | ""      | Error code or Error message |

## Example

```php title="Controller"
$validation = $this->getClass('Validation');

// If $value is Zip code string
$successName = 'Success Field';
$successVar  = '100-0001';
$validation->zipcode('success', $successVar, array('@zipcode', $successName));

var_dump($validation->isError()); // -> false
var_dump($validation->getErrorMessage()); // -> null

// If $value is not Zip code string
$failedName = 'Failed Field';
$failedVar  = '000-000-0000';
$validation->zipcode('failed', $failedVar, array('@zipcode', $failedName));

var_dump($validation->isError()); // -> true
var_dump($validation->getErrorMessage());
// -> "failed" => "<strong>Failed Field</strong> は登録できない形式です"
```


--- docs/html/basic/directory.mdx ---

---
sidebar_position: 1
---

# Directory structure

```bash
- htdocs/  # Document root
  └ data/
      ├ scss/ # SCSS directory
      │  ├ foundation/
      │  ├ layout/
      │  └ object/
      │     ├ component/
      │     ├ project/
      │     └ utility/
      ├ css/  # Compiled css (Won't include into Repository)
      ├ js/   # JavaScript directory
      │  ├ vendor/  # Please put libraries e.g. Slider library
      │  └ views/   # Each page's JavaScript files
      └ img/  # Image directory
          ├ common/  # Common images
          └ views/   # Each page's images
              └ index/  # Top page's images
```

> Image/JS file's place should be adjust by URL

## Sample

- http://example.com/
  - **Image** : htdocs/data/img/views/index/
  - **SCSS** : htdocs/data/scss/object/project/\_index.scss
  - **JS** : htdocs/data/js/views/index.js
- http://example.com/sample/
  - Common for `sample`
    - **Image** : htdocs/data/img/views/sample/common/
    - **JS** : htdocs/data/js/views/sample/common.js
  - **Image** : htdocs/data/img/views/sample/index/
  - **SCSS** : htdocs/data/scss/object/project/\_sample.scss
  - **JS** : htdocs/data/js/views/sample/index.js
- http://example.com/sample/test.html
  - Common for `sample`
    - **Image** : htdocs/data/img/views/sample/common/
    - **JS** : htdocs/data/js/views/sample/common.js
  - **Image** : htdocs/data/img/views/sample/test/
  - **SCSS** : htdocs/data/scss/object/project/\_sample-test.scss
  - **JS** : htdocs/data/js/views/sample/test.js
- http://example.com/sample/test/
  - Common for `sample`
    - **Image** : htdocs/data/img/views/sample/common/
    - **JS** : htdocs/data/js/views/sample/common.js
  - Common for `sample/test`
    - **Image** : htdocs/data/img/views/sample/test/common/
    - **JS** : htdocs/data/js/views/sample/test/common.js
  - **Image** : htdocs/data/img/views/sample/test/index/
  - **SCSS** : htdocs/data/scss/object/project/\_sample-test.scss
  - **JS** : htdocs/data/js/views/sample/test/index.js


--- docs/html/basic/important/alt.mdx ---

# Alt attribute of img tag

- **You MUST put `alt` attribute** to every `img` tag
- If the image has text, **you should use the text as the `alt` attribute**
  - If you can't copy the text from the design (e.g. text in an image), **you should inform the designer or the project director** to provide the text
- If the image is purely decorative, **you can use `alt=""`** to indicate that it doesn't convey any information

:::info REASON

- **Accessibility**: Screen readers use the `alt` text to describe the image to visually impaired users.
- **Fallback**: If the image can't load (broken link, slow connection), the `alt` text is displayed instead, so users still understand the content.
- **SEO**: Search engines use the `alt` text to understand the image, which can help your website rank better in search results.

:::

:::warning TIPS

Why you should avoid `alt="image"` or `alt="filename.jpg"`:

- It doesn't provide any useful information to users or search engines
- It's redundant because the `img` tag already indicates that it's an image
- Use descriptive text that conveys the content or function of the image.

Why you should put `alt=""` for decorative images:

- It tells screen readers that the image is purely decorative and doesn't convey any information
- It prevents screen readers from reading out unnecessary information to visually impaired users
  - If the img tag doesn't have alt attribute, screen readers will read out the filename or the URL of the image

:::

## Example

:::danger BAD

You should put `alt` attribute to every `img` tag

```html
<img src="logo.png">
```

:::

:::tip GOOD

You should use the text as the `alt` attribute

```html
<img src="logo.png" alt="Company name">
```

If the image is purely decorative, you can use `alt=""`

```html
<img src="decorative.png" alt="">
```

:::


--- docs/html/basic/important/headline.mdx ---

# Headline tags (hx tags)

- `<h1>` - `<h6>`: Headline tags
- `<h1>`: Most important headline, **you must have every page**, and **only one `<h1>` tag in a page**
- `<h2>`: Subheading, used for sections within your main content
- `<h3>` - `<h6>`: Used for further subdivisions of content
- **You should use `<h1>` to `<h6>` tags in order**

:::info REASON

- **SEO**: Search engines use headline tags to understand the structure and content of your page
- **Accessibility**: Screen readers use headline tags to help visually impaired users navigate your content
- **Readability**: Headline tags help users quickly scan your content and understand the hierarchy of information

:::

## Example

:::danger BAD

You must include `<h1>` tag in every page

```html
<body>
    <section>
        <h2>Subheading</h2>
        <h3>Sub-subheading</h3>
    </section>
</body>
```

You should not skip heading levels

```html
<body>
    <h1>Heading Title</h1>

    <section>
        <h3>Sub-subheading</h3>
    </section>

    <section>
        <h2>Subheading</h2>
        <h3>Sub-subheading</h3>
    </section>
</body>
```

:::

:::tip GOOD

```html
<body>
    <h1>Heading Title</h1>

    <section>
        <h2>Subheading</h2>
        <h3>Sub-subheading</h3>
    </section>

    <section>
        <h2>Subheading</h2>
        <h3>Sub-subheading</h3>
    </section>
</body>
```


--- docs/html/image/export.mdx ---

---
sidebar_position: 2
---

# Exporting rules

We need to think about the loading speed, and the image's quality. so, we need to think what format is the best for each image.

## For supporting high resolution display

- We should export SVG image for Logo, Icon and such as simple path images
  - If those images are not created by Vector images, please let designers to know
  - If there is no Vector images, we should export 2x images of JPG/PNG
- Smaller than 600px in design data, we should export 2x images of JPG/PNG
- If the images are same ratio with PC and SP designs, we should use same image
- If we need to use separated image for PC/SP, we should use `<picture>` tag for it
  - Please see [Embed flexible image](/docs/html/tips/picture)

## Image format

### JPEG <small>(.jpg)</small>

- JPEG format is using a lossy compression method, and not support transparency color.
- If the image has a lot of colors, JPG compression makes it smaller than PNG compression, so you should choose JPG format.
- You should export JPG images with quality **80% (0.8)**, unless you have special reason.

### PNG <small>(.png)</small>

> You should choose PNG format when you need translucent expression.

- PNG format is using lossless compression method, and support transparency color.
- Recently, PNG format supported animation also (APNG), but several browsers are not supporting APNG format yet.

### SVG <small>(.svg)</small>

> You should use SVG format for the graphics made by combination of simple paths (e.g. Logo, Icon)

- SVG format is vector-based graphics unlike other format, so SVG format does NOT lose any quality if they are zoomed or resized
- SVG has gradation functions but it's not supported on some of browser yet
- When SVG file has complex paths data, there is a possibility to effect to browser performance

:::warning

When you export SVG image, be careful about "text" element. If it's included, convert to path before exporting.

:::

### Webp <small>(.webp)</small>

- WebP format is modern format that provides lossless and lossy compression for images on the web.
- Can't export from XD directly, so please convert JPEG/PNG/GIF to WebP through [`convert:webp` task runner](/docs/html/task-runner/scripts/convert-webp).

:::info

We will support WebP format by using `.htaccess` file, so you don't need to implement `<picture>` tag for WebP format.

:::

### Other format

:::warning

We won't use the following format.

:::

#### GIF <small>(.gif)</small>

- GIF format is also using lossless compression method.
- GIF format is able to include only transparent color, not translucent color.
<!-- * We won't use GIF format basically, but if you need GIF animation you can choose this. -->


--- docs/html/image/naming.mdx ---

---
sidebar_position: 1
---

# Naming rules

## Basically rules

- You should be lower case, unless you have special reason.
- You must not use full width character(e.g. Japanese character).
- When you partition filename by words, you should use `"-"`, not "\_".
- You must not use words that associated temporary meanings, because we're using version control tool.
  - e.g. bu, backup, 20160101, Copy of ~, and so on.

## Detail rules

You should name images like below. and, you should not name serial number of whole images.

- For button images
  - `btn-`(place)-(purpose).(extension)
  - _e.g.) btn-section01-inquiry.png_
- For background images
  - `bg-`(place)-(purpose).(extension)
  - _e.g.) bg-contact-helper.png_
- For banner images
  - `ban-`(place)-(purpose).(extension)
  - _e.g.) ban-footer-estate.png_
- For list images
  - `li-`(place)-(purpose).(extension)
  - _e.g.) li-side-backquote.png_
- For headline images
  - `h-`(place)-(purpose).(extension)
  - _e.g.) h-simulation.png_
- For navigation images
  - `nav-`(place)-(purpose).(extension)
  - _e.g.) nav-side-guide.png_
- For icon images
  - `icon-`(place)-(purpose).(extension)
  - _e.g.) icon-footer-mark.png_
- For thumbnail images
  - `thum-`(place)-(purpose).(extension)
  - _e.g.) thum-news-photo01.png_
- For line images
  - `line-`(place)-(purpose).(extension)
  - _e.g.) line-breadcrumbs-separator.png_
- For text images
  - `txt-`(place)-(purpose).(extension)
  - _e.g.) txt-simulation-lead.png_
- For the other images
  - `img-`(place)-(purpose).(extension)
  - _e.g.) img-news-daily.png_

:::note

If each page has the same purpose images, you should make it as the same name.

**e.g.) Background image of main visual** Don't make it "bg-visual-about.jpg", "bg-visual-company.jpg". You should make it "bg-visual.jpg" for all the pages.

:::


--- docs/html/index.mdx ---

---
sidebar_position: 1
---

# HTML Coding Guide

We're creating web site/system with project members, and sometimes we give the project each other during project or for updating. so, we prepared specified coding guide for understanding project structure easier.

Please check each documents, and follow these coding guide.


--- docs/html/methodologies/foundation/index.mdx ---

---
sidebar_position: 1
---

# Foundation

> The Foundation layer defines the defaults. This includes resetting browser stylings with Reset.css and Normalize.css and defining basic styling. The background color and basic typography of the project should be included in this layer.

We're using [Sanitize.css](https://csstools.github.io/sanitize.css/) for initializing styles, and putting into `foundation/_base.scss` about additional initial style. (e.g. we're removing margin of `h*`, bullet of `ul` and so on)

And, you can store the variables and mixins into `Foundation`.

:::tip TIPS

[Typical mixins](/docs/html/methodologies/foundation/mixin)

:::


--- docs/html/methodologies/foundation/mixin.mdx ---

---
sidebar_position: 2
---

# Typical mixins

## mq_sp

Generating @media for SP layout

```scss
@include mq_sp {
    // somthing style for SP layout
}

// @media (max-width: (break point)px)
```

## mq_pc

Generating @media for PC layout

```scss
@include mq_pc {
    // somthing style for PC layout
}

// @media (min-width: (break point) + 1px)
```

## mq_under

Generating @media for specific number and under width

```scss
@include mq_under(number) {
    // somthing style for specific number and under width
}

// @media (min-width: (number) + 1px)
```

## mq_over

Generating @media for specific number and over width

```scss
@include mq_over(number) {
    // somthing style for specific number and over width
}

// @media (max-width: (number)px)
```

## get_vw

Calculating from px to vw

`get_vw(original px, basis width)`

```scss
.c-foo {
    font-size: get_vw(16, 1000);
    // -> (100 / 1000) * 16
    // -> font-size: 1.6vw
}
```


--- docs/html/methodologies/important/child.mdx ---

---
sidebar_position: 2
---

# Don't include other component

**You must NOT include other Components in a Component.** And, **You must NOT use ONLY child components, without parent component.**

:::info REASON

When you make styles in one Component, you can avoid unintentional layout with Components combination.

:::

## Example(1)

:::danger BAD

You must NOT include `.c-bar` into `.c-foo`, even if you want to change the layout of `.c-bar` inside of `.c-foo`.

```html
<div class="c-foo">
    <div class="c-bar"></div>
</div>
```

```scss title="scss/object/component/_foo.scss"
.c-foo {
    // something style
    .c-bar {
        // something style
    }
}
```

:::

:::tip GOOD

You can resolved above issue by preparing a child component of `.c-foo` and assign it together with `.c-bar`.

```html
<div class="c-foo">
    <div class="c-foo__child c-bar"></div>
</div>
```

```scss title="scss/object/component/_foo.scss"
.c-foo {
    // something style
    &__child {
        // something style
    }
}
```

:::

## Example(2)

:::danger BAD

You must NOT use `.c-bar__child` except for parent component `.c-bar`.

```html
<div class="c-foo">
    <div class="c-bar__child"></div>
</div>
```

:::

:::tip GOOD

You should wrap child component `.c-bar__child` by parent component `.c-bar`.

```html
<div class="c-foo">
    <div class="c-bar">
        <div class="c-bar__child"></div>
    </div>
</div>
```

Or

```html
<div class="c-foo c-bar">
    <div class="c-bar__child"></div>
</div>
```

:::


--- docs/html/methodologies/important/media_query.mdx ---

---
sidebar_position: 4
---

# Place of media query

Please write a style of one element for PC/SP collectively.

:::tip TIPS

We separated PC/SP layout the above and the bottom.

:::

:::info REASON

You can find the same style with PC and SP easily when you write it collectively.

:::

## Example

:::danger BAD

Please don't write a different layout style to the bottom of a file.

```scss title="scss/object/component/_foo.scss"
.c-foo {
    // something PC layout style
    &__foo {
        // something PC layout style
    }
}

@include mq_sp {
    .c-foo {
        // something SP layout style
        &__foo {
            // something SP layout style
        }
    }
}
```

:::

:::tip GOOD

Please write media query under the each `.c-foo` and `.c-foo__bar` styles.

```scss title="scss/object/component/_foo.scss"
.c-foo {
    // something PC layout style
    @include mq_sp {
        // something SP layout style
    }

    &__foo {
        // something PC layout style
        @include mq_sp {
            // something SP layout style
        }
    }
}
```

:::


--- docs/html/methodologies/important/modifier.mdx ---

---
sidebar_position: 5
---

import styles from '@site/src/css/docs/html/methodologies/important/modifier.module.scss';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Don't use single class for Modifier

"Modifier" cannot use as one class, it's needed to use with other component. Because, "Modifier" represents a different state or version of "Components".

## Example

:::danger BAD

This example is not good, because modifier is specified as single class.

```scss
.c-component {
    .is-child {
        // something style
    }
}
```

:::

:::tip GOOD

Please change to component

```scss
.c-component {
    &__child {
        // something style
    }
}
```

:::

## Example of that is needed Modifier

For example, if you need to implement like the following buttons.

<div className={styles.sample_buttons}>
    <button className={styles.sample_buttons__button}>Base Button</button>
    <button className={`${styles.sample_buttons__button} ${styles['is-red']}`}>Red Button</button>
    <button className={`${styles.sample_buttons__button} ${styles['is-blue']}`}>Blue Button</button>
</div>

Its differences are just background and border colors. so, please use modifier.

<Tabs>
<TabItem value="scss" label="SCSS" default>

```scss
// `.c-button` is base style Component
.c-button {
    color: #fff;
    appearance: none;
    border: none;
    background: transparent;
    font-family: inherit;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 1px solid #999;
    background: #333;
    border-radius: .25rem;

    // For red button modifier
    &.is-red {
        border: 1px solid #f00;
        background: #c00;
    }

    // For blue button modifier
    &.is-blue {
        border: 1px solid #00f;
        background: #333;
    }
}
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<button class="c-button">Base Button</button>
<button class="c-button is-red">Red Button</button>
<button class="c-button is-blue">Blue Button</button>
```

</TabItem>
</Tabs>


--- docs/html/methodologies/important/name.mdx ---

---
sidebar_position: 1
---

# File name and Class name

- **You must create the file the same name with the prefix** of classes for `Layout`, `Project`, `Component`, `Utility`, except for the files in Foundation.
- **You must not include multiple prefix class names in one file**, except for `Utility` files that have the special reason for preparing different layout for PC/SP (`.u-pc-***`, `.u-sp-***`).

:::info REASON

When you put the same name with a file name and class name, It will avoid the conflict with the class name.

:::

## Example

:::danger BAD

You must not include the following class name in one file, even if similar name.

```scss title="scss/object/component/_foo.scss"
.c-foo {
    // something style
}
.c-foo-bar {
    // something style
}
```

:::

:::tip GOOD

Please separate files like this.

```scss title="scss/object/component/_foo.scss"
.c-foo {
    // something style
}
```

```scss title="scss/object/component/_foo-bar.scss"
.c-foo-bar {
    // something style
}
```

:::


--- docs/html/methodologies/important/selector.mdx ---

---
sidebar_position: 3
---

# Don't use tag selector

You must NOT use tag selector except for the inside of `Foundation`.

:::tip TIPS

We allowed the child selector before, but we changed the rule. Because, child selector has a week point. When you change the tag structures (e.g. when you change `<span>` to `<a>`), child selector won't be available.

:::

:::info REASON

This rule will avoid the unintentional layout.

:::

## Example

:::danger BAD

You must not use tag selector even if it's child selector.

```html
<div class="c-foo">
    <p></p>
</div>
```

```scss title="scss/object/component/_foo.scss"
.c-foo {
    > p {
        // something style
    }
}
```

:::

:::tip GOOD

Prepare as the child component.

```html
<div class="c-foo">
    <p class="c-foo__child"></p>
</div>
```

```scss title="scss/object/component/_foo.scss"
.c-foo {
    &__child {
        // something style
    }
}
```

:::

:::tip GOOD

Please prepare as the child components even if for `<table>` that is needed complex structure.

```html
<table class="c-table">
    <thead class="c-table__thead">
        <tr class="c-table__thead__row">
            <th class="c-table__thead__head"></th>
            <td class="c-table__thead__data"></td>
        </tr>
    </thead>
    <tbody class="c-table__tbody">
        <tr class="c-table__tbody__row">
            <th class="c-table__tbody__head"></th>
            <td class="c-table__tbody__data"></td>
        </tr>
    </tbody>
</table>
```

```scss title="scss/object/component/_table.scss"
.c-table {
    &__thead {
        // something style
        &__row {
            // something style
        }
        &__head {
            // something style
        }
        &__data {
            // something style
        }
    }
    &__tbody {
        // something style
        &__row {
            // something style
        }
        &__head {
            // something style
        }
        &__data {
            // something style
        }
    }
}
```

:::


--- docs/html/methodologies/index.mdx ---

---
sidebar_position: 1
---

# About Methodologies

:::warning WARNING

There are different rules from the old version. Please see the reference migration guide. [Migrations from Old rules](/docs/html/methodologies/migrations)

:::

Basically, We'll follow [FLOCSS](https://github.com/hiloki/flocss/blob/master/README_eng) CSS methodologies, and we have the enhanced rules.

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

- [File name and Class name](/docs/html/methodologies/important/name)
- [Don't include other component](/docs/html/methodologies/important/child)
- [Don't use tag selector](/docs/html/methodologies/important/selector)
- [Place of media query](/docs/html/methodologies/important/media_query)

## Explaining of each layers

- [Foundation](/docs/html/methodologies/foundation)
- [Layout](/docs/html/methodologies/layout)
- Object
  - [Component](/docs/html/methodologies/object/component)
  - [Project](/docs/html/methodologies/object/project)
  - [Utility](/docs/html/methodologies/object/utility)


--- docs/html/methodologies/layout.mdx ---

---
sidebar_position: 5
---

# Layout

> The layout layer defines the styles of large common containers such as the header area, main contents area, sidebar and footer.

FLOCSS allows to use id for `Layout`, but we're using `.l-` prefix, unless you have special reason.

## Example

```html
<header class="l-header">
    <p class="l-header__logo">
        <img class="l-header__logo__image">
    </p>
</header>
```

```scss title="scss/layout/_header.scss"
.l-header {
    &__logo {
        &__image {
        }
    }
}
```


--- docs/html/methodologies/migrations.mdx ---

---
sidebar_position: 2
---

# Migrations from Old rules

## Don't use tag selector

We allowed the child selector, but we changed the rule. Because, child selector has a week point. When you change the tag structures (e.g. when you change `<span>` to `<a>`), child selector won't be available.

Detail: [Don't use tag selector](/docs/html/methodologies/important/selector)

## Removed Views layer

We removed `Views` layer, and we use `Project` as define patterns which are unique layout for each page.

Then, you don't need to import each page's css from HTML.

Detail: [Project](/docs/html/methodologies/object/project)

## Change Utility class names

- The class of displaying PC or SP style
  - `.sp`, `.pc` -> `.u-sp-only`, `.u-pc-only`
- The class of enabling anchor only displaying SP layout
  - `.u-tel-anchor` -> `.u-anchor-tel`
  - Also, you can assign this class to `<a href>` instead `<span data-href>`


--- docs/html/methodologies/object/component.mdx ---

---
sidebar_position: 1
---

# Component

> Defines small scale modules as patterns for re-use.
>
> This includes patterns commonly used such as button in the Bootstrap Component category.
>
> Modules defined in this layer should have minimal styling. For example, try to avoid defining a set width or color.

FLOCSS recommends to separate by small units but we're allowing to make a big Component. Instead, **you must put into `Component` about the reuse layout of the website.**

You must use `.c-` prefix for Component.

About modifire, you should use SMACSS State pattern (`.is-` prefix).

:::tip TIPS

About modifier, please put like `&.is-modifier`, because modifier is represent a different state of component.

Reference : [Don't use single class for Modifier](../important/modifier)

:::

## In case of small Component

```html
<button class="c-button">Button</button>
<button class="c-button is-primary">Primary button</button>
<button class="c-button is-secondary">Secondary button</button>
```

```scss title="scss/object/component/_button.scss"
.c-button {
    // something style

    &.is-primary {
        // something style
    }
    &.is-secondary {
        // something style
    }
}
```

## In case of big Component

```html
<div class="c-contact-banner">
    <h2 class="c-contact-banner__head">Contact</h2>
    <div class="c-contact-banner__inner">
        <div class="c-contact-banner__tel">
            <p class="c-contact-banner__label">Phone</p>
            <a class="tel:0000000000" class="c-contact-banner__tel__anchor u-anchor-tel">000-000-0000</a>
        </div>
        <div class="c-contact-banner__form">
            <p class="c-contact-banner__label">Email</p>
            <a href="/contact/" class="c-contact-banner__form__button c-button">Contact form</a>
        </div>
    </div>
</div>
```

```scss title="scss/object/component/_contact-banner.scss"
.c-contact-banner {
    &__head {
    }
    &__inner {
    }
    &__label {
    }
    &__tel {
        &__anchor {
        }
    }
    &__form {
        &__button {
        }
    }
}
```

:::tip TIPS

This example Component has Utility (`.u-anchor-tel`) and another Component (`.c-button`), but you must NOT overwrite styles of those inside of `.c-contact-banner` Component. Please make Child Component (e.g. `.c-contact-banner__tel__anchor` and `.c-contact-banner__form__button`), then you can define the style of those elements.

Reference : [Don't include other component](/docs/html/methodologies/important/child)

:::


--- docs/html/methodologies/object/project.mdx ---

---
sidebar_position: 2
---

# Project

> ~~Define patterns which are unique to the project which consists of several components and other elements.~~
>
> ~~Elements that make up contents for your project come under this layer, such as an article list, user profile, or image gallery.~~

Original FLOCLSS is defined the above, but it's hard to categorize in case of Web site project, there are many unique styles for each page, so we define `Project` as **Define patterns which are unique layout for each page**.

You must use `.p-` prefix for Project.

## File naming rules

Project is created for each page, so you must prepare the files naming related with URL. You should name **replaced "Slash(/)" to "Hyphen(-)" of URL** except for top page.

About top page file name is "\_index.scss".

- http://example.com/
  - \_index.scss
  - `.p-index`
- http://example.com/about/
  - \_about.scss
  - `.p-about`
- http://example.com/product/
  - \_product.scss
  - `.p-product`
- http://example.com/product/foo/
  - \_product-foo.scss
  - `.p-product-foo`

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

```scss title="scss/object/project/_index.scss"
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


--- docs/html/methodologies/object/utility.mdx ---

---
sidebar_position: 3
---

# Utility

> Utility classes define small and simple styles used to adjust minimal style changes that are difficult to or not appropriate to define in the Object modifiers of Component and Project layer.
>
> Utility classes can prevent Object modifiers in the Component and Project layer from increasing inexhaustibly. In addition, Utility classes can be used to apply margins such as `.mbs { margin-bottom: 10px; }` that the Object itself should not hold.
>
> In addition, helper classes that define the rule sets such as the clearfix technique should also be included in this layer.

You must use `.u-` prefix for Utility.

## Typical Utility classes

:::note

There is a possibility to created unique Utility classes for each web site, so please check this just a reference.

:::

### .u-`{**}`-only

Display only each break points layout.

| Class Name       | \<= 750px | 750px \< and \<= 1060px | 1060px \< |
| ---------------- | :-------: | :---------------------: | :-------: |
| .u-pc-only       |    ❌     |           ❌            |    ✅     |
| .u-under-pc-only |    ✅     |           ✅            |    ❌     |
| .u-tb-only       |    ❌     |           ✅            |    ❌     |
| .u-over-sp-only  |    ❌     |           ✅            |    ✅     |
| .u-sp-only       |    ✅     |           ❌            |    ❌     |

:::info

The above breakpoint is just an example. You can change the breakpoint according to your project.

:::

:::note

Before, we used these styles as `.pc` and `.sp` class names.

:::

### .u-font-sans / .u-font-serif

Display text as Sans-serif or Serif font.

### .u-anchor-tel

Style for tel link. This class is used to prevent to click the tel link on the PC devices.

### And more...

There are many Utility classes that are used in each project. Please check the Utility classes that are used in your project.


--- docs/html/task-runner/index.mdx ---

---
sidebar_position: 1
---

# About Task Runner

We have several task runner by Node.js.

## Prepared Task Runner

- [watch](/docs/html/task-runner/scripts/watch)
  - Building SCSS files when edited the files automatically.
- [build:scss](/docs/html/task-runner/scripts/build-scss)
  - Building SCSS files.
- [optimize:image](/docs/html/task-runner/scripts/optimize-image)
  - Optimizing JPG/PNG images.
- [convert:webp](/docs/html/task-runner/scripts/convert-webp)
  - Converting JPG/PNG images to WebP images.


--- docs/html/task-runner/scripts/build-scss.mdx ---

---
sidebar_position: 2
---

# build:scss

Building SCSS files.

```bash
npm run build:scss
```


--- docs/html/task-runner/scripts/convert-webp.mdx ---

---
sidebar_position: 4
---

# convert:webp

Converting JPG/PNG images to WebP images.

```bash
npm run convert:webp
```

:::info

This command will run automatically when you run `git commit`.

:::


--- docs/html/task-runner/scripts/optimize-image.mdx ---

---
sidebar_position: 3
---

# optimize:image

Optimizing JPG/PNG images.

```bash
npm run optimize:image
```

:::warning

JPG image quality will be decrease when you run this command, so don't run this command multiple times

:::


--- docs/html/task-runner/scripts/watch.mdx ---

---
sidebar_position: 1
---

# watch

Building SCSS files when edited the files automatically.

```bash
npm run watch
```


--- docs/html/tips/accordion.mdx ---

---
sidebar_position: 6
---

import { Codepen } from '@site/src/components/Codepen';

# Accordion

Now, [all the modern browsers are supporting `<details>` and `<summary>` tags.](https://caniuse.com/details) It's able to implement accordion functions and good for accessibility. Please check how to implement to accordion by using those tags.

## No styles

<Codepen hash="NWMNPqv" user="sushat4692" defaultTab="html,result" />

## With styles

<Codepen hash="ExLKaVr" user="sushat4692" defaultTab="css,result" />

## With animations

:::info

This example is using [Web Animation API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API), but of course you can use jQuery animation instead.

:::

<Codepen hash="OJZNPzj" user="sushat4692" defaultTab="css,result" />


--- docs/html/tips/aspect-ratio.mdx ---

---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from '@site/src/css/docs/html/tips/aspect-ratio.module.scss';

# Aspect Ratio

After finished supporting IE11, we can use `aspect-ratio` property.

The following 2 images are square images and cropped 16/4 ratio. it looks same, but it's implemented different approach.

<div className={styles.wrap}>
    <div className={styles.wrap__item}>
        <p className={styles.wrap__label}>Before</p>
        <div className={styles.before}>
            <img src="https://via.placeholder.com/640" className={styles.before__image} />
        </div>
    </div>
    <div className={styles.wrap__item}>
        <p className={styles.wrap__label}>After</p>
        <img src="https://via.placeholder.com/640" className={styles.after} />
    </div>
</div>

<Tabs>
<TabItem value="before" label="Before">

```html
<div class="c-before">
    <img src="(...)" class="c-before__image">
</div>
```

```scss
.c-before {
    position: relative;
    padding-top: 56.25%;
}
.c-before__image {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
}
```

</TabItem>
<TabItem value="after" label="After">

```html
<img src="(...)" class="c-after">
```

```scss
.c-after {
    object-fit: cover;
    width: 100%;
    aspect-ratio: 16 / 9;
}
```

</TabItem>
</Tabs>


--- docs/html/tips/flex.mdx ---

---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from '@site/src/css/docs/html/tips/flex.module.scss';

# Flex box layout

:::info

You can choose [Grid layout](./grid) also instead using Flexbox.

:::

## For 2 columns layout

You can use `justify-content: between;`.

<div className={styles.flexbetween}>
    <div className={styles.flexbetween__item}></div>
    <div className={styles.flexbetween__item}></div>
</div>

## For 3 or more columns layout

But, if you use `justify-content: between;` for 3 or more columns layout. Sometimes layout will be weired like the following:

<div className={styles.flexbetween}>
    <div className={`${styles.flexbetween__item} ${styles['is-3-column']}`}></div>
    <div className={`${styles.flexbetween__item} ${styles['is-3-column']}`}></div>
    <div className={`${styles.flexbetween__item} ${styles['is-3-column']}`}></div>
    <div className={`${styles.flexbetween__item} ${styles['is-3-column']}`}></div>
    <div className={`${styles.flexbetween__item} ${styles['is-3-column']} ${styles['is-blank']}`}>BLANK</div>
    <div className={`${styles.flexbetween__item} ${styles['is-3-column']}`}></div>
</div>

## Solution

You can resolve flex box layout with negative margin for parent box.

<div className={styles.flex}>
    <div className={styles.flex__item}></div>
    <div className={styles.flex__item}></div>
    <div className={styles.flex__item}></div>
    <div className={styles.flex__item}></div>
    <div className={styles.flex__item}></div>
</div>

<Tabs>
<TabItem value="scss" label="SCSS">

```scss
.c-flex {
    // Add negative margin half of gap size to horizontaly
    margin: 0 -15px;

    &__col {
        height: 140px;
        background: #999;

        // Add margin half of gap size to horizontaly
        margin: 0 15px;

        // 100% divided by the number of column size and subtracted by gap size
        width: calc(100% / 3 - 30px);

        &:nth-child(n+4) {
            margin-top: 30px;
        }
    }
}
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="c-flex">
    <div class="c-flex__col"></div>
    <div class="c-flex__col"></div>
    <div class="c-flex__col"></div>
    <div class="c-flex__col"></div>
    <div class="c-flex__col"></div>
</div>
```

</TabItem>
</Tabs>


--- docs/html/tips/grid.mdx ---

---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from '@site/src/css/docs/html/tips/grid.module.scss';

# Grid layout

Grid layout property is a little complicated... but, if you learned it, it must be useful for your work.

## Flexbox example layout

If you use Grid layout instead Flexbox for Flexbox example layout, there is a good point that no need to put spacing/width styles to child element.

You can assign width/spacing property to only parent that has Grid style element.

<div className={styles.grid}>
    <div className={styles.grid__item}></div>
    <div className={styles.grid__item}></div>
    <div className={styles.grid__item}></div>
    <div className={styles.grid__item}></div>
    <div className={styles.grid__item}></div>
</div>

<Tabs>
<TabItem value="scss" label="SCSS">

```scss
.c-grid {
    display: grid;
    gap: 30px;
    grid-template-columns: 1fr 1fr 1fr;

    &__item {
        background: #999;
        height: 140px;
    }
}
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="c-grid">
    <div class="c-grid__item"></div>
    <div class="c-grid__item"></div>
    <div class="c-grid__item"></div>
    <div class="c-grid__item"></div>
    <div class="c-grid__item"></div>
</div>
```

</TabItem>
</Tabs>

## A little complex example

Grid layout is able to set how length width/height fill by a element.

so, for example, if you want to be bigger the first element than other lements, and should be aligned edge, you can use Grid layout.

<div className={`${styles.grid} ${styles['has-first']}`}>
    <div className={styles.grid__item}></div>
    <div className={styles.grid__item}></div>
    <div className={styles.grid__item}></div>
    <div className={styles.grid__item}></div>
    <div className={styles.grid__item}></div>
    <div className={styles.grid__item}></div>
</div>

<Tabs>
<TabItem value="scss" label="SCSS">

```scss
.c-grid {
    display: grid;
    gap: 30px;
    grid-template-columns: 1fr 1fr 1fr;

    &__item {
        background: #999;
        height: 140px;

        &:first-child {
            height: auto;

            grid-row-start: 1;
            grid-row-end: span 2;
            // Same with
            // grid-row: 1 / span 2;

            grid-column-start: 1;
            grid-column-end: span 2;
            // Same with
            // grid-column: 1 / span 2;
        }
    }
}
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="c-grid">
    <div class="c-grid__item"></div>
    <div class="c-grid__item"></div>
    <div class="c-grid__item"></div>
    <div class="c-grid__item"></div>
    <div class="c-grid__item"></div>
    <div class="c-grid__item"></div>
</div>
```

</TabItem>
</Tabs>

## For More Information

Actually, Grid layout has more poweful functions, so if you want to know more informations, [MDN has detail instructions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout).


--- docs/html/tips/has.mdx ---

---
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from '@site/src/css/docs/html/tips/has.module.scss';

# :has selector

Now (May, 2023), [almost the modern browsers are supporting `:has` selector of CSS](https://caniuse.com/css-has). This selector is very useful when you want to style related with children/parent elements.

## Examples

### Change field row state that has error field

If you use `:has` selector, you can change styles that has something specified element. so, for example, you can change the color of field row that has error field.

<div className={styles.form}>
    <div className={styles.form__row}>
        <label className={styles.form__label}>Don't have error</label>
        <input type="text" className={styles.form__field} />
    </div>
    <div className={styles.form__row}>
        <label className={styles.form__label}>Have error *</label>
        <input type="text" className={`${styles.form__field} ${styles['has-error']}`} />
    </div>
</div>

<Tabs>
<TabItem value="scss" label="SCSS">

```scss
.c-form {
    max-width: 320px;

    &__row {
        padding: 1rem;
    }

    &__label {
        display: block;
    }

    &__field {
        border: 1px solid #aaa;
        color: #333;
        background: #fff;

        &.has-error {
            border-color: #f00;
        }
    }

    &__row:has(&__field.has-error) {
        background: #fdd;
    }
    &__row:has(&__field.has-error) &__label {
        color: #f00;
    }
}
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="c-form">
    <div class="c-form__row">
        <label class="c-form__label">Don't have error</label>
        <input type="text" class="c-form__field" />
    </div>
    <div class="c-form__row">
        <label class="c-form__label">Have error *</label>
        <input type="text" class="c-form__field has-error" />
    </div>
</div>
```

</TabItem>
</Tabs>

### Change sibling element's style by hover action

When you want to change the sibling elements styles, it was needed to use JavaScript. But, if you use `:has` selector, it's able to implement by CSS only.

<div className={styles.grid}>
    <div className={styles.grid__item}></div>
    <div className={styles.grid__item}></div>
    <div className={styles.grid__item}></div>
    <div className={styles.grid__item}></div>
    <div className={styles.grid__item}></div>
    <div className={styles.grid__item}></div>
    <div className={styles.grid__item}></div>
    <div className={styles.grid__item}></div>
    <div className={styles.grid__item}></div>
</div>

<Tabs>
<TabItem value="scss" label="SCSS">

```scss
.c-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    flex-grow: 1;
    max-width: 320px;

    &__item {
        background: #ccc;
        aspect-ratio: 1 / 1;
        transition: opacity .3s;
    }

    &:has(&__item:hover) &__item:not(:hover) {
        opacity: .6;
    }
}
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="c-grid">
    <div class="c-grid__item"></div>
    <div class="c-grid__item"></div>
    <div class="c-grid__item"></div>
    <div class="c-grid__item"></div>
    <div class="c-grid__item"></div>
    <div class="c-grid__item"></div>
    <div class="c-grid__item"></div>
    <div class="c-grid__item"></div>
    <div class="c-grid__item"></div>
</div>
```

</TabItem>
</Tabs>


--- docs/html/tips/picture.mdx ---

---
sidebar_position: 1
---

# Embed flexible image

`<picture>` and `<source>` are able to provide flexible image by several conditions.

## Condition by window width

You can add condition by adding `media` attribute to `<source>` tag.

```html
<picture>
    <!-- Under 750px width window -->
    <source media="(max-width: 750px)" srcset="path/to/sp-image.jpg">
    <!-- Default image -->
    <img src="path/to/pc-image.jpg">
</picture>
```

## Condition by image format

You can add condition by adding `type` attribute to `<source>` tag.

```html
<picture>
    <!-- If Browser is supported WebP format -->
    <source type="image/webp" srcset="path/to/pc-image.webp">
    <!-- Default image -->
    <img src="path/to/pc-image.jpg">
</picture>
```

| Format | Attribute  |
| ------ | ---------- |
| WebP   | image/webp |
| JPEG   | image/jpeg |
| PNG    | image/png  |
| GIF    | image/gif  |

## Combinate window width and image format

You can combinate each condition.

```html
<picture>
    <!-- If Browser is supported WebP format and Under 750px width window -->
    <source type="image/webp" media="(max-width: 750px)" srcset="path/to/sp-image.webp">
    <!-- Under 750px width window -->
    <source media="(max-width: 750px)" srcset="path/to/sp-image.jpg">
    <!-- If Browser is supported WebP format -->
    <source type="image/webp" srcset="path/to/pc-image.webp">
    <!-- Default image -->
    <img src="path/to/pc-image.jpg">
</picture>
```


--- docs/javascript/animation.mdx ---

---
sidebar_position: 6
---

# Animation

| Libary name | Last updated |
| --- | :-- |
| [GSAP](https://greensock.com/gsap/) \*1 | ![Last Updated](https://img.shields.io/github/last-commit/greensock/GSAP) |
| [Popmotion](https://popmotion.io/) | ![Last Updated](https://img.shields.io/github/last-commit/popmotion/popmotion) |
| [Tween24.js](https://github.com/a24/tween24js) | ![Last Updated](https://img.shields.io/github/last-commit/a24/tween24js) |

\*1 GSAP is not open source library, [please see license page when you use it](https://greensock.com/licensing/)


--- docs/javascript/index.mdx ---

---
sidebar_position: 1
---

# JavaScript

Introducing recommended JavaScript libraries.

- [Slider / Carousel](/docs/javascript/slider)
- [Modal](/docs/javascript/modal)
- [Parallax](/docs/javascript/parallax)
- [Animation](/docs/javascript/animation)
- [SVG](/docs/javascript/svg)
- [WebGL (Canvas)](/docs/javascript/webgl)
- [Validation](/docs/javascript/validation)
- [Layout](/docs/javascript/layout)


--- docs/javascript/layout.mdx ---

---
sidebar_position: 10
---

# Layout

## Masonry layout

| Library name | Last updated |
| :-- | :-- |
| [InfiniteGrid](https://naver.github.io/egjs-infinitegrid/) | ![Last Updated](https://img.shields.io/github/last-commit/naver/egjs-infinitegrid) |


--- docs/javascript/modal.mdx ---

---
sidebar_position: 3
---

# Modal

:::info

We didn't find best modal library yet...

:::

| Libary name | Image | Video | iframe | Design | Gallery | Zoom | Swipe | Last updated |
| --- | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-- |
| [PhotoSwipe](https://photoswipe.com/) | ✅ | 🚫 | 🚫 | ✅ | ✅ | ✅ | ✅ | ![Last Updated](https://img.shields.io/github/last-commit/dimsemenov/photoswipe) |
| [SmartPhoto](https://appleple.github.io/SmartPhoto/) | ✅ | 🚫 | 🚫 | ✅ | ✅ | ✅ | ✅ | ![Last Updated](https://img.shields.io/github/last-commit/appleple/SmartPhoto) |
| [Modal Video](https://github.com/appleple/modal-video) | 🚫 | ✅ | 🚫 | ✅ | 🚫 | 🚫 | 🚫 | ![Last Updated](https://img.shields.io/github/last-commit/appleple/modal-video) |
| [Micromodal.js](https://micromodal.vercel.app/) | \*1 | \*1 | \*1 | 🚫 | 🚫 | 🚫 | 🚫 | ![Last Updated](https://img.shields.io/github/last-commit/Ghosh/micromodal) |
| [Modaal](https://www.humaan.com/modaal/) | ✅ | ✅ | ✅ | ✅ | ✅ | 🚫 | 🚫 | ![Last Updated](https://img.shields.io/github/last-commit/humaan/Modaal) |
| [Lity](https://sorgalla.com/lity/) | ✅ | ✅ | ✅ | ✅ | 🚫 | 🚫 | 🚫 | ![Last Updated](https://img.shields.io/github/last-commit/jsor/lity) |

\*1: Micromodal is able show custom HTML contents, so you can display any contents as modal


--- docs/javascript/parallax.mdx ---

---
sidebar_position: 4
---

# Parallax

| Libary name | Last updated |
| --- | :-- |
| [Rellax](https://dixonandmoe.com/rellax/) | ![Last Updated](https://img.shields.io/github/last-commit/dixonandmoe/rellax) |
| [Simple Parallax](https://simpleparallax.com/) | ![Last Updated](https://img.shields.io/github/last-commit/geosigno/simpleParallax.js) |
| [skrollr](https://prinzhorn.github.io/skrollr/) | ![Last Updated](https://img.shields.io/github/last-commit/prinzhorn/skrollr) |


--- docs/javascript/scroll.mdx ---

---
sidebar_position: 5
---

# Scroll Action

:::warning

[AOS](https://michalsnik.github.io/aos/) has some bugs and not maintained for a long time, so please don't use that library

:::

| Libary name | Last updated |
| --- | :-- |
| [ScrollFire.js](https://github.com/lionheart-co-jp/ScrollFire.js) \*1 | ![Last Updated](https://img.shields.io/github/last-commit/lionheart-co-jp/ScrollFire.js) |

\*1 Satoshi is developing `ScrollFire.js` library. if you have problem/question for that library, please let him know.


--- docs/javascript/slider.mdx ---

---
sidebar_position: 2
---

# Slider / Carousel

:::info

For Slider/Carousel libraries, we can recommend "Splide" to use.

:::

| Libary name | Last updated |
| --- | :-- |
| [Splide](https://splidejs.com/) | ![Last Updated](https://img.shields.io/github/last-commit/Splidejs/splide) |
| [Swiper](https://swiperjs.com/) | ![Last Updated](https://img.shields.io/github/last-commit/nolimits4web/swiper) |

## Deprecated libraries

| Libary name | Last updated |
| --- | :-- |
| [Slick](https://kenwheeler.github.io/slick/) | ![Last Updated](https://img.shields.io/github/last-commit/kenwheeler/slick) |


--- docs/javascript/svg.mdx ---

---
sidebar_position: 7
---

# SVG

| Libary name | Remarks | Last updated |
| --- | :-- | :-- |
| [vivus.js](https://maxwellito.github.io/vivus/) | Line drawing animation | ![Last Updated](https://img.shields.io/github/last-commit/maxwellito/vivus) |
| [SVG.js](https://svgjs.dev/) | Manipulating and animating SVG | ![Last Updated](https://img.shields.io/github/last-commit/svgdotjs/svg.js) |
| [Snap.svg](http://snapsvg.io/) | Animating SVG | ![Last Updated](https://img.shields.io/github/last-commit/adobe-webplatform/snap.svg) |
| [BonsaiJS](https://bonsaijs.org/) |  | ![Last Updated](https://img.shields.io/github/last-commit/uxebu/bonsai) |


--- docs/javascript/validation.mdx ---

---
sidebar_position: 9
---

# Validation

| Library name | Last updated |
| :-- | :-- |
| [inputfollow.js](https://github.com/sushat4692/inputfollow.js) \*1 | ![Last Updated](https://img.shields.io/github/last-commit/sushat4692/inputfollow.js) |
| [Parsley](https://parsleyjs.org/) | ![Last Updated](https://img.shields.io/github/last-commit/guillaumepotier/Parsley.js) |

\*1 Satoshi is developing `inputfollow.js` library. if you have problem/question for that library, please let him know.


--- docs/javascript/webgl.mdx ---

---
sidebar_position: 8
---

# WebGL (Canvas)

| Libary name | 2D | 3D | Last updated |
| --- | :-: | :-: | :-- |
| [Three.js](https://threejs.org/) | 🚫 | ✅ | ![Last Updated](https://img.shields.io/github/last-commit/mrdoob/three.js) |
| [PixiJS](https://pixijs.com/) | ✅ | 🚫 | ![Last Updated](https://img.shields.io/github/last-commit/pixijs/pixijs) |
| [Babylon.js](https://www.babylonjs.com/) | 🚫 | ✅ | ![Last Updated](https://img.shields.io/github/last-commit/BabylonJS/Babylon.js) |


--- docs/wordpress/functions.mdx ---

---
sidebar_position: 5
---

# Additional functions

## is_mobile

```php
is_mobile(): boolean
```

Checking the client is mobile or others. This function is checking `mobile or not`, so Tablet will be returned `false`.

## is_new

```php
is_new(number|WP_Post $post = null, number $gap = 2): boolean
```

Checking the specified post is published within `$gap` days. If `$post` is null, the specified post is assigned current post in the loop.

## get_page_slug

```php
get_page_slug(number|WP_Post $page_id = null): string
```

Returning the specified post slug and parent post slug separated by hyphen `-`. e.g. if the page has `child` slug, and it has the parent page that has `parent` slug, this function returns `parent-child`.

## remove_line_break

```php
remove_line_break(string $text): string
```

Removing line breaks and spacing each rows.

## loadScript

```php
loadScript(string $name, string $path, string[] $dependencies = [], string $version = null, boolean $isFoot = false): void
```

This function is wrapper of [wp_enqueue_script](https://developer.wordpress.org/reference/functions/wp_enqueue_script/) that is WordPress standard function. `loadScript` will be prefixed template path to `$path` if it's not absolute path, and appended `$version` to `$path`.  
If `$version` is empty, it's assigned from the value specified on `config.php`.

## loadStyle

```php
loadStyle(string $name, string $path, string[] $dependencies = [], string $version = null): void
```

This function is wrapper of [wp_enqueue_style](https://developer.wordpress.org/reference/functions/wp_enqueue_style/) that is WordPress standard function. `loadStyle` will be prefixed template path to `$path` if it's not absolute path, and appended `$version` to `$path`.  
If `$version` is empty, it's assigned from the value specified on `config.php`.

## get_asset_url

```php
get_asset_url(string $path, string $version = null): string
```

Returns url that is prefixed template path and appended `$version` to `$path`.  
If `$version` is empty, it's assigned from the value specified on `config.php`.

## the_asset_url

```php
the_asset_url(string $path, string $version = null): string
```

Displaying the result of `get_asset_url`.


--- docs/wordpress/howto/basic-post.mdx ---

---
sidebar_position: 4
---

# Basic post type

When you use WordPress Basic Post type, please update `archive.php` and `single.php` template file.

## How to change archive page url

LH WordPress template is able to change basic post type archive url. When you need to change basic post type archive url, please check `config.php`.

After changin the following function's value,

```php
<?php

/**
 * 投稿アーカイブのスラッグ
 * Slug of post archive URL
 */
function get_post_slug() {
    return 'news';
}
```

you need to display `settings` -> `permalinks` page of WordPress admin page. (When you show this page, WordPress apply permalink setting from template also)

## How to change detail page url

You can change basic post type detail page url by `settings` -> `permalinks` page of WordPress admin page.


--- docs/wordpress/howto/component.mdx ---

---
sidebar_position: 2
---

# Component

If there is the same contents element, you can create component template file `templates/c-{component name}.php`.

When you create component template file, please put the same file name with the component class name.

```php
// templates/c-component.php
<?php
<div class="c-component">
    // Something
</div>
```


--- docs/wordpress/howto/contact-form.mdx ---

---
sidebar_position: 9
---

# Contact Form

When we need to implement a contact form by using WordPress, mostly we're using either one of the following 2 plugins. Please check detail information at those plugin page.

- [MW WP Form](/docs/wordpress/plugins/contact-form/mw-wp-form) : Basically, please use this contact form plugin
- [Contact Form 7](/docs/wordpress/plugins/contact-form/contact-form-7)


--- docs/wordpress/howto/custom-block.mdx ---

---
sidebar_position: 8
---

# Custom Block

Sometimes we need to implement Custom layout into WYSIWYG part, and we can implement these requirements by using Custom Block function of WordPress.

Basically, we're using the following plugin to implement Custom Block, so please check plugin page.

- [Lazy Blocks](/docs/wordpress/plugins/custom-block/lazy-blocks)

## Template structure

If you use Lazy Blocks plugin, please match block slug and HTML classes, and SCSS files.

- Block Template file
  - blocks/lazyblock-`{slug}`/block.php
- Block Template HTML classes
  - .c-block-`{slug}`
- Block Template scss file
  - data/scss/object/component/\_block-`{slug}`.scss

### Example

If you prepare `foo` custom block by using LazyBlocks.

```php
// blocks/lazyblock-foo/block.php
<div class="c-block-foo">
    <div class="c-block-foo__child">
        <?php /** Something actions */ ?>
    </div>
</div>
```

```scss
// data/scss/object/component/_block-foo.scss
.c-block-foo {
    &__child {
        // Something styles
    }
}
```


--- docs/wordpress/howto/custom-field.mdx ---

---
sidebar_position: 7
---

# Custom Field

WordPress is prepared only one WYSIWYG field, but mostly our WordPress project is needed to prepare other input fields for easier to updating the website by using WordPress. so, we need to prepare additional input fields by adding Custom Field.

Mostly, we're using plugins for managing custom field, so please check the following plugin pages.

- [Smart Custom Fields](/docs/wordpress/plugins/custom-field/smart-custom-fields)
- [Advanced Custom Fields](/docs/wordpress/plugins/custom-field/advanced-custom-fields)


--- docs/wordpress/howto/custom-post.mdx ---

---
sidebar_position: 5
---

# Custom Post Type / Taxonomy

In many cases, our website project is not only news/blog function. so, we need to prepare another management page by adding Custom Post Type or Custom Taxonomy.

Mostly, we're using plugins for managing custom post type, so please check the following plugins pages.

- [Custom Post Type UI](/docs/wordpress/plugins/custom-post/custom-post-type-ui)
- [Custom Post Type Permalinks](/docs/wordpress/plugins/custom-post/custom-post-type-permalinks)

## Template file structure

WordPress provides template naming rules for Custom Post Type and Custom Taxonomy. Basically, we're using the following template naming rule:

- Custom Post Type
  - `archive-{slug}.php` : Archive page
  - `single-{slug}.php` : Detail page
- Custom Taxonomy
  - `taxonomy-{taxonomy}.php` : Taxonomy archive page

:::info

If you need to implement same layout to custom post type archive and cust omtaxonomy archive, please prepare another template file and import from the above template file.

e.g.) Prepared `foo` post type and `bar` taxonomy, and same layout for these pages

```php
// archive-foo.php and taxonomy-bar.php
<?php
get_template_file('templates/foo/archive');
```

```php
// templates/foo/archive.php
<?php
get_header();

while(have_posts()): the_post();
  // will be shown `foo` post type list,
  // or filtered `bar` taxonomy automatically
endwhile;
```

:::


--- docs/wordpress/howto/loading-assets.mdx ---

---
sidebar_position: 3
---

# Loading assets in a theme

LH WordPress template provides a way to load assets such as CSS, JavaScript, and Images files in a theme.

## CSS

[`loadStyle` function](../functions#loadstyle) is used to load CSS files in a theme. This function must call before `getHeader` function.

```php
<?php
// load style.css
loadStyle('style', 'data/css/style.css');

getHeader();
```

## JavaScript

[`loadScript` function](../functions#loadscript) is used to load JavaScript files in a theme. This function must call before `getHeader` function.

```php
<?php
// load script.js after jQuery loaded
loadScript('script', 'data/js/script.js', array('jquery'));

getHeader();
```

## Images

[`get_asset_url` function](../functions#get_asset_url) or [`the_asset_url` function](../functions#the_asset_url) are used to get the URL of the asset files in a theme.

```php
<?php
// get the URL of the image file
$image_url = get_asset_url('data/images/image.jpg');
?>

<!-- display the URL of the image file -->
<img src="<?php the_asset_url('data/images/image.jpg'); ?>" alt="">
```


--- docs/wordpress/howto/page.mdx ---

---
sidebar_position: 1
---

# Creating Page

When you create a static page, please create `page` by WordPress admin page, and prepare page-`{slug}`.php template file.

## Sub page template

LH WordPress Template has function to support nested page template like the following.

```
http://example.com/parent/child/
 -> page-parent__child.php
```

so, if you need to create sub pages, please follow the above template file name.

:::warning

In case of the above url, `page-child.php` is also valid. but, please use the file name that is included parent slug name e.g. `page-parent__child.php`, because easier to find the page template from the url structure, and if you need to use same slug name to different parent, it's able to separate template file.

:::

## CSS Methodologies

Even wordpress template, please follow [CSS Methodologies](/docs/html/methodologies). so, page template and scss file relation is like the below.

```
http://example.com/foo/
 -> page-foo.php
 -> data/scss/object/project/_foo.scss
 -> `.p-foo` class
```

```
http://example.com/parent/child/
 -> page-parent__child.php
 -> data/scss/object/project/_parent-child.scss
 -> `.p-parent-child` class
```

:::info

Please check CSS Methodologies [Project file naming rules](/docs/html/methodologies/object/project#file-naming-rules) also.

:::


--- docs/wordpress/howto/uploaded-media.mdx ---

---
sidebar_position: 10
---

# Uploaded media

WordPress has the function that is able to trim/resize images that you upload, but it's needed to update setting on theme files to use this function. so, when you need to display thumbnail images for archive pages or something sliders, please check the following instruction to avoid downloading big resouces for viewer.

## Settings

For enable to trim/resize specific size, you need to add [add_image_size](https://developer.wordpress.org/reference/functions/add_image_size/) function into the theme.

On our theme template, you can find the place that you should put `add_image_size` function in `include/init.php`.

```php
<?php

add_action('init', function() {
    // タイトルの有効化
    // Enable Title
    add_theme_support('title-tag');

    // アイキャッチ画像の有効化
    // Enable Post Thumbnail
    add_theme_support('post-thumbnails');

    // アイキャッチ画像のサイズ追加
    // Adding image size for post thumbnail
    add_image_size('name', 100, 100, true);

    // Pタグを自動挿入させない
    // Disable automatically adding <p> tags
    remove_filter('the_excerpt', 'wpautop');
    remove_filter('the_content', 'wpautop');
});
```

`add_image_size` parameter is like this:

```php
add_image_size(
    'foo_image_size', // Image size identifier.
    100, // Image width
    100, // Image height
    true // Image cropping behavior.
         // If false, the image will be scaled (default),
         // If true, image will be cropped to the specified dimensions
         // using center positions.
);
```

## In Template

You can display thumbnail image by the specified size by the following function.

```php
<?php
    if (has_post_thumbnail()):
        the_post_thumbnail('foo_image_size');
    else:
?>
        <img src="<?php the_asset_url('data/path/to/noimage.jpg') ?>">
<?php
    endif;
?>
```

and, if you need to add specified class to thumbnaiil image `<img>` tag, you can put attribute parameter to second argument.

```php
<?php
    if (has_post_thumbnail()):
        the_post_thumbnail('foo_image_size', ['class' => 'c-image']);
    else:
?>
        <img src="<?php the_asset_url('data/path/to/noimage.jpg') ?>" class="c-image">
<?php
    endif;
?>
```


--- docs/wordpress/index.mdx ---

---
sidebar_position: 1
---

# WordPress Coding Guide

# WordPress Coding Guide

Basically, we're developing Website by using WordPress or [Fegg Framework](/docs/fegg). This document is written our WordPress coding rules.

## Template

This template has some of custom function for our coding rule.

:::info

[LH WordPress Template](https://github.com/lionheart-group/wordpress-template)

:::


--- docs/wordpress/plugins/contact-form/contact-form-7.mdx ---

# Contact Form 7

:::warning

Please don't use this plugin, if you need to implement confirmation page

:::

:::danger Under construction

Please wait for the further notice

:::


--- docs/wordpress/plugins/contact-form/mw-wp-form.mdx ---

# MW WP Form

:::danger Under construction

Please wait for the further notice

:::


--- docs/wordpress/plugins/custom-block/lazy-blocks.mdx ---

# Lazy Blocks

:::danger Under construction

Please wait for the further notice

:::


--- docs/wordpress/plugins/custom-field/advanced-custom-fields.mdx ---

# Advanced Custom Fields

:::danger Under construction

Please wait for the further notice

:::


--- docs/wordpress/plugins/custom-field/smart-custom-fields.mdx ---

# Smart Custom Fields

:::danger Under construction

Please wait for the further notice

:::


--- docs/wordpress/plugins/custom-post/custom-post-type-permalinks.mdx ---

# Custom Post Type Permalinks

:::danger Under construction

Please wait for the further notice

:::


--- docs/wordpress/plugins/custom-post/custom-post-type-ui.mdx ---

# Custom Post Type UI

:::danger Under construction

Please wait for the further notice

:::


--- docs/wordpress/plugins/general/rank-math-seo.mdx ---

# Rank Math SEO

:::danger Under construction

Please wait for the further notice

:::


--- docs/wordpress/structure.mdx ---

---
sidebar_position: 2
---

# Template Structure

```bash
- Template/  # Template directory root
  ├ data/  # Assets files, Please check HTML coding rule
  ├ include/
  │   ├ acf.php  # Advanced Custom Fields plugin extension
  │   ├ admin.php  # Admin page extension
  │   ├ cf7.php  # Contact Form 7 plugin extension
  │   ├ functions.php  # Additional template method
  │   ├ init.php  # Template initialize
  │   ├ pagenavi.php  # WP-PageNavi plugin extension
  │   ├ query.php  # pre_get_posts hook
  │   ├ rewrite.php  # Arrange WordPress permalink setting
  │   ├ scf.php  # Smart Custom Fields plugin extension
  │   └ template.php  # WordPress template extension
  ├ templates/  # Re-usable template files
  ├ 404.php  # Not found page template
  ├ archive.php  # Basic post type archive page template
  ├ config.php  # Configuration file of the template
  ├ footer.php  # Footer template
  ├ functions.php  # Will include /include/ directory files
  ├ header.php  # Header template
  ├ home.php  # Top page template
  ├ page-sample.php  # Sample file for static page
  ├ page-sample__child.php  # Sample file for static page
  ├ page.php  # Sample file for static page (by updating Admin page)
  ├ single.php  # Basic post type detail page template
  └ style.css  # No need to update
```
