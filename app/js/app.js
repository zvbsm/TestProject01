'use strict';

var searchApp = angular.module('searchApp',['leaflet-directive'])

.controller('appCtrl', function($scope, $http, getYelp) {

	/* Original mapbox leaflet code, will delete if angular leaflet directive works better
	var map = L.map('map').setView([37.775408,-122.413682], 13);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	    maxZoom: 18,
	    id: 'zvbsm.d3e38e55',
	    accessToken: 'pk.eyJ1IjoienZic20iLCJhIjoiMjJiY2IxNzg4M2YyOTA5OTQ0MjI1ZTkxNWFlM2VlOGYifQ.HVYcYHt5WLqzxf-LQr-86g'
	}).addTo(map);

		function onMapClick(e) {
    		console.log(e.latlng);
		}
		map.on('click', onMapClick);
	*/ 

	$scope.removeBiz = function(index) {
		$scope.businesses.splice(index, 1);
	};
	$scope.removeAllBiz = function() {
		$scope.businesses.splice(0, $scope.businesses.length);

		console.log('the list of markers' + $scope.marker);

	};

	$scope.searchBiz = function() {
		//Used for testing first method in getYelp factory
		//var searchLoc = 'san francisco';
		//var searchTerm = 'pizza';
		//$scope.businesses = getYelp(searchLoc, searchTerm);

		$scope.businesses = getYelp;
		console.log("yelp businesses " + $scope.businesses);
		
	};
})

.controller('mapCtrl', function($scope, $http) {
	angular.extend($scope, {
	    defaults: {
	        tileLayer: "http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png",
	        maxZoom: 14,
	        path: {
	            weight: 10,
	            color: '#800000',
	            opacity: 1
	        }
	    }
	});
	angular.extend($scope, {
	    center: {
	    	autoDiscover: true
	    }
	});

	$scope.layers = {
        baselayers: {
            mapbox_terrain: {
                name: 'Mapbox Terrain',
                url: 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={apikey}',
                type: 'xyz',
                layerOptions: {
                    apikey: 'pk.eyJ1IjoienZic20iLCJhIjoiMjJiY2IxNzg4M2YyOTA5OTQ0MjI1ZTkxNWFlM2VlOGYifQ.HVYcYHt5WLqzxf-LQr-86g',
                    id: 'zvbsm.d3e38e55'
                }
            }
        }
    };
})

/*  XMLHttpRequest cannot load https://api.yelp.com/v2/search. No 'Access-Control-Allow-Origin' header is present on the requested resource.
https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS#section_5

possible work around to install on server
http://benalman.com/projects/php-simple-proxy/
*/

.factory('getYelp', function($http) {


	/* First GET method. Returns 'Access-Control-Allow-Origin' error

	return function(location, term) {

		var nonceGen = function() {
		    var text = "";
		    var length = 32;
		    var possible = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		    for(var i = 0; i < length; i++) {
		        text += possible.charAt(Math.floor(Math.random() * possible.length));
		    }
		    return text;
		};

		return $http({
			method: 'JSONP',
			url: 'http://api.yelp.com/v2/search',
			params: {
				term: term,
				location: location,
				callback: 'JSON_CALLBACK',
				oauth_consumer_key : 'Ux93cMU7JPsfjCuQGYepoQ',
				oauth_token : 'KktBla6mhLD8qnTAHHnunQDwMH4JQSQN',

				oauth_consumer_secret : 'wHXZdnjFXYH00MJfOhPZ7adOMVI',
				oauth_token_secret : 'SKevjjJ3z0OVKcAFjgTkd30F1eA',

				oauth_nonce : nonceGen(),
				oauth_timestamp : new Date().getTime(),
				oauth_signature_method : 'HMAC-SHA1',
				oath_version : '1.0'
			}
		});
	};


	// Second method also returns 'Access-Control-Allow-Origin' error

	var nonceGen = function() {
	    var text = "";
	    var length = 32;
	    var possible = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	    for(var i = 0; i < length; i++) {
	        text += possible.charAt(Math.floor(Math.random() * possible.length));
	    }
	    return text;
	};
		var httpMethod = 'GET',
		url = 'https://api.yelp.com/v2/search',
		parameters = {
			oauth_consumer_key : 'Ux93cMU7JPsfjCuQGYepoQ',
			oauth_token : 'KktBla6mhLD8qnTAHHnunQDwMH4JQSQN',
			oauth_nonce : nonceGen(),
			oauth_timestamp : new Date().getTime(),
			oauth_signature_method : 'HMAC-SHA1',
			oath_version : '1.0'
		},
		consumerSecret = 'wHXZdnjFXYH00MJfOhPZ7adOMVI',
		tokenSecret = 'SKevjjJ3z0OVKcAFjgTkd30F1eA',
		signature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret,
			{ encodeSignature : false});
		//,
		//signature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret,
		//	{encodeSignature: false});
	//parameters['oauth_signature'] = encodedSignature;
	$http(url, signature)
	.then(function(response) {
		var businesses = response;
		console.log(businesses);	
	});
	*/
	

	var businesses = [
		{
			name: "Pizza Hut", 
			address: "1234 Johnson Ave.", 
			rating: 4.5,
			lat: 37.78930232286027,
			lon: -122.40443229675292
		},
		{
			name: "Tony's Pizza", 
			address: "5959 Maple St.", 
			rating: 5,
			lat: 37.79594930209237,
			lon: -122.43241310119629
		},
		{
			name: "Luigi's", 
			address: "2325 Broadway Ave.", 
			rating: 3,
			lat: 37.759315660088305,
			lon: -122.43189811706542
		}
	];
	return businesses;
	
});