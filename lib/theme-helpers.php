<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

if (!class_exists('Theme_Helpers')) :

    class Theme_Helpers
    {
        const WP_API_ROUTE = 'wp/v2';
        const THEME_NAMESPACE = 'react-redux-theme/v1';
        const TEXT_DOMAIN = 'react_redux_theme';

        public static function post_count()
        {
            global $wp_query;
            if (isset($wp_query->posts)) {
                return count($wp_query->posts);
            }

            return false;
        }

        public static function get_class($many, $single, $echo = true)
        {
            $class = (1 < self::post_count()) ? $many : $single;

            if ($echo) {
                echo $class;
            } else {
                return $class;
            }
        }

        /**
         * Get WP API namespace.
         *
         * @return string
         * @since 1.2.0
         */
        public static function get_api_route()
        {
            return self::WP_API_ROUTE;
        }


        /**
         * Get WP API Menus namespace.
         *
         * @return string
         * @since 1.2.1
         */
        public static function get_theme_namespace()
        {
            return self::THEME_NAMESPACE;
        }

        /**
         * get theme i18n text_domain
         * @return string
         */
        public static function get_textdomain()
        {
            return self::TEXT_DOMAIN;
        }

    }

endif;