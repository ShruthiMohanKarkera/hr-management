sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
], function (Controller,JSONModel,MessageToast) {
	"use strict";

	return Controller.extend("HrAndEmp.HR_Management.controller.AdminAddEmployee", {

		AddEmployee: function(oEvent){
		var empid = this.byId("empId").getValue();
		var empname = this.byId("empName").getValue();
		var emppassword = this.byId("empPassword").getValue();
		
		
		
		var obj = {
				id: empid,
				name: empname,
				password: emppassword
				
			};
			var myArray = [];

			var oModel = this.getView().getModel("empDetails");
			for (var i = 0; i < oModel.oData.details.length; i++) {
				myArray.push(oModel.oData.details[i]);
			}
			
			if(empid !== "" && empname !== "" && emppassword !== ""){
			myArray.push(obj);
			oModel.setProperty("/details", myArray);

			 myArray = oModel.getProperty("/details", myArray);
			 this.reset();
		       }
		       if(empid == "" || empname == "" || emppassword == ""){
		       		MessageToast.show("Please enter all the Feilds");
		       }
			/*myArray.push(obj);
			oModel.setProperty("/details", myArray);

			 myArray = oModel.getProperty("/details", myArray);*/
			
		},
		reset: function () {
			this.getView().byId("empId").setValue('');
			this.getView().byId("empName").setValue('');
			this.getView().byId("empPassword").setValue('');
		},
		onNavBack: function (oEvent) {
			var oHistory, sPreviousHash;
			oHistory = History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				this.getRouter().navTo("AdminPage", {}, true /*no history*/);
			}
		},
		onClick : function(){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("AdminPage");
		},
		logOut: function(){
		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("login");
	}

	});

});