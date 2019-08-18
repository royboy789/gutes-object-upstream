<?php
add_theme_support( 'post-thumbnails' );

add_action( 'init', 'my_custom_cpts', 10 );
function my_custom_cpts() {

	if ( ! defined( 'GUTENBERG_OBJECT_PLUGIN_CPTS' ) ) {
		define( 'GUTENBERG_OBJECT_PLUGIN_CPTS', 'post,page' );
	}
}

