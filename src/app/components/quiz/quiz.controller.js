angular.module('app').controller('QuizController', ['$scope', function($scope) {
	$scope.credentials = {
		    id: ''
		  };
	    $scope.quizes = [
	        {
	            name: 'De eerste Quiz',
	            question : [
	              {
	            	  name: 'test question??',
            		  answer : [
            		              {
            		            	  name: 'test answer??'
            		              },
            		              {
            		            	  name: 'test answer??'
            		              },
            		              {
            		            	  name: 'test answer??'
            		              }
            		            ]	  
	              }
	            ]
	        },
	        {
	            name: 'De tweede Quiz',
	            
	            question : [
	      	              {
	      	            	  name: 'test question??',
	                  		  answer : [
	                  		              {
	                  		            	  name: 'test answer??'
	                  		              },
	                  		              {
	                  		            	  name: 'test answer??'
	                  		              },
	                  		              {
	                  		            	  name: 'test answer??'
	                  		              }
	                  		            ]	  
	      	              }
	      	          ]
	           },
	        {
	            name: 'De derde Quiz',
	        }
	    ];
}]);