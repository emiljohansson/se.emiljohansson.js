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
/*global se, extend, Widget, AnchorElement */
window.Anchor = se.emiljohansson.ui.uiobject.widget.anchor = (function(text, href) {

	"use strict";

	extend(Widget, this);

	/*----------------------------------------------
		Private 
	----------------------------------------------*/
	var that = this;

	function init() {
		text = text || "";
		href = href || '#';
		that.setElement(new AnchorElement());
        that.setText(text);
		that.setHref(href);
	}

	/*----------------------------------------------
		Public
	----------------------------------------------*/

	this.getHref = function() { return that.getElement().getAttribute('href'); };
	this.setHref = function(href) { that.getElement().setAttribute('href', href); };

	init();

});


