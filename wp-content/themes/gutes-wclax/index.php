<?php

$page = get_page_by_path( 'welcome' );
if ( $page ) {
	wp_safe_redirect( get_rest_url() . '/wp/v2/page/' . $page->ID );
}