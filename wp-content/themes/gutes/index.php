<?php
$page = get_page_by_path( 'welcome' );
if ( $page ) {
	wp_safe_redirect( get_the_permalink( $page->ID ) );
	wp_safe_redirect( get_rest_url() . 'wp/v2/pages/' . $page->ID );
} else {
	wp_safe_redirect( get_rest_url() . 'wp/v2/posts' );
}