<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

//  echo '<p ' . get_block_wrapper_attributes() . '>';
	echo '<section class="position-relative content-section [get_field="class"]" style="padding:100px 0;[get_field="style"]">';
	echo '<div class="position-absolute" style="top:-50px;" id="[get_field="id"]"></div>';

	echo get_template_part('partials/bg-img');

	// [get_field="code_block"]

	echo '<div class="container">';

	echo '<div class="row justify-content-center">';

		echo get_template_part('partials/content-block');
		echo 'h3llo';

	echo '</div>';

	echo '</div>';

	echo '</section>';

// 	esc_html_e( 'Content Block - 123 hello from a dynamic block!', 'content-block' );
// echo '</p>';
