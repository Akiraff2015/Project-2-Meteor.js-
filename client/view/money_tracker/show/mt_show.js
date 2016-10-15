// Setting sessions
Session.setDefault('form', 'edit_delete_form');

const Receipt = new Mongo.Collection('receipt');
Meteor.subscribe('receipt');

// var total = 0;

// Receipt.find({price}).map(function(data) {
// 	total += data.toFloat();
// });

// console.log(total);

Template.edit_delete_form.helpers({
	receipt: function() {
		return Receipt.find({}, {sort: {createdAt: -1}});
	},
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
		return total;
	}
});

Template.mt_show.events ({
	'click #expandForm':function(e) {
		e.preventDefault();
	},

	'click .changeForm': function(e, template) {
		Session.set('form', e.currentTarget.getAttribute('data-form'));
	},

	'click .addFormButton': function(e) {
		var itemName = $('#itemName').val();
		var paymentMethod = $('#paymentMethod').val();
		var price = $('#price').val();

		Receipt.insert({
			item: itemName,
			payment: paymentMethod,
			price: price,
			date: new Date()
		});

		e.preventDefault();
	}
});
