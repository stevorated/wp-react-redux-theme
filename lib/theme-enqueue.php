<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

if (!class_exists('Theme_Enqueue')) :

    class Theme_Enqueue
    {
        private $version = '20171210';

        function __construct()
        {
            // use this for developments
//			$this->version = date('U');
        }

        function init()
        {
            add_action('wp_enqueue_scripts', [$this, 'theme'], 20);
        }

        function theme()
        {
            error_log('ya alla');
            wp_enqueue_style('bootstrap4-css', get_template_directory_uri() . '/bootstrap4.min.css', [], '4b');
            wp_enqueue_script('ReactTheme-js', get_template_directory_uri() . '/build/bundle.js', ['jquery', 'wp-i18n'], $this->version, true);
            wp_localize_script('ReactTheme-js', 'RRT_API', array(
                'root' => esc_url_raw(rest_url()),
                'nonce' => wp_create_nonce('wp_rest'),
                'siteName' => get_bloginfo('name'),
                'baseUrl' => get_bloginfo('url'),
                'siteDescription' => get_bloginfo('description'),
                'categories' => $this->get_categories_with_links(),
                'current_user' => wp_get_current_user(),
                'pluginNamespace' => Menus_Endpoint::get_plugin_namespace(),
                'apiRoute' => Menus_Endpoint::get_api_namespace(),
            ));
            wp_set_script_translations('ReactTheme-js', 'stevorated-rrt-theme');
            wp_enqueue_style('theme_stylesheet', get_template_directory_uri() . '/build/bundle.css', ['bootstrap4-css'], $this->version);
        }

        function get_categories_with_links()
        {
            $categories = get_categories(['hide_empty' => 0]);
            foreach ($categories as $i => $category) {
                $categories[$i]->link = get_category_link($category->term_id);
            }

            return $categories;
        }
    }

endif;