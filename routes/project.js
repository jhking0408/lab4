exports.viewProject = function(req, res) {
	var name = req.params.name;
	console.log("The project name is " + name);
	res.render("project", {
		"projectName": name
	});
	/* exports.view = function(req, res){
	 res.render('index', {
    'projects': [
      { 'name': 'Waiting in Line',
        'image': 'lorempixel.people.1.jpeg',
        'id': 'project1'
      },
     ]
	});
	}*/
}
