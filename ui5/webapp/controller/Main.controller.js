sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ui5.error.test.ui5.controller.Main", {
		onInit: function () {

		},
		
		onUserSelection: function(oEvent) {
			var oContext = oEvent.getParameter("rowContext");
			this.byId("idFriendsTable").setBindingContext(oContext, "Book");
		}
	});
});