angular.module('phoneDetail').component('phoneDetail',
{
	templateUrl: 'js/product-detail/detail.html',
	controller: ['$http', '$routeParams',
	function PhoneDetailCotroller($http, $routeParams) {
			var self = this;

			self.setImage = function setImage(imageUrl) {
				self.mainImageUrl = imageUrl;
			}

			$http.get('js/product/' + $routeParams.phoneId + ".json").then(function(response) {
				self.phone = response.data;
				self.setImage(self.phone.images[0]);
			});
	}]
});