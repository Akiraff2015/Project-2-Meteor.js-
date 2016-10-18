import {Receipt} from '../imports/api/receipt.js';

Meteor.publish('receipt', function() {
	return Receipt.find();
});

Meteor.methods({
	'addNewReceipt': function(itemName, paymentMethod, price) {
		Receipt.insert({
			item: itemName,
			payment: paymentMethod,
			price: price,
			date: new Date()
		});
	},

	'removeReceipt': function(id) {
		Receipt.remove(id);
	},

	'totalPaymentCash': function() {
		var cashTotal = 0;
		Receipt.find({payment:"Cash"}).map(function(data) {
			cashTotal += parseFloat(data.price);
		});
		console.log(cashTotal.toFixed(2));
		// return cashTotal.toFixed(2);
	},

	'totalPaymentVisa': function() {
		var visaTotal = 0;
		Receipt.find({payment:"Visa"}).map(function(data) {
			cashTotal += parseFloat(data.price);
		});
		return visaTotal.toFixed(2);
	},

	'totalPaymentMastercard': function() {
		var mastercardTotal = 0;
		Receipt.find({payment:"MasterCard"}).map(function(data) {
			mastercardTotal += parseFloat(data.price);
		});
		return mastercardTotal.toFixed(2);
	},

	'totalPaymentAmex': function() {
		var amexTotal = 0;
		Receipt.find({payment:"American Express"}).map(function(data) {
			amexTotal += parseFloat(data.price);
		});
		return amexTotal.toFixed(2);
	},

	'totalPaymentPaypal': function() {
		var paypalTotal = 0;
		Receipt.find({payment:"Paypal"}).map(function(data) {
			paypalTotal += parseFloat(data.price);
		});
		return paypalTotal.toFixed(2);
	},

	'totalPaymentOther': function() {
		var otherTotal = 0;
		Receipt.find({payment:"Other"}).map(function(data) {
			otherTotal += parseFloat(data.price)
		});
		return otherTotal.toFixed(2);
	}
});