<?php

namespace Home;

/**
 * Class Module
 *
 * @package Home
 */
class Module
{
    /**
     * getAutoloaderConfig()
     *
     * @return array
     */
    public function getAutoloaderConfig()
    {
        return array(
            'Zend\Loader\StandardAutoloader' => array(
                'namespaces' => array(
                    __NAMESPACE__ => __DIR__ . '/src/' . __NAMESPACE__
                )
            )
        );
    }

    /**
     * getConfig()
     * 
     * @return mixed
     */
    public function getConfig()
    {
        return include __DIR__ . '/config/module.config.php';
    }
}
