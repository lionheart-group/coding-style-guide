<?php

namespace LionHeart\Controller;

use LionHeart\Base\Controller as BaseController;
use LionHeart\Base\Router;
use LionHeart\Base\View;

class PageController extends BaseController
{
    /** @param View $view */
    protected $view;
    /** @param Router $router */
    protected $router;

    public function __construct(View $view, Router $router)
    {
        $this->view = $view;
        $this->router = $router;
    }

    public function index()
    {
        $match = $this->router->match();
        $path = $match['params']['path'];

        $templates = [];
        if (substr($path, -1) === '/') {
            $templates[] = $path . 'index.twig';
        } else {
            $templates[] = $path . '.twig';
            $templates[] = $path . '/index.twig';
        }

        foreach ($templates as $template) {
            if ($this->view->exists($template)) {
                return $this->view->render($template);
            }
        }

        // Not found
        $this->view->render('404.twig');
    }
}
