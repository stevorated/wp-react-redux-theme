<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
    <script>(function (H) {
            H.className = H.className.replace(/\bno-js\b/, 'js')
        })(document.documentElement)</script>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap"
          rel="stylesheet">
    <?php wp_head(); ?>
</head>
<body>
<div id="react-main">
    <section class="container-fluid <?php Theme_Helpers::get_class('template-blog', 'template-single'); ?>">
    <header class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <h1 class="navbar-brand">
                <a href="/"><?php bloginfo('name'); ?></a>
            </h1>
            <nav class="collapse navbar-collapse d-flex justify-content-end">
                <?php wp_nav_menu([
                    'theme_location' => 'main_menu',
                    'container' => 'ul',
                    'menu_class' => 'navbar-nav w-85'
                ]); ?>
                <?php get_search_form(); ?>
            </nav>
        </div>
    </header>