'use strict';

var searchApp = angular.module('searchApp',[])

.controller('mapCtrl', function($scope) {
	var map = L.map('map').setView([37.775408,-122.413682], 13);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	    maxZoom: 18,
	    id: 'zvbsm.d3e38e55',
	    accessToken: 'pk.eyJ1IjoienZic20iLCJhIjoiMjJiY2IxNzg4M2YyOTA5OTQ0MjI1ZTkxNWFlM2VlOGYifQ.HVYcYHt5WLqzxf-LQr-86g'
	}).addTo(map);

});