
<?php
/*
Plugin Name: NN Challenge
Plugin URI: https://www.temak.dev
Description: NN Wordpress Challenge.
Version: 1.0
Author: Temak
Author URI: https://www.temak.dev
License: GPLv2 or later
*/

function nn_challenge_scripts() {
    wp_enqueue_script( 'nn_challenge_js', plugin_dir_url( __FILE__ ) . 'js/nn_challenge.js', array('jquery'), '1.0', true );
    wp_enqueue_style( 'nn_challenge_css', plugin_dir_url( __FILE__ ) . 'css/nn_challenge.css', false, '1.0', 'all');
}

add_action( 'wp_enqueue_scripts', 'nn_challenge_scripts' );

function nn_challenge_display_content() {
    include( plugin_dir_path( __FILE__ ) . 'nn_challenge_template.php' );
}

add_shortcode( 'nn_challenge_display_content', 'nn_challenge_display_content' );