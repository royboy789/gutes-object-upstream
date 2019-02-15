<?php
/*
  Plugin Name: Gutenberg OBject Plugin - MU
  Plugin URI: https://pantheon.io/
  Description: Using the OBject Plugin
  Version: 0.1
  Author: Roy Sivan
  Author URI: https://arcctrl.com
*/



require_once 'gutenberg-array-save/GutesObjectPlugin.php';


function sample_admin_notice__success() {
	?>
    <style>
        .pantheon-banner {
            background: #000000;
            color: white;
            font-family: Tablet Gothic,Frutiger,Frutiger Linotype,Univers,HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;
            font-size: 22px;
            padding: 40px;
            text-align: center;
        }
        .pantheon-banner form {
            display: inline-block;
            text-align: left;
            padding-left: 30px;
            vertical-align: middle;
            width: 49%;
        }
        .pantheon-banner form label {
            display: inline-block;
            font-size: 1em;
            line-height: 20px;
            margin: 0 10px 0 0;
            padding: 20px 12px;
            vertical-align: middle;
        }
        .pantheon-banner form button {
            background: #EED01B;
            border: none;
            color: black;
            cursor: pointer;
            display: inline-block;
            font-weight: 700;
            line-height: 1.2;
            padding: 20px 12px;
            vertical-align: top;
        }
        .pantheon-banner form input[type=email] {
            background: rgba(255,255,255,0.3);
            border: none;
            color: white;
            line-height: 24px;
            padding: 20px 12px;
            vertical-align: top;
            width: 400px;
        }
        .pantheon-intro {
            display: inline-block;
            text-align: right;
            width: 33%;
            vertical-align: middle;
        }
        .pantheon-intro h2 {
            color: #EED01B;
            margin: 0;
        }
    </style>
	<div class="notice pantheon-banner">
		<div class="pantheon-intro">
			<h2 id="try_pantheon_hosting" class="z2-promo-form-slice__title">
				Try Pantheon for Free              </h2>
			<p class="z2-promo-form-slice__description">
				Spin up a new site in minutes!              </p>
		</div>
		<form action="https://pantheon.io/register" id="remote-reg-form--email-only-black" class="pantheon-remote-registration" method="post" role="form">
			<input name="pda_campaign" type="hidden" value="">
			<label class="sr-only" for="remote_reg_email_only_email_new">Email</label> <input id="remote_reg_email_only_email_new" class="form-control" name="email" placeholder="your email address" required="" type="email">
			<button class="btn btn-lg btn-primary z2-cta" type="submit">Sign Up FREE</button>
		</form>
	</div>
	<?php
}
add_action( 'admin_notices', 'sample_admin_notice__success' );

function insert_fonts() {

	if ( ! is_admin() ) {
		?>
		<link rel="preload" href="https://pantheon.io/sites/all/themes/zeus/fonts/tablet_gothic/360074_3_0.woff2" as="font" type="font/woff2" crossorigin>
		<link rel="preload" href="https://pantheon.io/sites/all/themes/zeus/fonts/tablet_gothic/360074_2_0.woff2" as="font" type="font/woff2" crossorigin>
		<link rel="preload" href="https://pantheon.io/sites/all/themes/zeus/fonts/tablet_gothic/360074_4_0.woff2" as="font" type="font/woff2" crossorigin>
		<link rel="preload" href="https://pantheon.io/sites/all/themes/zeus/fonts/tablet_gothic/360074_1_0.woff2" as="font" type="font/woff2" crossorigin>
		<link rel="preload" href="https://pantheon.io/sites/all/themes/zeus/fonts/tablet_gothic_condensed/360074_5_0.woff2" as="font" type="font/woff2" crossorigin>
		<link rel="preload" href="https://pantheon.io/sites/all/themes/zeus/fonts/adelle/360074_0_0.woff2" as="font" type="font/woff2" crossorigin>
		<?php
	}

}
add_action( 'wp_head', 'insert_fonts' );