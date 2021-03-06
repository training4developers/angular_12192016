(function(angular) {

	'use strict';

	angular.module("WidgetApp.Components")
		.component("appHome", {

			controller: "homeCtrl",
			//templateUrl: "../tpls/home.html"
			template: `<table class="table table-striped">
	<thead>
		<tr>
			<th>Name</th>
			<th>Color</th>
			<th>Size</th>
			<th>Qty</th>
			<th>Action</th>
		</tr>
	</thead>
	<tbody>
		<tr ng-repeat="widget in $ctrl.widgets">
			<td>{{widget.name}}</td>
			<td>{{widget.color}}</td>
			<td>{{widget.size}}</td>
			<td>{{widget.quantity}}</td>
			<td>
				<button class="btn btn-default" ng-click="$ctrl.editWidget(widget.id)">Edit</button>
				<button class="btn btn-default" ng-click="$ctrl.viewWidget(widget.id)">View</button>
			</td>
		</tr>
	</tbody>
</table>
<button class="btn btn-primary" ng-click="$ctrl.createWidget()">Create</button>
`

		});
		

})(angular);
