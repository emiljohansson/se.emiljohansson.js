/*
 *
 * Latest version can be found at https://github.com/emiljohansson/se.emiljohansson.js
 *
 * @copyright  2012 Emil Johansson, http://emiljohansson.se/
 * @date       May 13, 2012
 * @version    0.0.5
 * @requires   se.emiljohansson.js
 *
 */

/*jslint browser: true, jquery:true, nomen: true, vars: true */
/*global se */
(function() {

	"use strict";

	var Widget = se.emiljohansson.dom.client.ui.widget = (function(elemTag) {
		
		/*----------------------------------------------
			Private 
		----------------------------------------------*/
		var TAG = 'div';

		/*----------------------------------------------
			Public
		----------------------------------------------*/

		elemTag				= elemTag || TAG;
		var elem			= document.createElement(elemTag);
			elem.setId		= function(id)		{ elem.setAttribute('id', id); };
			elem.setClass	= function(name)	{ elem.setAttribute('class', name); };
			elem.addClass	= function(name)	{ elem.className += ' '+name; };
			elem.setText	= function(text)	{ elem.innerHTML = text; };
			elem.append		= function(obj)		{ elem.appendChild(obj); };
			
			elem.prepend	= function(obj)	{ 
				elem.append(obj); 
				var children	= elem.children;
				var num			= children.length - 1;
				elem.insertBefore(children[num], elem.firstChild);
			};

			elem.on = function(type, listener) {
				if (elem.addEventListener) {
					elem.addEventListener(type, listener);
				}
				else if (elem.attachEvent) {
					elem.attachEvent('on'+type);
				}
			};

			elem.off = function(type, listener) {
				if (elem.removeEventListener) {
					elem.removeEventListener(type, listener);
				}
				else if (elem.detachEvent) {
					elem.detachEvent('on'+type);
				}
			};

			elem.trigger = function(type) {
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
					elem.dispatchEvent(event);
				}
				else {
					elem.fireEvent("on" + event.eventType, event);
				}
		 
			};

		return elem;

	});


	/*
	 *
	 * @copyright  2012 Emil Johansson, http://emiljohansson.se/
	 * @date       May 13, 2012
	 * @version    0.0.5
	 * @requires   core.js
	 */

	window.Anchor = se.emiljohansson.dom.client.ui.anchor = (function(_text, _href) {
		
		/*----------------------------------------------
			Private 
		----------------------------------------------*/

		var TAG		= 'a';
		var elem	= new Widget(TAG); //, elem = parent.asWidget(TAG);
		
		function init() {
			_text	= _text || "",
			_href	= _href || '#';
			elem.setText(_text);
			elem.setHref(_href);
		}

		/*----------------------------------------------
			Public
		----------------------------------------------*/

		elem.setHref	= function(href) { 
			elem.setAttribute('href', href); 
		};

		init();

		return elem;

	});


	/*
	 *
	 * @copyright  2012 Emil Johansson, http://emiljohansson.se/
	 * @date       May 13, 2012
	 * @version    0.0.5
	 * @requires   core.js
	 */

	window.Label = se.emiljohansson.dom.client.ui.label = (function(_text) {
		
		/*----------------------------------------------
			Private 
		----------------------------------------------*/

		var TAG		= 'span';
		var elem	= new Widget(TAG); //, elem = parent.asWidget(TAG);
		
		function init() {
			_text = _text || "",
			elem.setText(_text);
		}

		/*----------------------------------------------
			Public
		----------------------------------------------*/

		init();

		return elem;

	});


	/*
	 *
	 * @copyright  2012 Emil Johansson, http://emiljohansson.se/
	 * @date       May 13, 2012
	 * @version    0.0.5
	 * @requires   core.js
	 */

	window.Input = se.emiljohansson.dom.client.ui.input = (function(_type, _value) {
		
		/*----------------------------------------------
			Private 
		----------------------------------------------*/
		var TAG		= 'input';
		var elem	= new Widget(TAG); 
		
		function init() {
			elem.type	= _type;
			elem.value	= _value;
		}

		/*----------------------------------------------
			Public
		----------------------------------------------*/	

		init();

		return elem;

	});

}());
