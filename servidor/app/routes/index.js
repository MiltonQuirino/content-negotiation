module.exports = function(application){
	application.get('/', function(req, res){

		res.format({
			
			html: function(){
				res.send('Bem vindo a sua app NodeJS! HTML');
			},

			Json: function(){
				var retorno ={
					body: 'Bem vindo a sua app NodeJS!'					
				}
				res.json(retorno);
			}

		});

		
	});

application.post('/', function(req, res){
	var dados = req.body;
	res.send(dados);
	// res.send('teste');
});

}