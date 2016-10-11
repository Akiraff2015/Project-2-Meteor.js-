Template.user_modal.events({
	'click #login': function(e) {
		e.preventDefault();

		var getUsername = $("#getUsername").val();
		var getPassword = $("#getPassword").val();

		Meteor.loginWithPassword(getUsername,getPassword, function(e) {
			//TODO: error handling
			if (typeof e === "undefined") {
				FlowRouter.go("/ikeep/dashboard");

			// Throws an error
			} else {
				console.log("Invalid password or username!");
			}
		
		});
	}
});

Template.nav_menu.events({
	'click #logout': function(e) {
			e.preventDefault();
			Meteor.logout();
		}
});