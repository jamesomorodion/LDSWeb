//'use strict';

var app = angular.module('myApp.services', ['ngResource']);

app.factory('ldsService', function($resource){
	var addr = {}; 
	
		
	var service = {};
	
	service.name = function(){
		return "TEST JAMES";
	};

	service.setAddress = function(lat, lng){alert("LDS Service");
		var url = 'http://localhost:8080/LDS/rs/LDS/get/lat/lng/' + lat + '/' + lng;
//		alert(url);
		var adRes = $resource(url);
		adRes.get(function(data){		
			addr = data;
//			alert("IN NEW: " + addr.message);
		});
	}
	service.getAddress = function(){
		return addr.message;
	}
	
	return service;
	
});