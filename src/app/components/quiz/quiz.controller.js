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
	           },
	        {
	            name: 'De derde Quiz',
	        }
	    ];
	    
	    $scope.showQuestion = true;
        $scope.toggleQuiz = function() {
            $scope.showQuestion = $scope.showQuestion === false ? true: false;
        };
        
        $scope.showAnswer = true;
        $scope.toggleQuestion = function() {
            $scope.showAnswer = $scope.showAnswer === false ? true: false;
        };
}]);