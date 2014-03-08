
module.exports = function(req, res, ok){


	var sessionUserMatchesId = req.session.User.id == req.param('id');	//在影片中是用===，因為是用mongodb，他的id是字串(類似guid)，但在mysql中是 1,2,3,...如用===會出string比int的狀況會永遠false
	var isAdmin = req.session.User.admin;

	console.log(" session: " + req.session.User.id);
	console.log(" session type: " + typeof(req.session.User.id));
	console.log(" req: " + req.param('id'));
	console.log(" req type: " + typeof(req.param('id')));
	console.log(" sessionUserMatchesId: " + sessionUserMatchesId );

	// The requested id does not match the user's id,
	// and this is not an admin
	if (!(sessionUserMatchesId || isAdmin)) {
		var noRightsError = [{name: 'noRights', message: 'You must be an admin.'}]
		req.session.flash = {
			err: noRightsError
		}
	    res.redirect('/session/new');
	    return;
	}

	ok();
}