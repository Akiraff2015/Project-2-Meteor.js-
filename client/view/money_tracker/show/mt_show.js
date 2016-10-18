import {Receipt} from '../../../../imports/api/receipt.js';
// Setting sessions
Session.setDefault('form', 'edit_delete_form');
Meteor.subscribe('receipt');

Template.edit_delete_form.helpers({
	receipt: function() {
		return Receipt.find({}, {sort: {createdAt: -1}});
	},
});

Template.edit_delete_form.events({
	'click .deleteButton': function(e) {
		Meteor.call('removeReceipt', this._id);
		e.preventDefault();

	}
});

Template.mt_show.helpers({
	settingForm: function(form) {
		return Session.get('form');
	},

	totalPrice: function() {
		var total = 0;
		Receipt.find().map(function(data) {
			total += parseFloat(data.price);
		});
		return total.toFixed(2);
	}
});

Template.mt_show.events ({
	'click #expandForm':function(e) {
		e.preventDefault();
		Meteor.call('totalPaymentCash');
	},

	'click .changeForm': function(e, template) {
		Session.set('form', e.currentTarget.getAttribute('data-form'));
	},

	'click .addFormButton': function(e) {
		var itemName = $('#itemName').val();
		var paymentMethod = $('#paymentMethod').val();
		var price = $('#price').val();

		Meteor.call('addNewReceipt', itemName, paymentMethod, price);

		$('#itemName').val("");
		$('#paymentMethod').val("");
		$('#price').val("");

		e.preventDefault();
	}
});
