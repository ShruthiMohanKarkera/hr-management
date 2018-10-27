sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller,JSONModel,Filter,FilterOperator) {
	"use strict";

	return Controller.extend("HrAndEmp.HR_Management.controller.AdminPage", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf HrAndEmp.HR_Management.view.AdminPage
		 */
	onInit: function () {
		 
		},
	logOut: function(){
		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("login");
	},
		onPressItem: function (oEvent) {
			var oItem = oEvent.getSource();
			var model = this.getView().getModel("empDetails");
			var text = oEvent.getParameters().listItem.getBindingContext("empDetails").getObject();

			// Routing 
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			var oObj = oEvent.getParameter("listItem").getBindingContext("empDetails").getPath();
			oRouter.navTo("EmployeeData", {
				//	obj:text,
				obj: oObj.substr(9)
			});
		},
		onSearch: function(oEvent){
			var olist = this.getView().byId("list1"),
				arr = [],
				binding,
				filters;
			filters = new Filter({
				filters: [new Filter("name", FilterOperator.Contains, oEvent.getSource().getValue()),
					new Filter("id", FilterOperator.Contains, oEvent.getSource().getValue())
				],
				and: false
			});

			//  var empId = new Filter("number", FilterOperator.Contains,event.getSource().getValue());
			binding = olist.getBinding("items");
			arr.push(filters);
			// arr.push(empId);
			binding.filter(arr);
			binding.filter(arr);
		},
		addEmployee : function(){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("AdminAddEmployee");
		},
		notifications: function(){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Notification");
		}
	});

});