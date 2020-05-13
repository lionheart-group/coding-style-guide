<?php

namespace LionHeart\Controller;

use LionHeart\Base\Controller as BaseController;

class IndexController extends BaseController
{
    public function index()
    {
        $this->view->render('index.twig');
    }
}