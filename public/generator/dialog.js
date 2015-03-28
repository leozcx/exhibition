define(['dojo/_base/declare', 'dijit/form/Button', 'dijit/Dialog'], function(declare, Button, Dialog) {

	var m = declare([], {
		init : function(holder) {
			var myDialog = new Dialog({
				title : "Programmatic Dialog Creation",
				style : "width: 300px"
			});
			var myButton = new Button({
				label : "Show me!",
				onClick : function() {
					myDialog.set("content", "Hey, I wasn't there before, I was added at " + new Date() + "!");
					myDialog.show();
				}
			}, holder).startup();
		}
	});

	return m;
});

