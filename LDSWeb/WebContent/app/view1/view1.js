'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope, ldsService) {
	
	var pos = {};	
	init();	
	
	$scope.getLocation = function getLocation() {
//		alert("FROM SERVICE: " + ldsService.getAddress());
//		alert("Latitude: " + pos.coords.latitude + " Longitude: " + pos.coords.longitude);
		latlng.innerHTML = "Latitude: " + pos.coords.latitude + " Longitude: " + pos.coords.longitude;
		addr.innerHTML = ldsService.getAddress();
	}
	function showPosition(position) {
		pos = position;		
		ldsService.setAddress(position.coords.latitude, position.coords.longitude);		
	}
	
	function init()
	{
		if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(showPosition);	        
	    } else {
	    	latlng.innerHTML = "Geolocation is not supported by this browser.";
	    }
	}
});