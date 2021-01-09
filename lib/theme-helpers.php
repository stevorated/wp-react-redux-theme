<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

if (!class_exists('Theme_Helpers')) :

    class Theme_Helpers
    {
        const WP_API_NAMESPACE = 'wp/v2';
        const PLUGIN_NAMESPACE = 'react-theme/v1';

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
        public static function get_api_namespace()
        {
            return self::WP_API_NAMESPACE;
        }


        /**
         * Get WP API Menus namespace.
         *
         * @return string
         * @since 1.2.1
         */
        public static function get_plugin_namespace()
        {
            return self::PLUGIN_NAMESPACE;
        }


    }

endif;