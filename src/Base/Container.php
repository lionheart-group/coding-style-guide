<?php

namespace LionHeart\Base;

use DI\Container as DIContainer;

class Container
{
    /** @param DIContainer $container */
    protected $container;

    public function setContainer(DIContainer $container)
    {
        $this->container = $container;
    }

    public function get($key)
    {
        return $this->container->get($key);
    }
}