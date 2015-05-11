module.exports = function(app){

	app.get('/web/test', function(req, res){
		Test.find({'status': true}).exec(function(err, records){
			if(err){
				console.log(err);
				res.status(400);
				res.set('Content-Type', 'application/json');
				res.end(JSON.stringify({
					'success':false
				}));
			}
			else{
				res.status(200);
				res.set('Content-Type', 'application/json');
				res.send(JSON.stringify({
					'success': true,
					'records': records
				}));	
			}
		});
	});

}