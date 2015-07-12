'use strict';

var eventsURL = "./data/events.json";
var recordsInEventURL = "./data/record/";
var recordsURL = "./data/records" ;

//signUpSheetApp = angular.module('signUpSheetApp', ['ngRoute', 'signUpSheetControllers'] );



signUpSheetApp.controller( 'EventsController',
	function ($scope, $routeParams, $http){


		$scope.routeParams = $routeParams;

		//Run callback function if success		       
		var updateEventModel = function(){
			$http.get(eventsURL).
				success(function(data, status, headers, config) {
					$scope.indexed_events = $scope.events || [];
					data.forEach(function(element, index, array ){
					   $scope.indexed_events[ String( element._id ) ] = element;
					});
					$scope.events = data;
				}).
				error(function(data, status, headers, config) {
					$scope.events = [];
				});
		};

		//Get event from event ID			       
		var getEvent = function ( eventID, events ){
			var event = events.find( function( element, index, array ){
				if( event._id == eventID ){
					return true;
				}else{
					false;
				}
			});
			return event;
		};
		
		$scope.setTitleWithEventTime = function (){
			if( $routeParams.eventId ){
				var event = getEvent( $routeParams.eventId, $scope.events );				
				$scope.title = event.start;
			}else{
				$scope.title = 'All';
			}			
		}

		updateEventModel( );
	}
	
);



var signUpSheetControllers = angular.module('signUpSheetControllers', ['ngRoute']);

signUpSheetControllers.controller( 'SheetAllController',
	[ '$scope', '$http', function( $scope, $http ){
		
		$http.get( recordsURL ).
			success(function(data, status, headers, config) {
				$scope.records = data;
			}).
			error(function(data, status, headers, config) {
				$scope.records = [];
			});
		
	}]);


signUpSheetControllers.controller( 'SheetEventController',
	[ '$scope', '$routeParams', '$http', function( $scope, $routeParams, $http ){

		$scope.event = $routeParams.eventId;			       
		$http.get( recordsInEventURL + $scope.event ).
			success(function(data, status, headers, config) {
				$scope.records = data;
			}).
			error(function(data, status, headers, config) {
				$scope.records = [];
			});
		
	}]);


