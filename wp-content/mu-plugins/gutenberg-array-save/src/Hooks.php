<?php

namespace GutesObjectPlugin;

use GutesObjectPlugin\API;

class Hooks {

	private $api;

	public function __construct( API $api ) {
		$this->api = $api;
		add_action( 'rest_api_init', [ $this, 'gutes_array_fields' ] );
	}

	public function gutes_array_fields() {
		register_rest_field( 'post', 'editor_blocks', [
			'get_callback' => [ $this, 'get_block_data' ],
		]);

		if ( defined( 'GUTENBERG_OBJECT_PLUGIN_CPTS' ) ) {
			$cpts = GUTENBERG_OBJECT_PLUGIN_CPTS;
			$cpts = explode( ',', $cpts );

			foreach( $cpts as $cpt ) {
				register_rest_field( $cpt, 'editor_blocks', [
					'get_callback' => [ $this, 'get_block_data' ],
				]);
			}
		}
	}

	public function get_block_data( $post ) {
		$post = get_post( $post['id'] );
		// If new post, new content will exist.
		if ( empty( $post->post_content ) ) {
			return true;
		}

		if ( ! has_blocks( $post->post_content ) ) {
			return false;
		}

		$gutes_data = $this->api->get_editor_db( $post->ID );
		if ( ! is_object( $gutes_data ) ) {
			return 'Error Getting Editor DB ' . $post->ID;
		}
		return json_decode( $gutes_data->gutes_array );
	}



}