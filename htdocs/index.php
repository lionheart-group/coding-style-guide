<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);

// Load autoload
require_once dirname(__DIR__).'/vendor/autoload.php';

// アプリケーションが設置されている位置
if (preg_match('/(.*)index\.php/', $_SERVER['SCRIPT_NAME'], $matche)) {
    if ($matche[1] == '/') {
        define('LH_CMS_REWRITE_BASE', '');
    } else {
        define('LH_CMS_REWRITE_BASE', rtrim($matche[1], '/'));
    }
} else {
    define('LH_CMS_REWRITE_BASE', '');
}

// Src Directory
define('LH_CMS_BASE_DIRECTORY', dirname(__DIR__));
define('LH_CMS_SRC_DIRECTORY', LH_CMS_BASE_DIRECTORY.'/src');

$builder = new DI\ContainerBuilder();
$builder->useAutowiring(true);
$builder->useAnnotations(false);

// Set Definitions
$builder->addDefinitions(LH_CMS_SRC_DIRECTORY . '/config/database.php');
$builder->addDefinitions(LH_CMS_SRC_DIRECTORY . '/config/view.php');
$builder->addDefinitions(LH_CMS_SRC_DIRECTORY . '/config/site.php');

$container = $builder->build();
$container->get('LionHeart\Base\Container')->setContainer($container);

// Routing
$router = $container->get('LionHeart\Base\Router');
$match = $router->match();

if (!$match) {
    throw new \Exception('Not match');
}

// Get Controller
list($controllerClass, $action) = array_pad(explode('#', $match['target'], 2), 2, null);

if (!$action) {
    $action = 'index';
}

$controllerClass = '\LionHeart\Controller\\' . $controllerClass;
$controller = $container->get($controllerClass);

if (is_callable(array($controller, $action))) {
    call_user_func_array(array($controller, $action), $match['params']);
}
