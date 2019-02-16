<?php
/*
  Plugin Name: Gutenberg Object Plugin - MU
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
            padding: 20px;
            text-align: center;
        }
        .pantheon-logo {
            display: inline-block;
            height: 90px;
            width: 15%;
        }
        .pantheon-logo a {
            display: block;
        }
        .pantheon-logo svg {
            display: inline-block;
            height: auto;
            vertical-align: middle;
            width: 100%;
        }
        .pantheon-intro {
            display: inline-block;
            padding-left: 20px;
            text-align: left;
            width: 33%;
            vertical-align: middle;
        }
        .pantheon-intro h2 {
            margin: 0;
        }
        .pantheon-intro h2 a {
            text-decoration: none;
        }
        .pantheon-intro a {
            color: #EED01B;
        }
    </style>
	<div class="notice pantheon-banner">
        <div class="pantheon-logo">
            <a href="https://bit.ly/freepantheon" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="139px" height="46px" viewBox="0 0 139 46" version="1.1"><title>Pantheon Logo</title><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-0.000000, 0.000000)"><path d="M1.72639269 8.8817842e-16L5.72184932 9.84666667 0.634703196 9.84666667 2.31666667 14.18 12.6274201 14.18 1.72639269 8.8817842e-16 1.72639269 8.8817842e-16Z" fill="#EFD01D"></path><path d="M15.3502968 36L13.6461187 31.6666667 11.2881963 31.6666667 7.91792237 23.3333333 5.80118721 23.3333333 9.17146119 31.6666667 3.17351598 31.6666667 14.2586073 45.8466667 10.2631507 36 15.3502968 36 15.3502968 36Z" fill="#EFD01D"></path><path d="M16.6228767 18.6666667C16.7466438 18.6666667 17.0386073 18.5033333 17.0386073 17 17.0386073 15.4966667 16.7466438 15.3333333 16.6228767 15.3333333L9.52054795 15.3333333 10.8692922 18.6666667 16.6228767 18.6666667 16.6228767 18.6666667Z" fill="#FFFFFF"></path><path d="M12.7702283 22.6666667L17.5305023 22.6666667C17.6574429 22.6666667 17.9462329 22.5033333 17.9462329 21 17.9462329 19.4966667 17.6542694 19.3333333 17.5305023 19.3333333L11.4246575 19.3333333 12.7702283 22.6666667Z" fill="#FFFFFF"></path><path d="M16.8894521 27.3333333L10.4726027 27.3333333 11.821347 30.6666667 16.8989726 30.6666667C17.0227397 30.6666667 17.3147032 30.5033333 17.3147032 29 17.3147032 27.4966667 17.0163927 27.3333333 16.8894521 27.3333333L16.8894521 27.3333333Z" fill="#FFFFFF"></path><path d="M17.5527169 23.3333333L8.88584475 23.3333333 10.234589 26.6666667 17.5527169 26.6666667C17.6796575 26.6666667 17.9684475 26.5033333 17.9684475 25 17.9684475 23.4966667 17.6796575 23.3333333 17.5527169 23.3333333L17.5527169 23.3333333Z" fill="#FFFFFF"></path><path d="M16.8894521 27.3333333L10.4726027 27.3333333 11.821347 30.6666667 16.8989726 30.6666667C17.0227397 30.6666667 17.3147032 30.5033333 17.3147032 29 17.3147032 27.4966667 17.0163927 27.3333333 16.8894521 27.3333333L16.8894521 27.3333333Z" fill="#FFFFFF"></path><path d="M17.5527169 23.3333333L8.88584475 23.3333333 10.234589 26.6666667 17.5527169 26.6666667C17.6796575 26.6666667 17.9684475 26.5033333 17.9684475 25 17.9684475 23.4966667 17.6796575 23.3333333 17.5527169 23.3333333L17.5527169 23.3333333Z" fill="#FFFFFF"></path><path d="M7.645 22.6666667L6.02968037 18.6666667 6.80084475 18.6666667 8.4193379 22.6666667 11.8499087 22.6666667 8.88584475 15.3333333 1.48203196 15.3333333C0.910799087 15.3333333 0.599794521 15.3333333 0.342739726 16.2 0.0253881279 17.2366667 0 19.2 0 23 0 26.8 0.0349086758 28.7633333 0.342739726 29.8 0.599794521 30.6666667 0.913972603 30.6666667 1.48203196 30.6666667L7.97504566 30.6666667 4.75710046 22.6666667 7.64182648 22.6666667 7.645 22.6666667Z" fill="#FFFFFF"></path><path d="M44.7465753 16.3333333L41.2557078 16.3333333 36.1780822 30 39.7387671 30 40.6305251 27.6666667 45.2543379 27.6666667 46.0953196 30 49.6750457 30 44.7465753 16.3333333ZM41.5730594 25L42.9598858 20.6266667 42.9947945 20.6266667 44.3657534 25 41.5730594 25 41.5730594 25Z" fill="#FFFFFF"></path><path d="M31.478105 16.3333333L26.3401826 16.3333333 26.3401826 30 29.8310502 30 29.8310502 25.3333333 31.5955251 25.3333333C34.5246804 25.3333333 36.1685616 24 36.1685616 20.7966667 36.1717352 17.6833333 34.2549315 16.3333333 31.478105 16.3333333L31.478105 16.3333333ZM30.2594749 22.6666667L29.8310502 22.6666667 29.8310502 19.3333333 30.2594749 19.3333333C31.56379 19.3333333 32.6745205 19.3066667 32.6745205 21.0166667 32.6776941 22.6666667 31.478105 22.6666667 30.2626484 22.6666667L30.2594749 22.6666667Z" fill="#FFFFFF"></path><path d="M97.109589 24.6666667L100.600457 24.6733333 100.600457 21.6666667 97.109589 21.6666667 97.109589 19.3333333 101.869863 19.3333333 101.869863 16.3333333 93.6187215 16.3333333 93.6187215 30 101.869863 30 101.869863 26.6666667 97.109589 26.6666667 97.109589 24.6666667 97.109589 24.6666667Z" fill="#FFFFFF"></path><path d="M66.6438356 20L69.8173516 20 69.8363927 30 73.3082192 30 73.3082192 20 76.4817352 20 76.4817352 16.3333333 66.6438356 16.3333333 66.6438356 20 66.6438356 20Z" fill="#FFFFFF"></path><path d="M87.2716895 21.6666667L82.5114155 21.6666667 82.5114155 16.3333333 79.0205479 16.3333333 79.0205479 30 82.5114155 30 82.5114155 24.6666667 87.2716895 24.6666667 87.2716895 30 90.7625571 30 90.7625571 16.3333333 87.2716895 16.3333333 87.2716895 21.6666667 87.2716895 21.6666667Z" fill="#FFFFFF"></path><path d="M110.27968 19.6666667C111.944731 19.6666667 113.294521 21.0844316 113.294521 22.8333333 113.294521 24.582235 111.944731 26 110.27968 26 108.61463 26 107.26484 24.582235 107.26484 22.8333333 107.266589 21.0851932 108.615355 19.6685039 110.27968 19.6666667L110.27968 19.6666667ZM110.27968 16C106.686677 16 103.773973 19.0593875 103.773973 22.8333333 103.773973 26.6072791 106.686677 29.6666667 110.27968 29.6666667 113.872684 29.6666667 116.785388 26.6072791 116.785388 22.8333333 116.785388 19.0593875 113.872684 16 110.27968 16L110.27968 16 110.27968 16Z" fill="#FFFFFF"></path><path d="M128.200525 23.9866667L122.60879 16.3333333 119.324201 16.3333333 119.324201 30 122.827763 30 122.815068 22.3333333 128.159269 30 131.700913 30 131.700913 16.3333333 128.210046 16.3333333 128.200525 23.9866667 128.200525 23.9866667Z" fill="#FFFFFF"></path><path d="M60.6046347 23.9866667L55.0128995 16.3333333 51.7283105 16.3333333 51.7283105 30 55.2318721 30 55.2191781 22.3333333 60.563379 30 64.1050228 30 64.1050228 16.3333333 60.6141553 16.3333333 60.6046347 23.9866667 60.6046347 23.9866667Z" fill="#FFFFFF"></path><path d="M133.922462 19.0010533C133.91958 18.6446373 133.987681 18.2915262 134.122394 17.9643866 134.383276 17.3266714 134.867172 16.8184065 135.474312 16.5443866 136.103913 16.2629822 136.815463 16.2629822 137.445065 16.5443866 138.052205 16.8184065 138.536101 17.3266714 138.796983 17.9643866 139.064895 18.6256952 139.064895 19.3730781 138.796983 20.0343866 138.53791 20.6652914 138.060354 21.1692802 137.460933 21.4443866 136.831331 21.7257911 136.119781 21.7257911 135.490179 21.4443866 134.883039 21.1703668 134.399143 20.6621019 134.138261 20.0243866 133.999817 19.7025896 133.92634 19.3541576 133.922462 19.0010533L133.922462 19.0010533ZM134.373101 19.0010533C134.371941 19.2943615 134.428107 19.5847987 134.538124 19.8543866 134.749124 20.3806995 135.147776 20.7994281 135.648855 21.0210533 136.168476 21.250326 136.754074 21.250326 137.273695 21.0210533 137.774966 20.7997285 138.173712 20.3809015 138.384426 19.8543866 138.602706 19.308598 138.602706 18.6935086 138.384426 18.14772 138.173712 17.6212051 137.774966 17.2023781 137.273695 16.9810533 136.754147 16.7514038 136.168403 16.7514038 135.648855 16.9810533 135.147776 17.2026785 134.749124 17.6214071 134.538124 18.14772 134.428107 18.4173079 134.371941 18.7077451 134.373101 19.0010533L134.373101 19.0010533ZM135.483832 17.4610533L136.604083 17.4610533C136.881156 17.4368806 137.156954 17.5211746 137.378421 17.69772 137.549312 17.8717781 137.640646 18.1146488 137.629129 18.3643866 137.645228 18.5853478 137.574073 18.8035342 137.432371 18.96772 137.298675 19.1028763 137.125236 19.1863235 136.940476 19.2043866L137.692599 20.4943866 137.143581 20.4943866 136.420019 19.24772 136.029677 19.24772 136.029677 20.4943866 135.496526 20.4943866 135.496526 17.4443866 135.483832 17.4610533ZM136.016983 18.7943866L136.407325 18.7943866 136.651686 18.7943866C136.727921 18.7888259 136.802867 18.7708326 136.873832 18.7410533 136.938102 18.7141135 136.99409 18.6691433 137.035681 18.6110533 137.117513 18.4649816 137.117513 18.2837917 137.035681 18.13772 136.994208 18.0795073 136.938184 18.0345082 136.873832 18.00772 136.802999 17.9780085 136.72789 17.9611032 136.651686 17.95772L136.407325 17.95772 136.016983 17.95772 136.016983 18.77772 136.016983 18.7943866Z" fill="#FFFFFF"></path></g></g></svg>
            </a>
        </div>
		<div class="pantheon-intro">
			<h2 id="try_pantheon_hosting" class="z2-promo-form-slice__title">
                <a href="https://bit.ly/freepantheon" target="_blank">
				Try Pantheon for Free
                </a>
            </h2>
			<p class="z2-promo-form-slice__description">
				Spin up a new site in minutes! <br/>
                And use <a target="_blank" href="https://github.com/royboy789/gutes-object-upstream">This Custom Upstream</a><br/>
                <strong>Demo:</strong><a target="_blank" href="http://dev-gutes-obj-plugin.pantheonsite.io/">Gutes Object Plugin Demo</a>
            </p>
		</div>
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