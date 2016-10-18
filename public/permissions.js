const Receipt = new Mongo.Collection('receipt');

Receipt.allow({
	// insert: => return true;
	insert: function() {
		return true;
	}

	update: function() {
		return true;
	},

	remove: function() {
		return true;
	}
});