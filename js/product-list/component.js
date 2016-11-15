'use strict';

 angular.module('phoneList').
 	component('phoneList', {
 		templateUrl: 'js/product-list/product.html',
 		controller: ['$http',
 		function PhoneListController($http) {
 		var self = this;
 		self.orderProp = 'age';

 		$http.get('js/product/product-list.json').then(function(response) {
 			self.phones = response.data;
 		});
 		}
 	]
 	});