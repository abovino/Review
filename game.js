$( document ).ready(function() {
    $("#startButton").on("click", function(){

    	//change the color of the button to red
    	$(this).addClass('btn-danger')

			var counter = 20;

			var intervalId = setInterval(function() {
				counter--;
				$("#startButton").html(counter);

				if (counter === 0) {
					alert("Sorry, out of time");
					clearInterval(intervalId);
				}
			}, 1000);
    });

    //generate buttons dynamically using jquery

    var names = ['chen', 'arnold', 'darryl', 'jen'];

    for (var i=0; i<names.length;i++) {
    	var button = $('<button>');
    	button.addClass('btn btn-default btn-margin btn-friend')
    	button.text(names[i]);

    	$("#friends").append(button);
    }

   	var friendCounter = 0;

   	$('.btn-friend').on('click', function(){
   		friendCounter++;
   		$("#click-count").text(friendCounter);
   		$(this).prop('disabled', true);
    });


});