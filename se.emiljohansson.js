/*
 * Base code for the API and all global and core class objects.
 *
 * Latest version can be found at https://github.com/emiljohansson/se.emiljohansson.js
 *
 * @copyright  2012 Emil Johansson, http://emiljohansson.se/
 * @date       Apr 18, 2012
 * @version    0.0.5
 * @class      Core
 * @requires   
 * @example    
 */

var se = se || {};

/*jslint browser: true, devel:true, jquery:true, nomen: true, vars: true */
/*global defined */
(function() {

	"use strict";

	//Initializes the namespaces
	se.emiljohansson				= {};
	se.emiljohansson.ui				= {};
	se.emiljohansson.dom			= {};
	se.emiljohansson.dom.client		= {};
	se.emiljohansson.dom.client.ui	= {};
	se.emiljohansson.apps			= {};
	se.emiljohansson.games			= {};
	se.emiljohansson.gfx			= {};
	se.emiljohansson.gfx.apps		= {};
	se.emiljohansson.ajax			= {};


	/**
	 * Using this method makes it possible 
	 */
	se.emiljohansson.debug = (function() {
		
		/*----------------------------------------------
			Private 
		----------------------------------------------*/
		var ERROR_MESSAGE = "Error! Unable to load data.";

		/*----------------------------------------------
			Public
		----------------------------------------------*/

		var my = {};

		/**
		 * Alerts an error message.
		 *
		 * @param string msg The message to be displayed, does not have to be set.
		 */
		my.displayErrorMessage = function(msg) {
			if (msg === null || msg === "") {
				msg = ERROR_MESSAGE;
			}
			alert(msg);
		};

		/**
		 * Is used to be able to debug in the console, without worrying that the browser doesn't support it.
		 *
		 * @param string msg	The message or object to be displayed.
		 * @param object target	Can be set to present more than one object or message.
		 */
		my.clog = function(msg, target) {
			if (typeof console === "undefined") { return; }
			if (target) { console.log(msg, target); }
			else		{ console.log(msg); }
		};

		return my;

	}());

	window.require = se.emiljohansson.require = function(modules, callback, libBaseUrl) {
		
		/*----------------------------------------------
			Private 
		----------------------------------------------*/

		function init() {
			se.emiljohansson.debug.clog("se.emiljohansson.require called");
			if (typeof libBaseUrl === "undefined") {
				libBaseUrl = "";
			}
			addModules();
		}

		function addScript(src, onAdded) {
			var el = document.createElement('script');
			el.type = 'text/javascript';
			el.src = libBaseUrl+src;
			el.onload = onAdded;
			document.body.appendChild(el);
			return el;
		}

		function addModules() {
			var ct = 0, i = 0, ln = modules.length;
			var onAdded = function() { //modules[i]
				ct++;
				if (ct >= modules.length && typeof callback === "function") {
					callback();
					callback = null;
				}
			};
			for (i; i < ln; i++) {
				var el = addScript(modules[i], onAdded);
				el = null;
			}
		}

		/*----------------------------------------------
			Public
		----------------------------------------------*/

		init();

	};

	/**
	 * Extends all the public methods and data from parent.
	 * If child is not is defiend means that the caller object is an static class
	 * @example 
	 *		var my = extend(new myParent());
	 *
	 * Else if child is defined, call function in the beginning of the child object.
	 * @example
	 *		extend(myParent, this);
	 *
	 */
	window.extend = se.emiljohansson.extend = function(parent, child) {
		if (defined(child)) {
			parent.apply(child);
			return;
		}
		var my = {};
		for (var key in parent) {
			if (parent.hasOwnProperty(key)) {
				my[key] = parent[key];
			}
		}
		return my;
	};

	//fix...  
	window.defined = se.emiljohansson.defined = function(obj) {
		return typeof obj !== 'undefined' && obj !== null;
	};


	/*
	 * description...
	 *
	 * @copyright  2011, Emil Johansson and Linnaeus University, http://emiljohansson.se/
	 * @date       Jan 23, 2012
	 * @version    0.3.5
	 * @class      SimpleModel
	 * @requires   jQuery 1.7.1
	 * @example    
	 */
	window.SimpleModel = se.emiljohansson.ajax.simplemodel = (function() {

		/*----------------------------------------------
			Private 
		----------------------------------------------*/
		var container	= null;
		var debug		= se.emiljohansson.debug;

		var _handler = {
			success: function(data) {
				//TODO: add data to container  
				if (data === "") {
					se.emiljohansson.debug.clog(data);       
					data = "[empty data]";
				}
				debug.clog(data);       
			},
			error: function() {
				debug.displayErrorMessage("Error! Unable to load data.");
			}
		};

		/*----------------------------------------------
			Public 
		----------------------------------------------*/
		this.call = function(data, handler, dataType) {
			debug.clog('-----------------------');
			debug.clog(data, handler, dataType);
			if (!defined(handler)) {
				handler = _handler;
			}
			$.ajax({
				url: "./",
				type: "GET",
				data: "call="+data,
				dataType: dataType,
				contentType: "application/x-www-form-urlencoded;charset=utf-8",
				success: handler.success,
				error: handler.error
			});
		};

		this.load = function(url, callback, dataType) {
			if (callback === undefined || callback === null) {
				return;
			}
			$.ajax({
				url: url,
				type: "GET",
				data: {},
				dataType: dataType,
				contentType: "application/x-www-form-urlencoded;charset=utf-8",
				success: callback
			});
		}; 

		this.getContainer = function() { return container; };
		this.setContainer = function(target) { container = target; };

	});

}());
