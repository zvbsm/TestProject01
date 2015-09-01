'use strict';

var searchApp = angular.module('searchApp',[])

.controller('appCtrl', function($scope
	//getYelp service temporarily disabled until GET is fixed
	//, getYelp
	) {

	var map = L.map('map').setView([37.775408,-122.413682], 13);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	    maxZoom: 18,
	    id: 'zvbsm.d3e38e55',
	    accessToken: 'pk.eyJ1IjoienZic20iLCJhIjoiMjJiY2IxNzg4M2YyOTA5OTQ0MjI1ZTkxNWFlM2VlOGYifQ.HVYcYHt5WLqzxf-LQr-86g'
	}).addTo(map);

	//$scope.businesses = getYelp.businesses;
	$scope.businesses = [
		{name: "Pizza Hut", address: "1234 Johnson Ave.", rating: 4.5},
		{name: "Tony's Pizza", address: "5959 Maple St.", rating: 5},
		{name: "Luigi's", address: "2325 Broadway Ave.", rating: 3}
	];

	$scope.removeBiz = function(index) {
		$scope.businesses.splice(index, 1);
	};
	$scope.removeAllBiz = function() {
		$scope.businesses.splice(0, $scope.businesses.length);
	};

});


/*  400 bad request error

.service('getYelp', function($http) {


	var nonceGen = function() {
	    var text = "";
	    var length = 32;
	    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	    for(var i = 0; i < length; i++) {
	        text += possible.charAt(Math.floor(Math.random() * possible.length));
	    }
	    return text;
	}

		var httpMethod = 'GET',
		url = 'https://api.yelp.com/v2/search?term=food&location=San+francisco&callback=JSON_CALLBACK',
		parameters = {
			oauth_consumer_key : 'Ux93cMU7JPsfjCuQGYepoQ',
			oauth_token : 'KktBla6mhLD8qnTAHHnunQDwMH4JQSQN',
			oauth_nonce : nonceGen(),
			oauth_timestamp : new Date().getTime(),
			oauth_signature_method : 'HMAC-SHA1'
		},
		consumerSecret = 'wHXZdnjFXYH00MJfOhPZ7adOMVI',
		tokenSecret = 'SKevjjJ3z0OVKcAFjgTkd30F1eA',
		encodedSignature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret);
		//,
		//signature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret,
		//	{encodeSignature: false});
	parameters['oauth_signature'] = encodedSignature;
	$http.jsonp(url, {parameters : parameters})
	.then(function(response) {
		var businesses = response;
		
		console.log('success! ' + businesses);
	
	});

});

*/