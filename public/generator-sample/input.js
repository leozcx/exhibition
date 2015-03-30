define(['dojo/_base/declare', 'dijit/form/TextBox'], function(declare, textbox) {

	var m = declare([], {
		init : function(holder) {
			var myTextBox = new dijit.form.TextBox({
				name : "firstname",
				value : ""/* no or empty value! */,
				placeHolder : "type in your name"
			}, holder);
		}
	});

	return m;
}); 