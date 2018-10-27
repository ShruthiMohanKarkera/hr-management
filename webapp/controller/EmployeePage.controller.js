sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("HrAndEmp.HR_Management.controller.EmployeePage", {
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("EmployeePage").attachMatched(this._onObjectMatched, this);
		},

		_onObjectMatched: function (oEvent) {
			var oArg = oEvent.getParameters("arguments");
			var oView = this.getView();
			oView.setModel(this.getOwnerComponent().getModel("empDetails"));
			oView.bindElement("/details/" + oArg.arguments.obj);
			var oModel = this.getView().getModel("empDetails");
			oModel.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);

			/*var oModel = new sap.ui.model.json.JSONModel({details1: "details" });
			oModel.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);*/
			//this.myEmpPath = oArg.arguments.obj;
		},

		handleEditPress: function (oEvent) {
			var oView = this.getView();
			var oDialog = oView.byId("helloDialog");
			// create dialog lazily
			if (!oDialog) {
				// create dialog via fragment factory
				oDialog = sap.ui.xmlfragment(oView.getId(), "HrAndEmp.HR_Management.view.HelloDialog", this);
				// connect dialog to view (models, lifecycle)
				oView.addDependent(oDialog);

			}

			oDialog.open();
		},
		onCloseDialog: function (oEvent) {
		var empphoneno =this.byId("fphoneno").getValue();
		var empofficeno =this.byId("fofficeno").getValue();
		var empgoal1 =this.byId("fgoal1").getValue();
		var empgoal2 =this.byId("fgoal2").getValue();
		var empline1 =this.byId("fline1").getValue();
		var empline2 =this.byId("fline2").getValue();
		var empline3 =this.byId("fline3").getValue();
		var empmline1 =this.byId("fmline1").getValue();
		var empmline2 =this.byId("fmline2").getValue();
		var empmline3 =this.byId("fmline3").getValue();
		var empemail =this.byId("femail").getValue();
		var emppayment_place =this.byId("fpayment_place").getValue();
		var empaccount =this.byId("faccount").getValue();
		
		
		var oObj = {
			phoneno:empphoneno,
			officeno:empofficeno,
			goal1:empgoal1,
			goal2:empgoal2,
			line1:empline1,
			line2:empline2,
			line3:empline3,
			mline1:empmline1,
			mline2:empmline2,
			mline3:empmline3,
			email:empemail,
			payment_place:emppayment_place,
			account:empaccount
		};
		var myArray = [];

			var oModel = this.getView().getModel("empDetails");
			for (var i = 0; i < oModel.oData.editedData.length; i++) {
				myArray.push(oModel.oData.editedData[i]);
			}
			myArray.push(oObj);
			oModel.setProperty("/editedData", myArray);

			 myArray = oModel.getProperty("/editedData", myArray);
		
		//	var oModel = new sap.ui.json.JSONModel();
		//	var title = oModel.getProperty("phoneno");

			
		//	oModel.loadData("");
			
			
			
			
			this.byId("helloDialog").close();
		},
		logOut: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("login");
		}

	});

});