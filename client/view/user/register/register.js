Template.register.events({
	'submit form': function(e) {
		e.preventDefault();

		// Alphanumeric (min char: 4-15)
		var regex = /^[a-zA-Z0-9]{4,15}$/;

		var getUsername = $('#registerUsername').val();
		var getPassword = $('#registerPassword').val();

		if(regex.test(getUsername) && getPassword.length >= 8) {
			Accounts.createUser({
				username: getUsername,
				password: getPassword
			});

			FlowRouter.redirect("/ikeep/show");
		}

		else {
			alert("Password must contain at least 8 characters. Username must be alphamumeric.")
			// $('#registerUsername').val("");
			// $('#registerPassword').val("");
		}
	}
});