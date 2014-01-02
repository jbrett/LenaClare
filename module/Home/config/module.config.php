<?php

return array(
    'controllers' => array(
        'invokables' => array(
            'Home\Controller\Index' => 'Home\Controller\IndexController'
        )
    ),
    'router' => array(
        'routes' => array(
            'home' => array(
                'type' => 'Zend\Mvc\Router\Http\Literal',
                'options' => array(
                    'route' => '/',
                    'defaults' => array(
                        'controller' => 'Home\Controller\Index',
                        'action' => 'index'
                    )
                )
            )
        )
    ),
    'view_manager' => array(
        'template_path_stack' => array(
            'home' => dirname(dirname(__FILE__)) . '/view'
        )
    )
);