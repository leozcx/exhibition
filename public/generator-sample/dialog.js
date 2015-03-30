define(['dojo/_base/declare', 'dijit/form/Button', 'widget/javascript/paas/widgets/ConfirmDialogExt'], function(declare, Button, Dialog) {

	var m = declare([], {
		init : function(holder) {
			var myDialog = new Dialog({
				title : "Programmatic Dialog Creation",
				style : "width: 300px",
				widgets_confirmdialog_yes : "YES",
				widgets_confirmdialog_no : "NO",
				widgets_confirmdialog_title: "title"
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
