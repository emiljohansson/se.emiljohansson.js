/*
 *
 * Latest version can be found at https://github.com/emiljohansson/se.emiljohansson.js
 *
 * @author		Emil Johansson, http://emiljohansson.se/
 * @date		Aug 12, 2012
 * @version		0.1.0
 * @requires	se.emiljohansson.js
 *
 */

/*jslint browser: true */
/*global se */
window.Mouse = se.emiljohansson.ui.mouse = (function() {

	"use strict";

	/*----------------------------------------------
		Private 
	----------------------------------------------*/

	/*----------------------------------------------
		Public
	----------------------------------------------*/

	var Mouse = {};

	Mouse.getPosition = function(event){
		if (event.pageX || event.pageY) {
			return { x:event.pageX, y:event.pageY };
		}
		return {
			x: event.clientX + document.body.scrollLeft - document.body.clientLeft,
			y: event.clientY + document.body.scrollTop  - document.body.clientTop
		};
	};

	return Mouse;

}());


