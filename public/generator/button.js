define(['dojo/_base/declare', 'dijit/form/Button'], function(declare, Button) {

	var m = declare([], {
		init : function(holder) {
			var myButton = new Button({
				label : "Click me!",
				onClick : function() {
					// Do something:
					console.log("clicked.");
				}
			}, holder).startup();
		}
	});

	return m;
}); 