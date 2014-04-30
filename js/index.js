! function ($) {
    'use strict';

    //api_token
    var sendInformation = function () {
			if (!checkForCompleteness()){
				//do nothing
			}
            else{
				var name = $("#name").val(),
					email = $("#email").val(),
					subject = $("#subject").val(),
					message = $("#message").val(),
					data = "NAME " + name + ", EMAIL " + email + ", SUBJECT: " + subject + ", MSG:" + message,
					url = 'http://charlieouyang.pythonanywhere.com/submit/' + data;
					
					$.get( url, function( data ) {
						alert( "Load was performed." );
					});
					
			}
        },
		
		//Custom alert function for failure
        FailedAlert = function (message) {
            bootbox.dialog({
                message: message,
                title: "Error!",
                buttons: {
                    success: {
                        label: "Ok",
                        className: "btn-danger"
                    }
                }
            });
        },

        checkForCompleteness = function () {
			var name = $("#name").val(),
				email = $("#email").val(),
				subject = $("#subject").val(),
				message = $("#message").val(),
				full = true,
				errorMessage = "Please fill in these sections: ";
			
			if (name == ""){
				errorMessage += "Name ";
				full = false;
			}
			if (email == ""){
				errorMessage += "Email ";
				full = false;
			}
			if (subject == ""){
				errorMessage += "Subject ";
				full = false;
			}
			if (message == ""){
				errorMessage += "Message ";
				full = false;
			}
			if (!full){
				//FailedAlert(errorMessage);
				return true;
				//return false
			}
			else{
				return true;
			}
        };

    //bind the button events and initialize the dropdowns
    $(function () {
        $("#submitContactButton").click(function () {
            sendInformation();
        });
    })

}(window.jQuery);