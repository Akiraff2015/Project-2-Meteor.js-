FlowRouter.route('/', {
	action: function() {
		document.title = "iKeep";
		BlazeLayout.render('homepage', {
			image: 'index'
		});
	}
});

FlowRouter.route('/ikeep', {
	action: function() {
		BlazeLayout.render('layout', {
			nav: 'nav_menu', 
			body: 'mt_show'
		});
	}
});

FlowRouter.route('/ikeep/show', {
	action: function() {
		document.title = "iKeep - Show";
		BlazeLayout.render('layout', {
			nav: 'nav_menu',
			body: 'mt_show'
		});
	}
});

// TODO: display GOOGLE CHART API
FlowRouter.route('/ikeep/dashboard', {
	action: function() {
		document.title = "iKeep - Dashboard";
		BlazeLayout.render('layout', {
			nav: 'nav_menu',
			body: 'mt_dashboard'
		});
	}
});