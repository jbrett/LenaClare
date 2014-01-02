require.config({
    baseUrl: '/js',
    paths: {
        'jquery': 'jquery.min',
        'google_jquery': 'la_boutique/jquery.google.min',
        'custom': 'la_boutique/jquery-ui-1.10.2.custom',
        'easing': 'la_boutique/jquery.easing-1.3.min',
        'bootstrap': 'bootstrap',
        'isotope': 'la_boutique/jquery.isotope.min',
        'flexslider': 'la_boutique/jquery.flexslider',
        'elevatezoom': 'la_boutique/jquery.elevatezoom',
        'sharrre': 'la_boutique/jquery.sharrre-1.3.4',
        'gmap3': 'la_boutique/jquery.gmap3',
        'tweet': 'la_boutique/jquery.tweet',
        'imagesloaded': 'la_boutique/imagesloaded',
        'megamenu_plugins': 'la_boutique/megamenu_plugins',
        'megamenu': 'la_boutique/megamenu',
        'cookie': 'la_boutique/jquery.cookie',
        'core': 'lena_clare/view/core',
        'app': 'lena_clare/app'
    },
    
    shim: {
        'jquery': {
            exports: '$'
        },
        'custom': {
            deps: ['jquery'],
            exports: 'jQuery.ui'
        },
        'easing': {
            deps: ['jquery'],
            exports: 'jQuery.easing'
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'isotope': {
            deps: ['jquery'],
            exports: 'jQuery.fn.isotope'
        },
        'flexslider': {
            deps: ['jquery'],
            exports: 'jQuery.fn.flexslider'
        },
        'elevatezoom': {
            deps: ['jquery'],
            exports: 'jQuery.fn.elevateZoom'
        },
        'sharrre': {
            deps: ['jquery'],
            exports: 'jQuery.fn.sharrre'
        },
        'gmap3': {
            deps: ['jquery'],
            exports: 'jQuery.fn.gmap3'
        },
        'tweet': {
            deps: ['jquery'],
            exports: 'jQuery.fn.tweet'
        },
        'megamenu': {
            deps: ['jquery', 'megamenu_plugins'],
            exports: 'jQuery.fn.megaMenuCompleteSet'
        },
        'megamenu_plugins': {
            deps: ['jquery']
        },
        'cookie': {
            deps: ['jquery'],
            exports: 'jQuery.cookie'
        },
        'core': {
            deps: ['megamenu', 'gmap3', 'custom', 'isotope', 'bootstrap', 'sharrre', 'elevatezoom', 'tweet', 'cookie', 'flexslider']
        }
    }
});
require(['app']);