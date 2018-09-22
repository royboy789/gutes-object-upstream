<?php

add_action( 'init', 'my_custom_cpts', 10 );
function my_custom_cpts() {
	if ( ! defined( 'GUTENBERG_OBJECT_PLUGIN_CPTS' ) ) {
		define( 'GUTENBERG_OBJECT_PLUGIN_CPTS', 'post,page' );
	}
}

$page = get_page_by_path( 'welcome' );
if ( $page ) {
	wp_safe_redirect( get_rest_url() . 'wp/v2/pages/' . $page->ID );
}