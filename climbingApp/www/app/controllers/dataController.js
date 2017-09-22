var map;
var currPosition;
var markers = [];

climbApp.controller('DataCtrl', function($scope, $routeParams) {

	$scope.sLoadHome = function() {

	}

	$scope.sLoadRegion = function() {

		$('#carRegions').owlCarousel({
			loop : true,
			margin : 10,
			nav : false,
			items : 1,
			animateOut: 'fadeOut'
		});

	}

});
