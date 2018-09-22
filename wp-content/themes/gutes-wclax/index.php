<?php

$page = get_page_by_path( 'welcome' );
if ( $page ) {
	wp_safe_redirect( get_the_permalink( $page->ID ) );
}