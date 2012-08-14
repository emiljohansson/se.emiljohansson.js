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
window.UIObject = se.emiljohansson.ui.uiobject = (function() {
	
	"use strict";

	/*----------------------------------------------
		Private 
	----------------------------------------------*/

	var that = this;
	var elem = null;

	/*----------------------------------------------
		Public
	----------------------------------------------*/

	this.getId		= function() { return elem.getAttribute('id'); };
	this.setId		= function(style) { elem.setAttribute('id', style); };

	this.getClass		= function()		{ return elem.getAttribute('class'); };
	this.setClass		= function(name)	{ elem.setAttribute('class', name); };
	this.addClass		= function(name)	{ elem.className += ' '+name; };
	this.removeClass	= function(name)	{ 
		var orginal = that.getClass().split(" ");
		for (var i = 0; i < orginal.length; i++) {
			if (orginal[i] === name) {
				orginal.splice(i, 1);
				break;
			}
		}
		var classes = orginal.toString().replace(",", " ");
		that.setClass(classes);
	};
		
	this.getText	= function()		{ return elem.innerHTML; };
	this.setText	= function(text)	{ elem.innerHTML = text; };

	this.getElement = function() { return elem; };
	this.setElement = function(/*Element*/ element) { elem = element; };

});


