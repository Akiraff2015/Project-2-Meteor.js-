const Receipt = new Mongo.Collection('receipt');

Meteor.publish('receipt', function() {
	return Receipt.find();
});