<?php

namespace LionHeart\Base;

use Twig\Loader\FilesystemLoader;
use Twig\Environment;

class View
{
    /** @param FilesystemLoader $loader */
    protected $loader;
    /** @param Environment $twig */
    protected $twig;
    /** @param Container $container */
    protected $container;

    public function __construct(Container $container)
    {
        $this->container = $container;
        $view = $container->get('view');

        $this->loader = new FilesystemLoader($view['template_dir']);
        $this->twig = new Environment($this->loader, [
            'cache' => $view['cache_dir'],
            'auto_reload' => $view['auto_reload'],
        ]);

        $site = $container->get('site');
        $this->twig->addGlobal('site', $site);
        $this->twig->addGlobal('base', LH_CMS_REWRITE_BASE);
    }

    public function getTemplate($template, $params)
    {
        return $this->twig->render($template, $params);
    }

    public function render($template, $params = [])
    {
        echo $this->getTemplate($template, $params);
    }

    public function exists($template)
    {
        try {
            $this->twig->load($template);
            return true;
        } catch (\Exception $e) {
            return false;
        }
    }
}
