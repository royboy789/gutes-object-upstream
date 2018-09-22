<?php
/**
 * The template for displaying archive pages.
 *
 * @link http://codex.wordpress.org/Template_Hierarchy
 *
 * @package     CoBlocks
 * @author      Rich Tabor of CoBlocks <hello@coblocks.com>
 * @license     GPL-3.0
 */

get_header();

if ( have_posts() ) :

	/* Start the Loop */
	while ( have_posts() ) :

		the_post();

		/*
		 * Include the Post-Format-specific template for the content.
		 * If you want to override this in a child theme, then include a file
		 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
		 */
		get_template_part( 'components/post/content', get_post_format() );

	endwhile;

	/*
	 * The posts pagination outputs a set of page numbers with links to the previous and next pages of posts.
	 *
	 * @link https://codex.wordpress.org/Function_Reference/the_posts_pagination
	 */
	the_posts_pagination(
		array(
			'prev_text'          => wp_kses( coblocks_get_svg( array( 'icon' => 'left' ) ), coblocks_svg_allowed_html() ) . '<span class="screen-reader-text">' . __( 'Previous page', 'coblocks' ) . '</span>',
			'next_text'          => '<span class="screen-reader-text">' . __( 'Next page', 'coblocks' ) . '</span>' . wp_kses( coblocks_get_svg( array( 'icon' => 'right' ) ), coblocks_svg_allowed_html() ),
			'before_page_number' => '<span class="meta-nav screen-reader-text">' . __( 'Page', 'coblocks' ) . ' </span>',
		)
	);

else :
	get_template_part( 'components/post/content', 'none' );
endif;

get_footer();
