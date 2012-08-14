/*
 *
 * Latest version can be found at https://github.com/emiljohansson/se.emiljohansson.js
 *
 * The creations of an element should only occur from the Widget class. 
 *
 * @author		Emil Johansson, http://emiljohansson.se/
 * @date		Aug 12, 2012
 * @version		0.1.0
 * @requires    se.emiljohansson.js
 *
 */

/*jslint browser: true */
/*global se, extend */
window.Element = se.emiljohansson.dom.element = (function(elemTag) {

	"use strict";

	/*----------------------------------------------
		Private 
	----------------------------------------------*/

	var Node = (function() {

		/*----------------------------------------------
			Private 
		----------------------------------------------*/

		var that = this;

		/*----------------------------------------------
			Public
		----------------------------------------------*/

		this.hasChildren = function()		{ return that.children.length > 0; };
		this.getChildrenNodes = function()	{ return that.children; };

		//end of list
		this.append		= function(obj)	{ that.appendChild(obj); };	
		//beginning of list
		this.prepend	= function(obj)	{ that.insertBefore(obj, that.children[0]); };

		this.getFirstChild = function() { return that.children[0]; };
		
		this.removeAllChildren = function() {
			while (that.hasChildren()) {
				that.removeChild(that.getFirstChild());
			}
		};

	});

	var TAG = 'div';

	/*----------------------------------------------
		Public
	----------------------------------------------*/

	elemTag	= elemTag || TAG;

	var elem = document.createElement(elemTag);

	extend(Node, elem);

	return elem;

});


