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
/*global se, extend, UIObject, Element */
window.Widget = se.emiljohansson.ui.uiobject.widget = (function() {

	"use strict";

	extend(UIObject, this);

	/*----------------------------------------------
		Private 
	----------------------------------------------*/
	var that	= this;
	var TAG		= 'div';

	function init() {
		that.setElement(new Element(TAG));
	}

	/*----------------------------------------------
		Public
	----------------------------------------------*/

	this.dealloc = function() {

	};

	this.removeFromParent = function() {
		var parent = that.getElement().parentNode;
		if (parent === null) {
			return;
		}
		that.getElement().removeAllChildren();
		parent.removeChild(that.getElement());
	};

	this.on = function(type, listener) {
		if (that.getElement().addEventListener) {
			that.getElement().addEventListener(type, listener);
		}
		else if (that.getElement().attachEvent) {
			that.getElement().attachEvent('on'+type);
		}
	};

	this.off = function(type, listener) {
		if (that.getElement().removeEventListener) {
			that.getElement().removeEventListener(type, listener);
		}
		else if (that.getElement().detachEvent) {
			that.getElement().detachEvent('on'+type);
		}
	};

	this.trigger = function(type) {
		var event;
		if (document.createEvent) {
			event = document.createEvent("HTMLEvents");
			event.initEvent(type, true, true);
		}
		else {
			event = document.createEventObject();
			event.eventType = type;
		}

		if (document.createEvent) {
			that.getElement().dispatchEvent(event);
		}
		else {
			that.getElement().fireEvent("on" + event.eventType, event);
		}
	 
	};

	init();

});


