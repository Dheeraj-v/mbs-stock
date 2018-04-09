var express = require('express');
var router = express.Router();
var User = require('../models/user');
// Get Homepage
router.get('/', ensureAuthenticated,function(req, res){
		console.log(req)
		if(req.user.category === 'Office'){
		res.render('index')

		}
		else{
		res.render('index')
		}
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

module.exports = router;