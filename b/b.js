(function add_d3_prototype() {
    d3.selection.prototype.mattr = function(a,b,c='',d='',e='',f='',g='',h=''){
	if (a !== '') this.attr(a,b);
	if (c !== '') this.attr(c,d);
	if (e !== '') this.attr(e,f);
	if (g !== '') this.attr(g,h);
	return this;
    };

    d3.selection.prototype.selectAppend = function(selector, name = '') {
	var t = this.select(selector);
	if (t.size())
	    return t;

	if (name === "")
	    name = selector;
	if (name.substring(0,1)==="#" || name.substring(0,1)===".")
	    name = name.substring(1);
	t = this.append(name);
	if (selector.substring(0,1)==="#")
	    t.attr("id", selector.substring(1));
	else if (selector.substring(0,1)==='.')
	    t.attr("class", selector.substring(1));
	return t;
    };

})();

const 車 = "m  -7.5,-5    l 6.67969,0 0,3.86719 -6.67969,0 0,-3.86719 z m 8.20313,0 6.91406,0 0,3.86719 -6.91406,0 0,-3.86719 z m -8.20313,4.45313 6.67969,0 0,3.51562 -6.67969,0 0,-3.51562 z m 8.20313,0 6.91406,0 0,3.51562 -6.91406,0 0,-3.51562 z m -9.72657,-0.0586 c 0,2.69532 -0.0391,4.7461 -0.11718,6.15234 l 1.64062,-0.82031 0,-1.17188 6.67969,0 0,3.86719 -12.77344,0 0.9375,0.9375 c 0.70313,-0.23437 1.48437,-0.35156 2.34375,-0.35156 l 9.49219,0 c -2e-5,2.8125 -0.0391,4.84375 -0.11719,6.09375 l 1.75781,-0.58594 c -0.0781,-1.95313 -0.1172,-3.78906 -0.11718,-5.50781 l 13.59375,0 -2.46094,-2.34375 -1.875,1.75781 -9.25781,0 0,-3.86719 6.91406,0 0,1.52344 1.64062,-0.70312 c -0.0781,-1.32812 -0.11721,-4.25781 -0.11718,-8.78907 l 1.17187,-0.70312 -1.75781,-1.75781 -1.28906,1.28906 -6.5625,0 0,-3.04688 11.95312,0 -2.10937,-2.10937 -1.64063,1.52344 -8.20312,0 0,-2.34375 1.40625,-1.05469 -3.04688,-0.9375 c 0.0781,1.4844 0.11717,2.92971 0.11719,4.33594 l -11.25,0 0.9375,0.9375 c 0.70312,-0.23436 1.48437,-0.35154 2.34375,-0.35157 l 7.96875,0 0,3.04688 -6.44531,0 -1.875,-1.05469 c 0.0781,1.32814 0.11718,3.33986 0.11718,6.03516 l 0,0 z";
const 馬 = "m  -9.9, 4    l 1.7578,-0.58594 0,-1.28906 18.39845,-0.23438 c -3e-5,2.26563 -0.0977,4.10157 -0.29297,5.50781 -0.19534,1.40625 -0.48831,2.40235 -0.87891,2.98829 -0.39065,0.58593 -1.09377,0.8203 -2.10937,0.70312 -1.01565,-0.11719 -2.18753,-0.29297 -3.51563,-0.52734 l -0.11719,0.58593 c 2.65623,0.54688 4.06248,1.36719 4.21875,2.46094 1.40623,-0.39063 2.38279,-1.01563 2.92969,-1.875 0.54685,-0.85937 0.91794,-1.97266 1.11328,-3.33984 0.19529,-1.36719 0.332,-3.33984 0.41015,-5.91797 l 1.28907,-0.82031 -2.22657,-1.875 -1.05468,1.52343 -8.55469,0.11719 0,-3.86719 9.02344,0 -1.99219,-1.99218 -1.40625,1.40625 -5.625,0 0,-3.86719 9.02344,0 -1.875,-1.875 -1.28907,1.28906 -5.85937,0 0,-3.98437 10.3125,0 -2.10938,-2.10938 -1.52343,1.52344 -15.9375,0 -2.10937,-1.05469 c 0.0781,2.4219 0.11718,5.09768 0.11718,8.02735 0,2.92969 -0.0391,5.95704 -0.11718,9.08203 l 0,0 z m -0.35157,0.70312 c -0.54688,2.03126 -1.26953,3.39844 -2.16797,4.10156 -0.89844,0.70313 -1.1914,1.3086 -0.87891,1.81641 0.31251,0.50781 0.83985,0.625 1.58204,0.35157 0.74218,-0.27345 1.28905,-0.87891 1.64062,-1.81641 0.35156,-0.9375 0.48828,-2.42187 0.41016,-4.45313 l -0.58594,0 z m 3.16407,0.11719 c 0.85936,1.79688 1.30858,3.1836 1.34765,4.16016 0.0391,0.97656 0.33203,1.36718 0.8789,1.17187 0.54687,-0.19531 0.87891,-0.58593 0.9961,-1.17187 0.11718,-0.58594 -0.0196,-1.23047 -0.41015,-1.9336 -0.39064,-0.70312 -1.21095,-1.5625 -2.46095,-2.57812 l -0.35155,0.35156 z m 10.78125,-0.9375 c 1.09372,1.25 1.75779,2.36329 1.99218,3.33985 0.23436,0.97656 0.56639,1.40625 0.9961,1.28906 0.42966,-0.11719 0.74216,-0.42969 0.9375,-0.9375 0.19529,-0.50781 0.0781,-1.09375 -0.35157,-1.75781 -0.42971,-0.66406 -1.50393,-1.42578 -3.22266,-2.28516 l -0.35155,0.35156 z m -11.83595,-15.35156 7.96875,0 0,3.98437 -7.96875,0 0,-3.98437 z m 0,4.57031 7.96875,0 0,3.86719 -7.96875,0 0,-3.86719 z m 0,4.45312 7.96875,0 0,3.86719 -7.96875,0.11719 0,-3.98438 z m 6.32813,6.67969 c 0.85936,1.09376 1.40624,2.22656 1.64062,3.39844 0.23436,1.17187 0.60546,1.67969 1.11329,1.52344 0.50779,-0.15625 0.8203,-0.48828 0.9375,-0.99609 0.11717,-0.50781 -0.0196,-1.09375 -0.41016,-1.75782 -0.39064,-0.66405 -1.3672,-1.5039 -2.92968,-2.51953 l -0.35157,0.35156 z";
const 象 = "m   5  , 2    c 0.31248,1.71876 1.074195,3.24219 2.28516,4.57031 1.210913,1.32813 2.871071,2.42188 4.980461,3.28125 0.23435,-0.78124 1.05466,-1.24999 2.46094,-1.40625 l 0,-0.35156 c -2.1094,-0.23438 -4.00393,-0.85937 -5.6836,-1.875 -1.679703,-1.01562 -2.871109,-2.49999 -3.574211,-4.45313 2.812477,-1.24998 4.648411,-1.87499 5.507811,-1.875 l -1.64062,-1.99218 c -0.39065,0.46876 -1.171901,1.11329 -2.343754,1.93359 -1.171897,0.82032 -2.421892,1.54298 -3.75,2.16797 -1.015642,-1.09374 -2.460952,-2.0703 -4.335937,-2.92969 0.781238,-0.85936 1.367175,-1.64061 1.757812,-2.34375 l 7.734375,0 0,0.82031 1.640624,-0.58593 c -0.0782,-1.09374 -0.11721,-2.26561 -0.11719,-3.51563 l 1.05469,-0.82031 -1.875,-1.52344 -1.054686,1.17188 -6.09375,0 c 1.484355,-1.32811 2.61717,-2.18748 3.398437,-2.57813 0.781231,-0.39061 1.445296,-0.62497 1.992188,-0.70312 l -2.109375,-1.99219 -1.289063,1.40625 -6.914062,0 c 0.781238,-0.78123 1.484363,-1.21091 2.109375,-1.28906 l -2.34375,-1.64063 c -0.468757,1.09378 -1.582043,2.50002 -3.33984,4.21875 -1.75782,1.71877 -3.847665,3.28127 -6.269535,4.6875 l 0.117187,0.46875 c 1.796873,-0.54686 3.398431,-1.28905 4.804688,-2.22656 -7e-6,2.10939 -0.03907,4.02345 -0.117188,5.74219 l 1.640625,-0.58594 0,-1.05469 5.15625,0 c -1.71876,2.89064 -5.234385,5.31251 -10.546875,7.26563 l 0.117188,0.35156 c 3.82812,-0.85937 7.22655,-2.46093 10.195312,-4.80469 0.468735,0.23438 0.859365,0.50783 1.171875,0.82031 -2.031262,2.50001 -5.390632,4.64844 -10.078125,6.44532 l 0.117188,0.35156 c 4.37499,-1.01562 8.046863,-2.92968 11.015625,-5.74219 0.312488,0.23438 0.66405,0.62501 1.054687,1.17188 -2.968762,3.75 -7.773442,6.52344 -14.414062,8.32031 l 0,0.46875 c 6.24999,-1.01563 11.328113,-3.47656 15.234375,-7.38281 0.31248,0.85938 0.468735,1.75782 0.46875,2.69531 -1.5e-5,0.9375 -0.1758,1.73828 -0.52734,2.40235 -0.351585,0.66405 -0.781267,1.11327 -1.28907,1.34765 -0.507825,0.23437 -2.089852,0.19531 -4.74609,-0.11719 l 0,0.46875 c 2.187488,0.54688 3.359363,1.32812 3.515625,2.34375 1.562483,-0.39063 2.734358,-1.05469 3.515625,-1.99219 0.78123,-0.9375 1.24998,-2.08984 1.40625,-3.45702 0.156233,-1.36719 -0.312517,-3.06641 -1.40625,-5.09766 0.31248,-0.15624 0.78123,-0.35156 1.40625,-0.58594 l 0,0 z m -3.867188,-9.72656 -7.265625,0 -0.585937,-0.58594 c 1.01562,-0.85936 2.0703,-1.75779 3.164062,-2.69531 l 7.265625,0 -2.578125,3.28125 z m -7.5,0.58593 6.5625,0 c -0.23439,1.25002 -0.585952,2.34377 -1.054687,3.28125 l -5.507813,0 0,-3.28125 z m 8.320313,0 6.445312,0 0,3.28125 -7.5,0 c 0.468735,-1.09373 0.820298,-2.18748 1.054688,-3.28125 l 0,0 z";
const 士 = "m  -1  ,-9.5  l 0,6.9140625 -12.3046875, 0 0.9375, 0.9375 c 0.703125, -0.23435999999999998 1.48437, -0.3515475 2.34375, -0.3515625 l 9.0234375, 0 0, 12.3046875 -10.1953125, 0 0.9375, 0.9375 c 0.7031175000000001, -0.234375 1.48437, -0.3515625 2.34375, -0.3515625 l 19.3359375, 0 -2.34375, -2.34375 -1.640625, 1.7578125 -6.6796875, 0 0, -12.3046875 12.65625, 0 -2.2265625, -2.34375 -1.7578125, 1.7578125 -8.671875, 0 0, -8.671875 0.9375, -0.8203125 -2.8125, -1.2890625 c 0.0781125, 1.6406475 0.11717250000000001, 2.92971 0.1171875, 3.8671875 l 0, 0" ;
const 將 = "m  -5  ,-5    l -3.984375,0 0,-4.921875 0.703125,-0.820313 -2.34375,-0.9375 c 0.07812,1.093771 0.117187,3.242207 0.117187,6.445313 l -0.703125,0.585937 1.523438,1.289063 0.703125,-1.054688 3.984375,0 0,4.921875 -6.914063,0 0.9375,0.9375 c 0.703125,-0.234366 1.367183,-0.351553 1.992188,-0.351562 0.07812,2.734381 -0.07813,4.863286 -0.46875,6.386719 -0.39063,1.523439 -1.40625,3.261718 -3.046875,5.214843 l 0.234375,0.351563 c 2.265623,-1.796876 3.652343,-3.496093 4.16016,-5.097656 0.507803,-1.601559 0.761708,-3.886713 0.761715,-6.855469 l 2.34375,0 c -7e-6,6.718753 -0.03908,10.781248 -0.117188,12.1875 l 1.757813,-0.820313 c -0.07814,-1.328125 -0.117195,-2.246093 -0.117188,-2.753906 -7e-6,-0.507812 -7e-6,-7.63671 0,-21.386719 l 1.054688,-0.9375 -2.695313,-1.171875 c 0.07812,1.406273 0.117181,4.335958 0.117188,8.789063 l 0,0 z m 11.015625,-6.679688 0.9375,-0.46875 -2.226563,-1.640625 c -0.937514,2.265648 -2.0508,4.140645 -3.339847,5.625 -1.28907,1.484393 -2.63673,2.734392 -4.042965,3.75 l 0.234375,0.351563 c 1.328115,-0.70311 2.53905,-1.50389 3.632812,-2.402344 1.093733,-0.89842 2.187481,-1.933575 3.28125,-3.105469 l 6.679688,0 c -1.4844,2.421893 -3.3594,4.570329 -5.625,6.445313 -2.265645,1.875012 -5.156265,3.320323 -8.671875,4.335937 l 0.117187,0.351563 c 3.359363,-0.546866 6.230453,-1.640615 8.613278,-3.28125 2.382795,-1.640612 4.179668,-3.222641 5.390625,-4.746094 1.210913,-1.523419 2.24607,-2.363262 3.105472,-2.519531 l -1.875,-2.226563 -1.171875,1.054688 -6.210937,0 c 0.390608,-0.468729 0.78123,-0.976541 1.171875,-1.523438 l 0,0 z m 2.8125,13.476563 -11.71875,0 0.9375,0.9375 c 0.70311,-0.234367 1.484363,-0.351555 2.34375,-0.351563 l 8.4375,0 0,7.148438 c -2.3e-5,0.625 -0.332055,0.957031 -0.99609,0.996094 -0.664088,0.03906 -2.167995,-0.09766 -4.511723,-0.410157 l 0,0.585938 c 2.734358,0.624999 4.140608,1.562498 4.21875,2.8125 1.953106,-0.546878 2.890598,-1.718751 2.8125,-3.515625 l 0,-7.617188 4.804688,0 -1.875,-1.992187 -1.40625,1.40625 -1.523438,0 0,-2.460938 0.9375,-0.820312 -2.578125,-1.171875 c 0.07811,1.015637 0.117165,2.500011 0.117188,4.453125 l 0,0 z m -8.4375,1.757812 -0.351563,0.234375 c 0.859358,1.562505 1.386705,2.929692 1.582028,4.101563 0.1953,1.171876 0.546862,1.523438 1.054695,1.054687 0.507795,-0.468747 0.78123,-0.97656 0.820305,-1.523437 0.03907,-0.546872 -0.156263,-1.093746 -0.58593,-1.640625 -0.429705,-0.54687 -1.269548,-1.289057 -2.519535,-2.226563 l 0,0 z m 2.929687,-11.835937 -0.351562,0.234375 c 1.093733,1.093768 1.796858,2.031266 2.109375,2.8125 0.31248,0.781265 0.644512,0.996109 0.99609,0.644531 0.351548,-0.351547 0.527325,-0.800765 0.527347,-1.347656 -2.2e-5,-0.546858 -0.234397,-0.957014 -0.703125,-1.230469 -0.468772,-0.273419 -1.328144,-0.644513 -2.578125,-1.113281 l 0,0 z m -2.695312,2.226562 -0.351563,0.234375 c 0.859358,0.937515 1.425765,1.816421 1.699223,2.636719 0.27342,0.820325 0.585915,1.0547 0.9375,0.703125 0.35154,-0.351549 0.546855,-0.761705 0.58593,-1.230469 0.03907,-0.468735 -0.175792,-0.878891 -0.644528,-1.230468 -0.468764,-0.351547 -1.210949,-0.72264 -2.226562,-1.113282 l 0,0 z";
const 砲 = "m   2  ,-3.5  l 3.51563,0 0,5.74218 -3.51563,0 0,-5.74218 z m 2.8125,-9.14063 -2.34375,-1.28906 c -0.31251,1.56252 -0.87892,3.47658 -1.69921,5.74219 -0.82033,2.26563 -1.77736,4.41407 -2.8711,6.44531 l 0.35156,0.35156 c 0.78124,-0.93749 1.56249,-2.03124 2.34375,-3.28125 l 0,15 c -1e-5,1.40624 0.89843,2.10937 2.69532,2.10938 l 7.03125,0 c 0.93747,-1e-5 1.69919,-0.0781 2.28515,-0.23438 0.58591,-0.15625 1.11325,-0.66406 1.58203,-1.52344 -0.70315,-0.23437 -1.15237,-0.72266 -1.34766,-1.46484 -0.19533,-0.74219 -0.29299,-1.77735 -0.29296,-3.10547 l -0.46875,0 c -3e-5,1.32812 -0.0977,2.5 -0.29297,3.51563 -0.19534,1.01562 -0.68362,1.52343 -1.46484,1.52343 l -6.44532,0 c -1.32814,0 -1.9922,-0.50781 -1.99218,-1.52343 l 0,-6.79688 3.63281,0 0,1.05469 1.52344,-0.70313 c -0.0781,-1.17186 -0.11721,-3.24218 -0.11719,-6.21093 l 0.9375,-0.70313 -1.40625,-1.40625 -1.05469,1.05469 -3.51562,0 -1.05469,-0.9375 1.75781,-3.51563 7.96875,0 0,12.1875 c -2e-5,0.46875 -0.0977,0.78126 -0.29297,0.9375 -0.19533,0.15626 -1.62111,0.0781 -4.27734,-0.23437 l 0,0.46875 c 1.17185,0.3125 1.97263,0.625 2.40234,0.9375 0.42967,0.3125 0.7617,0.82031 0.9961,1.52344 1.17185,-0.39063 1.91403,-0.83985 2.22656,-1.34766 0.31247,-0.50781 0.46872,-1.15234 0.46875,-1.93359 l 0,-11.83594 1.05469,-0.70313 -1.64063,-1.64062 -1.05469,1.05469 -7.61718,0 c 0.93748,-2.03124 1.60154,-3.20311 1.99218,-3.51563 l 0,0 z m -13.125,9.375 3.98438,0 0,10.07813 -3.98438,0 0,-10.07813 z m -1.52343,14.76563 1.52343,-0.70313 0,-3.39844 3.98438,0 0,2.10938 1.52344,-0.9375 c -0.0781,-1.64063 -0.11721,-5.42969 -0.11719,-11.36719 l 1.05469,-0.58594 -1.52344,-1.52343 -1.05469,1.05468 -3.86719,0 c 0.62499,-2.03124 1.21093,-4.37498 1.75782,-7.03125 l 5.50781,0 -1.875,-1.875 -1.28906,1.28907 -8.78907,0 0.9375,0.9375 c 0.70313,-0.23436 1.48437,-0.35155 2.34375,-0.35157 l 1.52344,0 c -0.54688,3.12502 -1.21094,5.83986 -1.99219,8.14453 -0.78125,2.3047 -1.875,4.58985 -3.28125,6.85547 l 0.23438,0.23438 c 1.01562,-0.9375 2.18749,-2.5 3.51562,-4.6875 0,6.5625 -0.0391,10.50781 -0.11718,11.83594 l 0,0 z";
const 卒 = "m  -5  ,-8    c -0.23438,1.250018 -0.83985,2.910173 -1.8164,4.980468 -0.97658,2.070325 -2.28517,3.964855 -3.92579,5.683594 l 0.35156,0.234375 c 1.875,-1.24999 3.71094,-3.398425 5.50782,-6.445312 1.24998,1.328139 2.05077,2.519543 2.40234,3.574218 0.35155,1.054698 0.7617,1.171886 1.23047,0.351563 0.46873,-0.820301 0.46873,-1.503893 0,-2.050781 -0.46877,-0.546861 -1.60157,-1.328111 -3.39844,-2.34375 0.39062,-0.703109 0.70312,-1.230453 0.9375,-1.582032 0.23437,-0.351545 0.62499,-0.683576 1.17188,-0.996093 l -2.46094,-1.40625 z m 11.95312,1.523437 -2.34375,-1.523437 c -0.46876,1.640642 -1.19142,3.320328 -2.16797,5.039062 -0.97657,1.718763 -2.40235,3.554699 -4.27734,5.507813 l 0.35156,0.234375 c 0.46874,-0.312492 0.93749,-0.664054 1.40625,-1.054688 l 0,2.8125 -12.65625,0 0.9375,0.9375 c 0.70313,-0.234369 1.48437,-0.351556 2.34375,-0.351562 l 9.375,0 0,6.328125 c -10e-6,0.46875 -0.0391,1.523435 -0.11718,3.164062 l 1.875,-0.703125 c -0.0782,-1.484376 -0.11721,-2.460937 -0.11719,-2.929687 l 0,-5.859375 12.65625,0 -2.10938,-2.34375 -1.75781,1.757812 -8.78906,0 0,-1.171875 1.05469,-0.820312 -2.46094,-1.054688 c 1.64061,-1.562488 3.04686,-3.124987 4.21875,-4.6875 1.0156,0.937513 1.83592,1.835951 2.46094,2.695313 0.62497,0.859386 1.09372,1.640635 1.40625,2.34375 0.31248,0.703134 0.72263,0.625008 1.23046,-0.234375 0.5078,-0.859365 0.33201,-1.679676 -0.52734,-2.460938 -0.85939,-0.781237 -2.3047,-1.718736 -4.33594,-2.8125 0.31248,-0.468734 0.64452,-0.976546 0.9961,-1.523437 0.35154,-0.546858 0.80076,-0.976545 1.34765,-1.289063 l 0,0 z m -7.96875,-6.445312 -0.35156,0.351562 c 0.93749,1.250023 1.4453,2.460959 1.52344,3.632813 l -11.60156,0 0.9375,0.9375 c 0.70311,-0.234356 1.48437,-0.351543 2.34375,-0.351563 l 20.15625,0 -2.22657,-2.34375 -1.75781,1.757813 -7.03125,0 c 0.70311,-0.624979 0.93749,-1.249979 0.70313,-1.875 -0.23439,-0.624978 -1.13283,-1.328102 -2.69532,-2.109375 l 0,0 z";
const 俥 = "m  -3  ,-4    l 4.92188,0 0,3.51562 -4.92188,0 0,-3.51562 z m 6.44532,0 5.27343,0 0,3.51562 -5.27343,0 0,-3.51562 z m -6.44532,4.10156 4.92188,0 0,3.63281 -4.92188,0 0,-3.63281 z m 6.44532,0 5.27343,0 0,3.63281 -5.27343,0 0,-3.63281 z m -1.75782,14.41406 1.875,-0.82031 c -0.0781,-1.71875 -0.1172,-3.00782 -0.11718,-3.86719 l 0,-1.28906 9.25781,0 -2.10938,-2.22656 -1.52343,1.64062 -5.625,0 0,-3.63281 5.27343,0 0,1.05469 1.64063,-0.82032 c -0.0781,-1.09374 -0.11721,-2.10936 -0.11719,-3.04687 l 0,-5.03906 0.9375,-0.82032 -1.875,-1.40625 -0.82031,1.17188 -5.03906,0 0,-3.28125 8.32031,0 -2.10938,-2.10938 -1.52343,1.52344 -4.6875,0 0,-2.57812 1.05468,-0.9375 -2.69531,-1.17188 c 0.0781,0.8594 0.11717,1.75784 0.11719,2.69531 l 0,1.99219 -7.73438,0 0.9375,0.9375 c 0.70312,-0.23436 1.48437,-0.35155 2.34375,-0.35156 l 4.45313,0 0,3.28125 -4.80469,0 -1.75781,-0.82031 c 0.0781,1.64064 0.11718,3.45704 0.11719,5.44921 -1e-5,1.9922 -0.0391,3.96485 -0.11719,5.91797 l 1.64062,-0.82031 0,-0.82031 4.92188,0 0,3.63281 -9.02344,0 0.9375,0.9375 c 0.70312,-0.23437 1.48437,-0.35156 2.34375,-0.35156 l 5.74219,0 0,1.875 c -2e-5,0.70312 -0.0781,2.07031 -0.23438,4.10156 l 0,0 z m -9.72656,-18.04687 0.9375,-0.58594 -1.40625,-0.82031 c 0.625,-1.32811 1.52343,-3.16405 2.69531,-5.50782 l 1.28907,-0.82031 -2.57813,-1.64062 c -0.70312,2.42189 -1.64062,4.94142 -2.8125,7.55859 -1.17187,2.6172 -2.57812,5.0586 -4.21875,7.32422 l 0.35156,0.35156 c 1.40625,-1.48437 2.8125,-3.28124 4.21875,-5.39062 l 0,12.42187 c 0,1.71875 -0.0391,3.39843 -0.11718,5.03906 l 1.75781,-0.9375 c -0.0781,-1.40625 -0.11719,-3.04687 -0.11719,-4.92187 l 0,-12.07031 z";
const 傌 = "m  -3.5,-8.5  l 0,8.55468 c -10e-6,0.93751 -0.0391,2.18751 -0.11718,3.75 l 1.64062,-0.35156 0,-0.58594 12.65625,-0.23437 c -0.62503,4.53125 -1.07424,7.10937 -1.34766,7.73437 -0.27346,0.625 -0.68362,0.91797 -1.23046,0.87891 -0.5469,-0.0391 -1.87503,-0.29297 -3.98438,-0.76172 l 0,0.46875 c 1.24998,0.46874 2.07029,0.85937 2.46094,1.17188 0.3906,0.31249 0.7031,0.8203 0.9375,1.52343 1.3281,-0.3125 2.28513,-0.89844 2.87109,-1.75781 0.58591,-0.85938 1.19138,-3.75 1.81641,-8.67187 l 1.05469,-0.70313 -1.875,-1.64062 -1.05469,1.17187 -5.74219,0.11719 0,-4.10156 6.79688,0 -2.10938,-1.99219 -1.40625,1.40625 -3.28125,0 0,-3.98438 6.91406,0 -1.99218,-1.99218 -1.40625,1.40625 -3.51563,0 0,-3.86719 7.61719,0 -2.10938,-2.22656 -1.64062,1.64062 -10.3125,0 -1.75781,-0.9375 c 0.0781,1.64064 0.11717,2.96877 0.11718,3.98438 l 0,0 z m -0.9375,13.82812 c -0.78126,1.95313 -1.50391,3.22265 -2.16797,3.80859 -0.66406,0.58594 -0.85938,1.01563 -0.58594,1.28906 0.27344,0.27344 0.72265,0.35157 1.34766,0.23438 0.62499,-0.11719 1.07421,-0.56641 1.34766,-1.34765 0.27342,-0.78126 0.44921,-2.07032 0.52734,-3.86719 l -0.46875,-0.11719 z m 2.46094,0.11719 c 0.54686,1.95313 0.8203,3.37891 0.82031,4.27734 -10e-6,0.89844 0.27342,1.21093 0.82032,0.9375 0.54686,-0.27344 0.85935,-0.74219 0.9375,-1.40625 0.0781,-0.66406 -0.62502,-2.01172 -2.10938,-4.04297 l -0.46875,0.23438 z m 3.39844,-0.46875 c 0.93748,1.875 1.46482,3.24219 1.58203,4.10156 0.11717,0.85937 0.4492,1.07422 0.99609,0.64453 0.54686,-0.42968 0.74217,-1.03516 0.58594,-1.8164 -0.15627,-0.78126 -1.13283,-1.83594 -2.92969,-3.16407 l -0.23437,0.23438 z m 3.98437,-0.70313 c 0.93748,1.79688 1.50389,3.14454 1.69922,4.04297 0.19529,0.89844 0.54685,1.05469 1.05469,0.46875 0.50779,-0.58594 0.62498,-1.19141 0.35156,-1.8164 -0.27346,-0.625 -1.19143,-1.60156 -2.7539,-2.92969 l -0.35157,0.23437 z m -7.38281,-15.23437 5.03906,0 0,3.86719 -5.03906,0 0,-3.86719 z m 0,4.45312 5.03906,0 0,3.98438 -5.03906,0 0,-3.98438 z m 0,4.57032 5.03906,0 0,4.10156 -5.03906,0.11719 0,-4.21875 z m -6.21094,10.66406 0,-13.24219 0.9375,-0.46875 -1.28906,-0.9375 c 1.32812,-2.81248 2.22656,-4.68748 2.69531,-5.625 l 1.17188,-0.70312 -2.57813,-1.64063 c -0.625,2.26565 -1.48438,4.70705 -2.57812,7.32422 -1.09376,2.6172 -2.38282,5.01954 -3.86719,7.20703 l 0.35156,0.23438 c 1.48437,-1.64062 2.69531,-3.20312 3.63282,-4.6875 l 0,11.13281 c -10e-6,1.71874 -0.0391,3.74999 -0.11719,6.09375 l 1.75781,-0.9375 c -0.0781,-1.25 -0.11719,-2.50001 -0.11719,-3.75 l 0,0 z";
const 相 = "m   3  , 3    l 7.5,0 0,6.67968 -7.5,0 0,-6.67968 z m -1.640625,10.19531 1.640625,-0.70313 0,-2.22656 7.5,0 0,2.69531 1.757813,-0.82031 c -0.07815,-1.875 -0.117214,-9.02343 -0.117188,-21.44531 l 1.054688,-0.82031 -1.640625,-1.64063 -1.289063,1.28906 -7.148437,0 -1.757813,-1.17187 c 0.07811,1.79689 0.117172,5.85939 0.117188,12.1875 -1.6e-5,6.32812 -0.03907,10.54687 -0.117188,12.65625 l 0,0 z m 1.640625,-23.08594 7.5,0 0,5.97656 -7.5,0 0,-5.97656 z m 0,6.5625 7.5,0 0,5.74219 -7.5,0 0,-5.74219 z m -9.609375,-2.69531 -5.859375,0 0.9375,0.9375 c 0.703121,-0.23436 1.484371,-0.35155 2.34375,-0.35156 l 2.34375,0 c -0.781257,3.90626 -2.89063,8.24219 -6.328125,13.00781 l 0.351563,0.35156 c 2.57812,-2.42187 4.648431,-5.27343 6.210937,-8.55469 -7e-6,4.45314 -0.03907,9.10157 -0.117187,13.94532 l 1.757812,-0.82032 c -0.07813,-1.95312 -0.117196,-6.83593 -0.117187,-14.64843 1.093739,0.70314 1.855457,1.69923 2.285156,2.98828 0.429676,1.28907 0.898425,1.48438 1.40625,0.58594 0.507799,-0.89843 0.429674,-1.64062 -0.234375,-2.22656 -0.664075,-0.58593 -1.816418,-1.1914 -3.457031,-1.81641 l 0,-2.8125 5.976562,0 -1.992187,-1.875 -1.40625,1.28906 -2.578125,0 0,-5.74219 1.054687,-0.82031 -2.695312,-1.05469 c 0.07812,1.95315 0.11718,4.49221 0.117187,7.61719 l 0,0 z";
const 仕 = "m  -7  , 9    l 0,-12.5390625 0.8203125, -0.8203125 -1.7578125, -0.8203125 c 0.781245, -1.5624825 1.5038999999999998, -2.9882625000000003 2.1679725, -4.277347499999999 0.66405, -1.28904 1.3085849999999999, -2.089815 1.9335900000000001, -2.40234 l -2.6953125, -1.640625 c -0.7812525000000001, 3.2812725 -1.7773500000000002, 6.171892499999999 -2.9882775, 8.671875 -1.2109425, 2.5000125 -2.71485, 5.03907 -4.511722499999999, 7.6171875 l 0.3515625, 0.3515625 c 1.5624975, -1.6406174999999998 3.2031225, -3.8281124999999996 4.921875, -6.5625 l 0, 12.5390625 c 0, 1.3281224999999999 -0.039075, 3.0078075 -0.1171875, 5.0390625 l 1.9921875, -0.8203125 c -0.0781275, -1.5625050000000003 -0.11719500000000001, -3.007815 -0.1171875, -4.3359375 l 0, 0 z m 9.375, -16.640625 0, 4.21875 -8.203125, 0 0.9375, 0.9375 c 0.7031175000000001, -0.23435999999999998 1.48437, -0.3515475 2.34375, -0.3515625 l 4.921875, 0 0, 13.4765625 -7.03125, 0 0.9375, 0.9375 c 0.7031175000000001, -0.234375 1.4843625, -0.3515625 2.34375, -0.3515625 l 13.2421875, 0 -1.9921875, -2.109375 -1.5234375, 1.5234375 -4.21875, 0 0, -13.4765625 9.140625, 0 -2.109375, -2.34375 -1.875, 1.7578125 -5.15625, 0 0, -7.6171875 0.8203125, -0.703125 -2.6953125, -1.2890625 c 0.0781125, 2.03127 0.11717250000000001, 3.8281425000000002 0.1171875, 5.390625 l 0, 0 z";
const 帥 = "m   7  ,-6.5  l 4.453125,0 0,11.953125 c -0.078151,0.703129 -0.4687755,1.03516 -1.171875,0.996093 -0.703149,-0.03906 -1.4453362,-0.136714 -2.2265625,-0.292968 l 0,0.46875 c 1.640601,0.546878 2.5780995,1.328127 2.8125,2.34375 1.484348,-0.781248 2.187472,-1.874997 2.109375,-3.28125 l 0,-11.71875 0.9375,-0.703125 -1.757812,-1.523438 -1.054688,1.171875 -4.1015625,0 0,-4.6875 1.0546875,-0.9375 -2.6953125,-1.171875 c 0.078105,1.250023 0.1171672,3.515646 0.1171875,6.796875 l -4.1015625,0 -1.7578125,-0.9375 c 0.078113,1.796892 0.1171725,4.394545 0.1171875,7.792969 -1.5e-5,3.398445 -0.039075,6.308598 -0.1171875,8.730469 l 1.640625,-0.9375 0,-14.0625 4.21875,0 0,14.648437 c -2.03e-5,1.562501 -0.039083,3.437499 -0.1171875,5.625 l 1.7578125,-0.820312 c -0.078146,-1.406251 -0.1172093,-2.773437 -0.1171875,-4.101563 l 0,-15.351562 z m -17.2265625,-1.40625 5.859375,0 0,5.390625 -5.859375,0 0,-5.390625 z m 0,10.546875 6.328125,0 0,6.679687 -6.328125,0 0,-6.679687 z m -1.640625,9.726562 1.640625,-0.703125 0,-1.757812 6.328125,0 0,1.757812 1.640625,-0.703125 c -0.078135,-0.937499 -0.1172025,-3.554684 -0.1171875,-7.851562 l 0.703125,-0.585938 -1.40625,-1.523437 -1.0546875,1.054687 -6.09375,0 0,-3.984375 5.859375,0 0,1.40625 1.640625,-0.820312 c -0.078135,-1.093737 -0.1172025,-3.124986 -0.1171875,-6.09375 l 0.8203125,-0.585938 -1.5234375,-1.523437 -1.0546875,1.054687 -3.632812,0 1.8749995,-3.046875 1.0546875,-0.820312 -2.4609375,-1.40625 c -7.5e-6,1.328148 -0.4296895,3.085959 -1.2890625,5.273437 l -1.171875,0 -1.640625,-0.820312 c 0.07812,1.562518 0.117188,5.000015 0.117188,10.3125 0,5.312504 -0.03908,9.101562 -0.117188,11.367187 l 0,0 z";
const 炮 = "m   4  , 4    l 0,0.46875 c 2.5781,0.54688 3.8281,1.40625 3.75,2.57813 0.7031,-0.15625 1.42576,-0.56641 2.16797,-1.23047 0.74216,-0.66406 1.15232,-1.81641 1.23047,-3.45703 0.0781,-1.64062 0.15622,-5.15624 0.23437,-10.54688 l 0.9375,-0.82031 -2.10937,-1.64062 -0.82032,1.28906 -7.85156,0 c 0.54686,-1.56248 0.93748,-2.53904 1.17188,-2.92969 l 0.82031,-0.58594 -2.69531,-1.28906 c -0.15627,1.40627 -0.62502,3.33986 -1.40625,5.80078 -0.78127,2.46095 -1.91408,4.98048 -3.39844,7.5586 l 0.35156,0.23437 c 0.85937,-0.85936 1.7578,-2.03124 2.69531,-3.51562 l 0,14.0625 c -1e-5,1.56249 0.8203,2.34374 2.46094,2.34375 l 9.375,0 c 1.6406,-1e-5 2.73435,-0.58595 3.28125,-1.75782 -0.5469,-0.15625 -0.93753,-0.52734 -1.17187,-1.11328 -0.23441,-0.58594 -0.31253,-1.69922 -0.23438,-3.33984 l -0.58594,0 c -0.0781,1.17187 -0.19533,2.26562 -0.35156,3.28125 -0.15628,1.01562 -0.5469,1.52343 -1.17187,1.52344 l -8.67188,0 c -0.85939,-1e-5 -1.32814,-0.46875 -1.40625,-1.40625 l 0,-7.03125 4.45313,0 0,0.82031 1.64062,-0.70313 0,-5.74218 1.05469,-0.70313 -1.99219,-1.75781 -1.05469,1.28906 -3.98437,0 -1.17188,-0.70312 c 0.70311,-1.32812 1.28905,-2.57811 1.75782,-3.75 l 8.32031,0 c -2e-5,7.10938 -0.0977,11.03516 -0.29297,11.77734 -0.19533,0.74219 -0.60549,1.13282 -1.23047,1.17187 -0.62502,0.0391 -1.99221,-0.0195 -4.10156,-0.17578 l 0,0 z m -3.39844,-7.73437 4.45313,0 0,5.625 -4.45313,0 0,-5.625 z m -8.78906,-10.19531 c 0.0781,4.45314 0.11718,8.33985 0.11719,11.66015 -1e-5,3.32032 -0.33204,6.11329 -0.9961,8.37891 -0.66406,2.26562 -2.01172,4.57031 -4.04297,6.91406 l 0.23438,0.35156 c 3.28124,-2.65625 5.31249,-5.85937 6.09375,-9.60937 1.40624,1.40625 2.32421,2.59765 2.75391,3.57421 0.42967,0.97657 0.78123,1.50391 1.05468,1.58204 0.27343,0.0781 0.5078,-0.29297 0.70313,-1.11329 0.1953,-0.82031 -0.0391,-1.58202 -0.70313,-2.28515 -0.66407,-0.70312 -1.89454,-1.48437 -3.6914,-2.34375 0.15624,-2.57812 0.23436,-4.72655 0.23437,-6.44531 1.09374,-1.01561 1.97265,-1.85546 2.63672,-2.51954 0.66405,-0.66404 1.26952,-1.0742 1.81641,-1.23046 l -1.64063,-1.99219 c -0.46876,1.32814 -1.40626,2.9297 -2.8125,4.80469 l 0,-7.61719 0.9375,-0.9375 -2.69531,-1.17187 z m -2.34375,7.73437 -0.46875,0 c -0.3125,1.79689 -0.76172,3.10548 -1.34766,3.92578 -0.58594,0.82033 -0.70312,1.34767 -0.35156,1.58203 0.35156,0.23439 0.80078,0.25392 1.34766,0.0586 0.54687,-0.1953 0.89843,-0.68358 1.05468,-1.46484 0.15625,-0.78124 0.0781,-2.14842 -0.23437,-4.10156 l 0,0 z";
const 兵 = "m  -7  , 2    l -6.32812,0 0.9375,0.9375 c 0.70311,-0.234369 1.48437,-0.351556 2.34375,-0.351563 l 24.02343,0 -2.10937,-2.109375 -1.52344,1.523438 -5.39062,0 0,-7.265625 6.91406,0 -2.10938,-2.109375 -1.52343,1.523437 -13.59375,0 0,-5.15625 c 2.2656,-0.15623 4.84373,-0.371073 7.73437,-0.644531 2.89061,-0.273416 4.99997,-0.449198 6.32813,-0.527344 l -1.75782,-2.226562 c -1.32814,0.703147 -2.9883,1.269553 -4.98047,1.699218 -1.9922,0.429709 -4.39454,0.800802 -7.20703,1.113282 l -1.875,-1.171875 c 0.0781,2.421894 0.11718,4.687517 0.11719,6.796875 l 0,7.96875 z m 3.28125,1.875 c -0.62501,0.859379 -1.66017,1.894534 -3.10547,3.105468 -1.44532,1.210939 -3.61328,2.675781 -6.5039,4.394532 l 0.11718,0.46875 c 3.35937,-1.484376 6.7578,-3.359375 10.19532,-5.625 l 1.40625,-0.117188 -2.10938,-2.226562 z m 6.5625,0 -0.23437,0.46875 c 1.6406,1.093753 2.98825,2.109378 4.04296,3.046875 1.05467,0.9375 2.05076,2.011718 2.98829,3.222656 0.93747,1.210935 1.60153,1.035154 1.99218,-0.527344 0.3906,-1.562499 -2.53908,-3.632809 -8.78906,-6.210937 l 0,0 z m -8.20312,-9.140625 8.67187,0 0,7.265625 -8.67187,0 0,-7.265625 z";
const PieceDict = { 車: 車, 馬: 馬, 象: 象, 士: 士, 將: 將, 砲: 砲, 卒: 卒, 俥: 俥, 傌: 傌, 相: 相, 仕: 仕, 帥: 帥, 炮: 炮, 兵: 兵 };

class Piece {
    constructor(piece_str, color, x, y) {
	this.piece = piece_str;
	this.color = color;
	this.relx = x; // relative x
	this.rely = y; // relative y
    }
    realPos() {
	if (this.color==="black")
	    return [this.relx, this.rely];
	else
	    return [10-this.relx, 11-this.rely];
    }
}

const base_unit = 80;
const u = base_unit*1;
const svg_width = 10*u;
const svg_height = 11*u;

const innerBoarderLines = [
    [2*u, 6*u, 0, 4*u],
    [3*u, 6*u, 0, 4*u],
    [4*u, 6*u, 0, 4*u],
    [5*u, 6*u, 0, 4*u],
    [6*u, 6*u, 0, 4*u],
    [7*u, 6*u, 0, 4*u],
    [8*u, 6*u, 0, 4*u],

    [2*u, 1*u, 0, 4*u],
    [3*u, 1*u, 0, 4*u],
    [4*u, 1*u, 0, 4*u],
    [5*u, 1*u, 0, 4*u],
    [6*u, 1*u, 0, 4*u],
    [7*u, 1*u, 0, 4*u],
    [8*u, 1*u, 0, 4*u],

    [u,   2*u, 8*u, 0],
    [u,   3*u, 8*u, 0],
    [u,   4*u, 8*u, 0],
    [u,   5*u, 8*u, 0],
    [u,   6*u, 8*u ,0],
    [u,   7*u, 8*u ,0],
    [u,   8*u, 8*u ,0],
    [u,   9*u, 8*u ,0],

    [4*u, 1*u,  2*u,  2*u],
    [4*u, 3*u,  2*u, -2*u],
    [4*u, 8*u,  2*u,  2*u],
    [4*u, 10*u, 2*u, -2*u],
];

const initPieces = [
    new Piece(俥, "red", 1, 1), new Piece(車, "black", 1, 1),
    new Piece(傌, "red", 2, 1), new Piece(馬, "black", 2, 1),
    new Piece(相, "red", 3, 1), new Piece(象, "black", 3, 1),
    new Piece(仕, "red", 4, 1), new Piece(士, "black", 4, 1),
    new Piece(帥, "red", 5, 1), new Piece(將, "black", 5, 1),
    new Piece(仕, "red", 6, 1), new Piece(士, "black", 6, 1),
    new Piece(相, "red", 7, 1), new Piece(象, "black", 7, 1),
    new Piece(傌, "red", 8, 1), new Piece(馬, "black", 8, 1),
    new Piece(俥, "red", 9, 1), new Piece(車, "black", 9, 1),
    new Piece(炮, "red", 2, 3), new Piece(砲, "black", 2, 3),
    new Piece(炮, "red", 8, 3), new Piece(砲, "black", 8, 3),
    new Piece(兵, "red", 1, 4), new Piece(卒, "black", 1, 4),
    new Piece(兵, "red", 3, 4), new Piece(卒, "black", 3, 4),
    new Piece(兵, "red", 5, 4), new Piece(卒, "black", 5, 4),
    new Piece(兵, "red", 7, 4), new Piece(卒, "black", 7, 4),
    new Piece(兵, "red", 9, 4), new Piece(卒, "black", 9, 4)
];


d3.select("body").selectAppend("#chessboard", "svg").mattr("width", svg_width, "height", svg_height).lower();

(function add_svg_defs() {
    let sp = 0.06;
    let ln = 0.08;
    
    d3.select("svg#chessboard").selectAppend("#svgdefs", "defs");
    d3.select("svg defs#svgdefs").selectAppend("#chess-marker-r", "path").attr("class", "boarderLine")
	.attr("d", `M 0,0 m ${sp*u},${-(sp+ln)*u} ${0},${ln*u}  ${ln*u},${0}
                M 0,0 m ${sp*u},${(sp+ln)*u}  ${0},${-ln*u} ${ln*u},${0}}`);

    d3.select("svg defs#svgdefs").selectAppend("#chess-marker-l", "path").attr("class", "boarderLine")
	.attr("d", `M 0,0 m ${-sp*u},${-(sp+ln)*u} ${0},${ln*u}  ${-ln*u},${0}
                M 0,0 m ${-sp*u},${(sp+ln)*u}  ${0},${-ln*u} ${-ln*u},${0}}`);

})();

(function add_board_lines() {
    d3.select("#chessboard").selectAppend("#boarderAndLine", "g");
    d3.select("#boarderAndLine").append("rect").mattr("id", "outer rectangle", "class", "boarderLine").mattr("width",9.6*u,"height",10.6*u,"x","11","y","11");
    d3.select("#boarderAndLine").append("rect").mattr("id", "inner rectangle", "class", "boarderLine").mattr("width",  8*u,"height",   9*u,"x",   u,"y",   u);
    var l = d3.select("#boarderAndLine").append("g").attr("id", "innerLines").selectAll("path").data(innerBoarderLines);
    l.enter().append("path").attr("class","boarderLine").attr("d", function(x){return `m ${x[0]},${x[1]} ${x[2]},${x[3]}`;});
})();

(function add_board_marker() {
    let marker = [[1,4], [3,4], [5,4], [7,4], [9,4], [2,3], [8,3]];
    marker = marker.concat(marker.map(x=>[10-x[0],11-x[1]]));
    let marker_l = marker.filter(x=>x[0]>1);
    let marker_r = marker.filter(x=>x[0]<9);
    d3.select("#boarderAndLine").selectAppend("#marker", "g");
    d3.select("g#marker").selectAll("use_l").data(marker_l).enter().append("use").mattr("transform", function(ab){return `matrix(${u/60},0,0,${u/60},${ab[0]*u},${ab[1]*u})`;}, "xlink:href", "#chess-marker-l");
    d3.select("g#marker").selectAll("use_r").data(marker_r).enter().append("use").mattr("transform", function(ab){return `matrix(${u/60},0,0,${u/60},${ab[0]*u},${ab[1]*u})`;}, "xlink:href", "#chess-marker-r");
})();

(function add_board_pieces() {
    d3.select("#chessboard").selectAppend("#pieces", "g");    
    let p = d3.select("g#pieces").selectAll("g").data(initPieces);
    let ele = p.enter().append("g").attr("transform",function(p){
	let z = p.realPos();
	let real_x = z[0];
	let real_y = z[1];
	return `matrix(${u/60},0,0,${u/60},${real_x*u},${real_y*u})`;
    });
    ele.append("circle").mattr("cx", 0, "cy", 0, "r", 24.375, "class", "pieceCircle outerCircle shadow");
    ele.append("circle").mattr("cx", 0, "cy", 0, "r", 20.801, "class", "pieceCircle innerCircle blurShadow").attr("style", function(p){return `stroke:${p.color}`;});
    ele.append("path").attr("d", function(x){return `m 0,0 ${x.piece}`;}).attr("class", function(x){return `chess-characters chess-characters-${x.color}`;});
})();


