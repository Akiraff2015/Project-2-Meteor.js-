// Setting sessions
Session.setDefault('form', 'edit_delete_form');

Template.mt_show.helpers({
	settingForm: function(form) {
		return Session.get('form');
	}
});

Template.mt_show.events ({
	'click #expandForm':function(e) {
		e.preventDefault();
		console.log("hi");
	},
	'click .changeForm': function(e, template) {
		Session.set('form', e.currentTarget.getAttribute('data-form'));
	}
});