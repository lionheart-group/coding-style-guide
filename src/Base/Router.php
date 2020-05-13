<?php

namespace LionHeart\Base;

use DI\Container as DIContainer;
use AltoRouter;

class Router
{
    /** @param DIContainer $container */
    protected $container;

    /** @param AltoRouter $router */
    protected $router;

    public function __construct(DIContainer $container)
    {
        $this->container = $container;
        $this->router = $container->get('AltoRouter');
        $this->router->addRoutes(require_once LH_CMS_SRC_DIRECTORY . '/config/route.php');
    }

    public function match()
    {
        return $this->router->match();
    }
}
