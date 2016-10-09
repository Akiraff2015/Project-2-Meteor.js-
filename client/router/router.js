// const FlowRouter = require('kadira:flow-router');

FlowRouter.route('/', {
	action: function() {
		BlazeLayout.render('homepage', {
			image: 'index'
		});
	}
});

FlowRouter.route('/itrack', {
	action: function() {
		BlazeLayout.render('layout', {
			nav: 'nav_menu', 
			body: 'mt_show'
		});
	}
});

FlowRouter.route('/itrack/show', {
	action: function() {
		BlazeLayout.render('layout', {
			nav: 'nav_menu',
			body: 'mt_show'
		});
	}
});

// TODO: display GOOGLE CHART API
FlowRouter.route('/itrack/dashboard', {
	action: function() {
		BlazeLayout.render('layout', {
			nav: 'nav_menu',
			body: 'mt_show'
		});
	}
});