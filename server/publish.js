const Receipt = new Mongo.Collection('receipt');

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
	}
});