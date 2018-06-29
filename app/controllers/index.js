module.exports.index = function(application, req, res){
  res.render('index', {validacao: {}});
}

module.exports.autenticar = function(application, req, res){
  var dadosForm = req.body;
  req.assert('usuario', 'Usuario não pode ficar vazio').notEmpty();
  req.assert('senha', 'Senha não pode ficar vazia').notEmpty();

  var erros = req.validationErrors();

  if(erros){
    res.render("index", {validacao:erros});
    return;
  }

  var connection = application.config.dbConnection;
  var UsuariosDAO = new application.app.models.UsuariosDAO(connection);

  UsuariosDAO.autenticar(dadosForm);

  res.send('tudo ok para criar a sessao');
}
