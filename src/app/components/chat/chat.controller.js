angular.module('app').controller('ChatController', ['$scope', function($scope) {
  $scope.home = 'test home controller';
  
  $scope.message = {
		  text: ''
  };
  
  $scope.sendMessage = function(message) {
	  if(message.text.length > 0) {
		  addMessage(message.text, 1)
	  }
  };
  
  updateScroll();
  
  /*
   * Call updateScroll() is a new message is send
   * It will scroll automatic down, unless the user scrolled up
   */
  function addMessage(message, send){
	  var agent = "Recieved";
	  
	  if (send != undefined) {
		  agent = "Send"
	  }
	  
	  var d = new Date();
	  var minutes = d.getMinutes();
	  if(minutes < 10){
		  minutes = "0" + minutes;
	  }
	  
	  var hours = d.getHours();
	  if(hours < 10){
		  hours = "0" + hours;
	  }
	  
	  var time = hours + ":" + minutes
	  
	  $("#Messages").append("" +
  		"<div class='Message "+ agent +"'>" +
  			"<p class='label'>"+ message +"<em>"+ time +"</em></p>" +
		"</div>");
	  updateScroll();
  }
  
  
  var scrolled = false;
  function updateScroll(){
      if(!scrolled){
    	  console.log("Scrolled automaticly down");
    	  $("#Messages").scrollTop($("#Messages")[0].scrollHeight);
    	  return false;
      }
  }
  
  $('#Messages').bind('scroll', function() {
     if($(this).scrollTop() + $(this).innerHeight()>=$(this)[0].scrollHeight) {
    	 console.log('Bottom reached, Auto scroll enabled');
    	 scrolled=false;
     } else {
    	 console.log('Not at bottom, Auto scroll disabled');
    	 scrolled=true;
     }
   })
   
   
   
   /*
    * Start testing
    */
   // Testing the function
   setInterval(function(){ addMessage(makeid()) }, 10000);
   function makeid() {
       var text = "";
       var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

       for( var i=0; i < 20; i++ )
           text += possible.charAt(Math.floor(Math.random() * possible.length));

       return text;
   }
   /*
    * End testing
    */
}]);
