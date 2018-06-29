function UsuariosDAO(connection){
  this._connection = connection;
}

UsuariosDAO.prototype.inserirUsuario = function(usuario, res){
  var dados = {
    operacao: "inserir",
    usuario: usuario,
    collection: "usuarios",
    callback: function(err, result){
      res.send("Cadastro realizado");
    }
  }
  this._connection(dados);
}

// UsuariosDAO.prototype.autenticar = function(usuario){
//   var dados = {
//     operacao: "pesquisar",
//     usuario: usuario,
//     collection: "usuarios",
//     callback: function(err, result){
//       res.send("Cadastro realizado");
//     }
//   }
//   this._connection(dados);
// }

module.exports = function(){
  return UsuariosDAO;
}
