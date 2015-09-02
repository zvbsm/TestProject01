'use strict';

var searchApp = angular.module('searchApp',['leaflet-directive'])

.controller('appCtrl', function($scope, $http, getYelp) {

	var updateMarkers = function() {
		//I found that 'delete $scope.markers[index]' will delete the marker when added to the removeBiz() function, 
		//but the remaining markers will not be updated with a new value. Therefore, I'm using angular's forEach() to update the markers 
		//so their values are current with the remaining businesses listed.
		var markers = {},
		index = 0;
		angular.forEach($scope.businesses, function(value, key) {
			console.log(key + ':' + value);
			var name = $scope.businesses[index].name;
			var thisInd = index;
			markers[thisInd] = {
				lat: $scope.businesses[index].lat,
				lng: $scope.businesses[index].lng,
				message: name + '<br>' + 'Rating: ' + $scope.businesses[index].rating,
				focus: false,
				draggable: false
			};
			index++;
		});
		$scope.markers = markers;
	};


	$scope.removeBiz = function(index, biz) {
		delete $scope.markers[index];
		$scope.businesses.splice(index, 1);
		updateMarkers();		
	};

	$scope.removeAllBiz = function() {
		$scope.businesses.splice(0, $scope.businesses.length);
		$scope.markers = {};
	};

	$scope.searchBiz = function() {
		//Used for testing getYelp factory
		//var searchLoc = 'san francisco';
		//var searchTerm = 'pizza';
		//$scope.businesses = getYelp(searchLoc, searchTerm);

		$scope.businesses = getYelp;
		updateMarkers();	
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

/*
	/* First GET method. Returns 'Access-Control-Allow-Origin' error

	return function(location, term) {

		var nonceGen = function() {
		    var text = "",
		    chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		    for(var i = 0; i < 32; i++) {
		        text += chars.charAt(Math.floor(Math.random() * chars.length));
		    }
		    console.log('nonceGen made ' + text);
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
			var httpMethod = 'JSONP',
			url = 'https://api.yelp.com/v2/search',
			parameters = {
				location : location,
				term : term,
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
			console.log('this signiture is ' + signature);
			//,
			//signature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret,
			//	{encodeSignature: false});
		//parameters['oauth_signature'] = encodedSignature;
		return $http.get(url, {params : parameters});
		
		//.then(function(response) {
		//	var businesses = response;
		//	console.log(businesses);	
		//});
	}	
	
*/
	var businesses = [
		{
			name: "Pizza Hut", 
			address: "1234 Johnson Ave.", 
			rating: 4.5,
			lat: 37.78930232286027,
			lng: -122.40443229675292
		},
		{
			name: "Tony's Pizza", 
			address: "5959 Maple St.", 
			rating: 5,
			lat: 37.79594930209237,
			lng: -122.43241310119629
		},
		{
			name: "Luigi's", 
			address: "2325 Broadway Ave.", 
			rating: 3,
			lat: 37.759315660088305,
			lng: -122.43189811706542
		}
	];
	return businesses;
});